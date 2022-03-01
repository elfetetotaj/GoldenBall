import { getAuth } from "firebase/auth";
import apiRequest from "../../apiRequest";

const createPlayer = async (playerBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiRequest.post("player/create", playerBody, {
    //authorization: `Bearer ${token}`,
  });

  return data;
};

export default createPlayer;
