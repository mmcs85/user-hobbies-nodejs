
import { HobbiesInterface, HobbyCreationParams, HobbyEditionParams } from "../interfaces/hobbiesInterface";
import { Hobby, PassionLevel } from "../models/hobby";

let counter = 4;
let schemaDB = [
    {_id: "1", userId: "1",  name: "Playing Football", passionLevel: PassionLevel.LOW, year: 2008 },
    {_id: "2", userId: "2",  name: "Playing Football", passionLevel: PassionLevel.LOW, year: 2008 },
    {_id: "3", userId: "3",  name: "Playing Football", passionLevel: PassionLevel.LOW, year: 2008 },
];


export class HobbiesMockService implements HobbiesInterface {
    public async list(userId: string, skip: number, limit: number): Promise<Array<Hobby>> {
        return schemaDB
            .filter((r) => r._id == userId)
            .slice(skip, skip || limit ? skip+limit : undefined);
    }

    public async get(id: string): Promise<Hobby | null> {
        const user = schemaDB.find((r) => r._id == id);
        return user || null;
    }

    public async create(params: HobbyCreationParams): Promise<string> {
        const _id = (counter++).toString();
        schemaDB.push({ _id, ...params });
        return _id;
    }

    public async edit(params: HobbyEditionParams): Promise<boolean> {
        const user = schemaDB.find((r) => r._id == params._id);
        if(!user) return false;
        user.name = params.name;
        return true;
    }

    public async delete(id: string): Promise<boolean> {
        schemaDB = schemaDB.filter((r) => r._id != id);
        return true;
    }
}