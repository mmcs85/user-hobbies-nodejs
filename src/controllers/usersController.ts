import { Get, Path, Post, Route, Body, Put, Delete } from "tsoa";
import { UserCreationParams, UserEditionParams, UsersInterface } from "../interfaces/usersInterface";
import { User } from "../models/user";
import { UsersService } from "./../services/usersService";

@Route("user")
export class UsersController {
    service: UsersInterface = new UsersService();

    @Get("{skip}/{limit}")
    public list(
        @Path()
        skip: number,
        limit: number
    ): Promise<Array<User>> {
        return this.service.list(skip, limit);
    }

    @Get("{userId}")
    public getById(
        @Path() 
        userId: string
    ): Promise<User | null> {
        return this.service.get(userId);
    }

    @Post()
    public createUser(
        @Body() params: UserCreationParams
    ): Promise<string> {
        return this.service.create(params);
    }

    @Put()
    public updateUser(
        @Body() params: UserEditionParams
    ): Promise<boolean> {
        return this.service.edit(params);
    }
}