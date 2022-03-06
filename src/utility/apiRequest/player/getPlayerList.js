import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getPlayerList = async () => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get("player/list", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getPlayerList;
