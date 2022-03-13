import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createLogs = async (newBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.post("logs/create", newBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default createLogs;
