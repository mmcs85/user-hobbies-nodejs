import "mocha";
import assert from 'assert';
import { UsersInterface } from "../interfaces/usersInterface";
import { UsersMockService } from "../mocks/usersMockService";
import { HobbiesInterface } from "../interfaces/hobbiesInterface";
import { HobbiesMockService } from "../mocks/hobbiesMockService";
import { PassionLevel } from "../models/hobby";

let userService: UsersInterface;
let hobbiesService: HobbiesInterface;

describe('test', function () {
    beforeEach(function(){
        userService = new UsersMockService();
        hobbiesService = new HobbiesMockService();
    });
    
    afterEach(function() {
    });

    it('create user', async function () {
        const id = await userService.create({name: "Mário"});

        assert.equal(!!id, true);
        assert.equal(typeof id, "string");
    });

    it('edit user', async function () {
        const edited = await userService.edit({_id: "4", name: "Mário Silva"});
        assert.equal(edited, true);
    });

    it('get user', async function () {
        const user = await userService.get("4");
        assert.equal(user?.name, "Mário Silva");
    });

    it('list user', async function () {
        const users = await userService.list(1, 2);
        assert.equal(users.length, 2);
    });

    it('create hobby', async function () {
        const id = await hobbiesService.create({
            userId: "4", 
            name: "Fishing", 
            passionLevel: PassionLevel.HIGH, 
            year: 2008
        });

        assert.equal(!!id, true);
        assert.equal(typeof id, "string");
    });

    it('list hobby', async function () {
        const MarioHobbies = await hobbiesService.list("4", 0, 5);
        assert.equal(MarioHobbies.length, 1);
    });
});