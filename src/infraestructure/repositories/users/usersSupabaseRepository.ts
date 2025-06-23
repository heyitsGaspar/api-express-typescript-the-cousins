import { UsersRepository } from "../../../domain/repositories/users/usersRepository";
import { User } from "../../../domain/entities/users/user-entity";
import supabaseClient  from "../../../config/supabaseClient";


export class UsersSupabaseRepository implements UsersRepository {
    postUser(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getUserById(id: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    updateUserId(id: string, user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
   
    async getUsers({ page, limit }: { page: number, limit: number }): Promise<User[]> {
        const from = (page - 1) * limit;
        const to = page * limit;
        const {data, error} = await supabaseClient
            .from('users')
            .select ('*')
            .range(from, to) // Supabase uses zero-based indexing

        if (error){
            throw new Error(`Error fetching users: ${error.message}`);
        }
        return data as User[];
    }
}