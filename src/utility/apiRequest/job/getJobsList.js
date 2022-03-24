import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getJobsList = async () => {
  const token = await getAuth().currentUser.getIdTokenResult();
  const result = await apiCaller.get("job/list", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getJobsList;