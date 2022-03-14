import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createPlayer = async (playerBody) => {
  const token = await getAuth().currentUser.getIdTokenResult();
  const { data } = await apiCaller.post("player/create", playerBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default createPlayer;
