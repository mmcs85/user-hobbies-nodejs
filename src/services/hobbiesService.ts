
const mongoose = require('mongoose');
import { HobbiesInterface, HobbyCreationParams, HobbyEditionParams } from "../interfaces/hobbiesInterface";
import { Hobby } from "./../models/hobby";


const HobbyModel = mongoose.model('Hobby', { name: String });

export class HobbiesService implements HobbiesInterface {
    public async list(userId: string, skip: number, limit: number): Promise<Array<Hobby>> {
        return await HobbyModel.find({userId}, null, {skip, limit});
    }

    public async get(id: string): Promise<Hobby | null> {
        return await HobbyModel.findById(id).exec();
    }

    public async create(params: HobbyCreationParams): Promise<string> {
        const hobbyModel = new HobbyModel(params);
        await hobbyModel.save();
        return hobbyModel._id;
    }

    public async edit(params: HobbyEditionParams): Promise<boolean> {
        const hobbyModel = await HobbyModel.findById(params._id).exec();
        hobbyModel.name = params.name;
        hobbyModel.userId = params.userId;
        hobbyModel.passionLevel = params.passionLevel;
        hobbyModel.year = params.year;

        await hobbyModel.save();
        return true;
    }

    public async delete(id: string): Promise<boolean> {
        const count = await HobbyModel.deleteOne({ _id: id });
        return count > 0;
    }
}