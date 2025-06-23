import { UsersRepository } from '../../../domain/repositories/users/usersRepository';
import { User } from '../../../domain/entities/users/user-entity';

interface PaginationParams{
  page: number;
  limit: number;
}

export class GetUsersUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({ page, limit }: PaginationParams): Promise<User[]> {
    return await this.userRepository.getUsers({ page, limit });
  }
}