import { User } from "../models/user";

export type UserCreationParams = Pick<User, "name">;
export type UserEditionParams = Pick<User, "_id" | "name">;

export interface UsersInterface {
    list(skip: number, limit: number): Promise<Array<User>>;
    get(id: string): Promise<User | null>;
    create(params: UserCreationParams): Promise<string>;
    edit(params: UserEditionParams): Promise<boolean>;
}