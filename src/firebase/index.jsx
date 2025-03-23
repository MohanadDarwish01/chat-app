import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8-X5i3OQ0ymE-05BxWddGX2JW9fmsoTw",
  authDomain: "bootcamp-9b551.firebaseapp.com",
  projectId: "bootcamp-9b551",
  storageBucket: "bootcamp-9b551.firebasestorage.app",
  messagingSenderId: "1082264790988",
  appId: "1:1082264790988:web:32a8d4fa73a155f2239f69"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;