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
exports.UsersService = void 0;
const mongoose = require('mongoose');
const UserModel = mongoose.model('User', { name: String });
class UsersService {
    list(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserModel.find({}, null, { skip, limit });
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserModel.findById(id).exec();
        });
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const userModel = new UserModel(params);
            yield userModel.save();
            return userModel._id;
        });
    }
    edit(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const userModel = yield UserModel.findById(params._id).exec();
            userModel.name = params.name;
            yield userModel.save();
            return true;
        });
    }
}
exports.UsersService = UsersService;
