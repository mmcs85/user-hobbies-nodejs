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
exports.UsersMockService = void 0;
let counter = 4;
const schemaDB = [
    { _id: "1", name: "John" },
    { _id: "2", name: "Peter" },
    { _id: "3", name: "Markus" },
];
class UsersMockService {
    list(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return schemaDB.slice(skip || 0, skip || limit ? (skip || 0) + (limit || 0) : undefined);
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
}
exports.UsersMockService = UsersMockService;
