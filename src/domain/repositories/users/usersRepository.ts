import { User } from '../../entities/users/user-entity';

export interface UsersRepository {
    getUsers(pagination:{page: number, limit: number}): Promise<User[]>;
    postUser(user: User): Promise<User>;
    getUserById(id: string): Promise<User | null>;
    updateUserId(id: string, user: User): Promise<User>;
}