import { Hobby } from "./../models/hobby";

export type HobbyCreationParams = Pick<Hobby, "userId" | "passionLevel" | "name" | "year">;
export type HobbyEditionParams = Pick<Hobby, "_id" | "userId" | "passionLevel" | "name" | "year">;

export interface HobbiesInterface {
    list(userId: string, skip: number, limit: number): Promise<Array<Hobby>>;
    get(id: string): Promise<Hobby | null>;
    create(params: HobbyCreationParams): Promise<string>;
    edit(params: HobbyEditionParams): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}