
const mongoose = require('mongoose');
import { UserCreationParams, UserEditionParams, UsersInterface } from "../interfaces/usersInterface";
import { User } from "./../models/user";

const UserModel = mongoose.model('User', { name: String });

export class UsersService implements UsersInterface {
    public async list(skip: number, limit: number): Promise<Array<User>> {
        return await UserModel.find({}, null, {skip, limit});
    }

    public async get(id: string): Promise<User | null> {
        return await UserModel.findById(id).exec();
    }

    public async create(params: UserCreationParams): Promise<string> {
        const userModel = new UserModel(params);
        await userModel.save();
        return userModel._id;
    }

    public async edit(params: UserEditionParams): Promise<boolean> {
        const userModel = await UserModel.findById(params._id).exec();
        userModel.name = params.name;
        await userModel.save();
        return true;
    }
}