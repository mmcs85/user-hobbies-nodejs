
import { UserCreationParams, UserEditionParams, UsersInterface } from "../interfaces/usersInterface";
import { User } from "../models/user";

let counter = 4;
const schemaDB = [
    {_id: "1", name: "John"},
    {_id: "2", name: "Peter"},
    {_id: "3", name: "Markus"},
];

export class UsersMockService implements UsersInterface {
    public async list(skip?: number, limit?: number): Promise<Array<User>> {
        return schemaDB.slice(skip||0, skip || limit ? (skip||0)+(limit||0) : undefined);
    }

    public async get(id: string): Promise<User | null> {
        const user = schemaDB.find((r) => r._id == id);
        return user || null;
    }

    public async create(params: UserCreationParams): Promise<string> {
        const _id = (counter++).toString();
        schemaDB.push({ _id, ...params });
        return _id;
    }

    public async edit(params: UserEditionParams): Promise<boolean> {
        const user = schemaDB.find((r) => r._id == params._id);
        if(!user) return false;
        user.name = params.name;
        return true;
    }
}