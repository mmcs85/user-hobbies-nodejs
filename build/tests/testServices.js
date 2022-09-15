"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert_1 = __importDefault(require("assert"));
const usersMockService_1 = require("../mocks/usersMockService");
const hobbiesMockService_1 = require("../mocks/hobbiesMockService");
const hobby_1 = require("../models/hobby");
let userService;
let hobbiesService;
describe('test', function () {
    beforeEach(function () {
        userService = new usersMockService_1.UsersMockService();
        hobbiesService = new hobbiesMockService_1.HobbiesMockService();
    });
    afterEach(function () {
    });
    it('create user', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield userService.create({ name: "Mário" });
            assert_1.default.equal(!!id, true);
            assert_1.default.equal(typeof id, "string");
        });
    });
    it('edit user', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const edited = yield userService.edit({ _id: "4", name: "Mário Silva" });
            assert_1.default.equal(edited, true);
        });
    });
    it('get user', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userService.get("4");
            assert_1.default.equal(user === null || user === void 0 ? void 0 : user.name, "Mário Silva");
        });
    });
    it('list user', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield userService.list(1, 2);
            assert_1.default.equal(users.length, 2);
        });
    });
    it('create hobby', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield hobbiesService.create({
                userId: "4",
                name: "Fishing",
                passionLevel: hobby_1.PassionLevel.HIGH,
                year: 2008
            });
            assert_1.default.equal(!!id, true);
            assert_1.default.equal(typeof id, "string");
        });
    });
    it('list hobby', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const MarioHobbies = yield hobbiesService.list("4", 0, 5);
            console.log(MarioHobbies);
            assert_1.default.equal(MarioHobbies.length, 1);
        });
    });
});
