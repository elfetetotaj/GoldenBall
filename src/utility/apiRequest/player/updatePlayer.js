import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const updatePlayer = async (playerBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.put("player/update", playerBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default updatePlayer;
