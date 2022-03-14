import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getLogsList = async () => {
  const token = await getAuth().currentUser.getIdTokenResult();
  const result = await apiCaller.get("logs/list", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getLogsList;