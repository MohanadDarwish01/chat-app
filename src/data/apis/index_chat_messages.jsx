import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";

export const indexChatMessages = async (chat_id) => {
    const messages = await getDocs(collection(db, `chats/${chat_id}/messages`));
    let final = [];
    messages.forEach((message) => {
        let message_obj = { ...message.data(), documentId: message.id }
        final.push(message_obj)
    });
    return final

}