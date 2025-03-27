import { indexChatMessages } from "../apis/index_chat_messages";
import { indexUsers } from "../apis/index_users"
import { showUsers } from "../apis/show_users";

export const userRepo = {
    get_all_users: async () => {
        return await indexUsers();
    },

    get_user_data : async(user_id) => {
        return showUsers(user_id)
    },

    get_chat_messages: async (chat_id) => {
        return await indexChatMessages(chat_id);
    }
}