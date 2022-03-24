import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createJobs = async (newBody) => {
  const token = await getAuth().currentUser.getIdTokenResult();
  const { data } = await apiCaller.post("job/create", newBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default createJobs;
