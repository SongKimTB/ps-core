import { User } from '@/models/user.model'; // Adjust path if necessary based on tsconfig paths

export interface IBaseRepository<T, IDType = string | number> {
  findById(id: IDType): Promise<T | null>;
  findAll(params?: Record<string, unknown>): Promise<T[]>; // Allow optional params for filtering/pagination
  create(data: Partial<T>): Promise<T>;
  update(id: IDType, data: Partial<T>): Promise<T | null>;
  delete(id: IDType): Promise<boolean>;
}

export interface IUserRepository extends IBaseRepository<User, number> {
  findByEmail(email: string): Promise<User | null>;
}
