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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HobbiesMockService = void 0;
const hobby_1 = require("../models/hobby");
let counter = 4;
let schemaDB = [
    { _id: "1", userId: "1", name: "Playing Football", passionLevel: hobby_1.PassionLevel.LOW, year: 2008 },
    { _id: "2", userId: "2", name: "Playing Football", passionLevel: hobby_1.PassionLevel.LOW, year: 2008 },
    { _id: "3", userId: "3", name: "Playing Football", passionLevel: hobby_1.PassionLevel.LOW, year: 2008 },
];
class HobbiesMockService {
    list(userId, skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return schemaDB.slice(skip, skip || limit ? skip + limit : undefined);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = schemaDB.find((r) => r._id == id);
            return user || null;
        });
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = (counter++).toString();
            schemaDB.push(Object.assign({ _id }, params));
            return _id;
        });
    }
    edit(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = schemaDB.find((r) => r._id == params._id);
            if (!user)
                return false;
            user.name = params.name;
            return true;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            schemaDB = schemaDB.filter((r) => r._id != id);
            return true;
        });
    }
}
exports.HobbiesMockService = HobbiesMockService;
