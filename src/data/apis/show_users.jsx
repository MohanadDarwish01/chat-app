import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";

export const showUsers = async (user_id) => {
    let final = {};
    const docRef = doc(db, "users", user_id);
    const userData = await getDoc(docRef);

    if (userData.exists()) {
        final = { name: userData.data().name , id: userData.id }
    } else {
        console.log("No such document!");
    }

    return final

}


