import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";

export const indexUsers = async () => {
    const users = await getDocs(collection(db, "users"));
    let final = [];
    users.forEach((user) => {
        let user_obj = { ...user.data(), documentId: user.id }
        final.push(user_obj)
    });
    return final

}