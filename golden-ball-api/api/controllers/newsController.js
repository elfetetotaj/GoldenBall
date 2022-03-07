import express from "express";
import newsModel from "../models/newsModel";
import updatedNewsSchema from "../validator/newsValidation/updatedNewsSchema.js";

export default {
  list: async (req, res) => {
    const listNews = await newsModel.find();

    return res.json(listNews);
  },
  get: async (req, res) => {
    const { id } = req.params;
    const news = await newsModel.findOne({ _id: id });

    return res.json(news);
  },
  post: async (req, res) => {
    const news = new newsModel(req.body);

    await news.save();

    return res.json(news);
  },
  put: async (req, res) => {
    const news = req.body;

    const validationResult = updatedNewsSchema.validate(news);

    if (validationResult.error) {
      return res.status(401).json({
        message: "Validation failed while updating",
        error: validationResult.error,
      });
    }

    await newsModel.updateOne({ _id: news._id }, news);

    const updatedNews = await newsModel.find({
      _id: news._id,
    });

    return res.json(updatedNews);
  },
  deleteFile: async (req, res) => {
    const { newsId, filename } = req.params;

    FileService.deleteFiles([filename]);

    const newsData = await newsModel.findOne({ _id: newsId }, { files: 1 });

    const updatedFilenames = newsData.files
      .replace(`${filename};`, "")
      .replace(filename, "");

    await newsModel.updateOne(
      { _id: newsId },
      {
        files: updatedFilenames,
      }
    );

    const updatedNews = await newsModel.findOne(
      { _id: newsId },
      {
        files: updatedFilenames,
      }
    );

    return res.json(updatedNews);
  },
  uploadFile: async (req, res) => {
    const { id } = req.params;

    const receivedFiles = [req.files.file];

    try {
      const files = await FileService.uploadFiles(receivedFiles);

      console.log("files - ", files);

      const news = await newsModel.find({ _id: id }, { files: 1 });
      const oldFiles = news.files;

      const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;

      await newsModel.updateOne({ _id: id }, [
        {
          $set: { files: newFiles },
        },
      ]);

      const updatedNews = await newsModel.find({ _id: id });
      return res.json(updatedNews);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  },
};
