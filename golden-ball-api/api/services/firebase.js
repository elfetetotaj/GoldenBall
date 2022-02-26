import admin from "firebase-admin";

import serviceAccount from "../credentials/golden-ball-1531f-firebase-adminsdk-5bxai-86d5b4ecfc.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
