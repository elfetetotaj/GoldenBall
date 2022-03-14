import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const removeFile = async (id, file) => {
  const token = await getAuth().currentUser.getIdTokenResult();

  return apiCaller.put(`player/${id}/removeFile/${file.name}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export default removeFile;
