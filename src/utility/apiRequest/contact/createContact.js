import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createContact = async (contactBody) => {
  const token = await getAuth().currentUser.getIdTokenResult();
  const { data } = await apiCaller.post("contact/create", contactBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default createContact;
