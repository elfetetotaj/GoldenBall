import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createNews = async (newBody) => {
  const token = await getAuth().currentUser.getIdTokenResult();
  const { data } = await apiCaller.post("news/create", newBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default createNews;
