import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deletePlayer= async (id) => {
  const token = await getAuth().currentUser.getIdTokenResult();

  return apiCaller.delete(`player/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export default deletePlayer;
