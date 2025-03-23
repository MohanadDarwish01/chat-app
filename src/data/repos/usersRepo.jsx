import { indexUsersLive } from "../apis/index_user_live";
import { indexUsers } from "../apis/index_users"

export const userRepo = {
    get_all_users: async () => {
        return await indexUsers();
    }
}