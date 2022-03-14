import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getPlayer = async (playerId) => {
  const token = await getAuth().currentUser.getIdTokenResult();
  const result = await apiCaller.get(`player/${playerId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getPlayer;
