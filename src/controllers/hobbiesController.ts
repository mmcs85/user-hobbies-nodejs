import { Get, Path, Post, Route, Body, Put, Delete } from "tsoa";
import { HobbiesInterface, HobbyCreationParams, HobbyEditionParams } from "../interfaces/hobbiesInterface";
import { Hobby } from "../models/hobby";
import { HobbiesService } from "./../services/hobbiesService";

@Route("hobbies")
export class HobbiesController {
    service: HobbiesInterface = new HobbiesService();

    @Get("{userId}/{skip}/{limit}")
    public list(
        @Path()
        userId: string,
        skip: number,
        limit: number
    ): Promise<Array<Hobby>> {
        return this.service.list(userId, skip, limit);
    }

    @Get("{userId}")
    public getById(
        @Path() 
        userId: string
    ): Promise<Hobby | null> {
        return this.service.get(userId);
    }

    @Post()
    public createUser(
        @Body() params: HobbyCreationParams
    ): Promise<string> {
        return this.service.create(params);
    }

    @Put()
    public updateUser(
        @Body() params: HobbyEditionParams
    ): Promise<boolean> {
        return this.service.edit(params);
    }

    @Delete("{hobbyId}")
    public deleteUser(
        @Body() hobbyId: string
    ): Promise<boolean> {
        return this.service.delete(hobbyId);
    }
}