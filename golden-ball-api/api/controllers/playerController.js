import express from "express";
import playerModel from "../models/playerModel";
import updatedPlayerSchema from "../validator/playerValidation"



export default {
    list: async (req, res) => {
        const listPlayers = await playerModel.find();

        return res.json(listPlayers);
    },
    get: async (req, res) => {
        const { id } = req.params;
        const player = await playerModel.findOne({ _id: id });

        return res.json(player);
    },
    post: async (req, res) => {
        const player = new playerModel(req.body);

        await player.save();

        return res.json(player);
    },
    put: async (req, res) => {
        const player = req.body;
    
        const validationResult = updatedPlayerSchema.validate(player);
    
        if (validationResult.error) {
          return res.status(401).json({
            message: "Validation failed while updating",
            error: validationResult.error,
          });
        }
    
        await playerModel.updateOne({ _id: player._id }, player);
    
        const updatedPalyer = await playerModel.find({
          _id: player._id,
        });
    
        return res.json(updatedPalyer);
      },
      deleteFile: async (req, res) => {
        const { playerId, filename } = req.params;
    
        FileService.deleteFiles([filename]);
    
        const playerData = await playerModel.findOne(
          { _id: playerId },
          { files: 1 }
        );
    
        const updatedFilenames = playerData.files
          .replace(`${filename};`, "")
          .replace(filename, "");
    
        await playerModel.updateOne(
          { _id: playerId },
          {
            files: updatedFilenames,
          }
        );
    
        const updatedPlayer = await playerModel.findOne(
          { _id: playerId },
          {
            files: updatedFilenames,
          }
        );
    
        return res.json(updatedPlayer);
      },
      uploadFile: async (req, res) => {
        const { id } = req.params;
    
        const receivedFiles = [req.files.file];
    
        try {
          const files = await FileService.uploadFiles(receivedFiles);
    
          console.log("files - ", files);
    
          const player = await playerModel.find({ _id: id }, { files: 1 });
          const oldFiles = player.files;
    
          const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;
    
          await playerModel.updateOne({ _id: id }, [
            {
              $set: { files: newFiles },
            },
          ]);
    
          const updatedPlayer = await playerModel.find({ _id: id });
          return res.json(updatedPlayer);
        } catch (err) {
          res.status(500).json({ err: err.toString() });
        }
      },
}