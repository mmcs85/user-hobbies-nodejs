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
exports.HobbiesService = void 0;
const mongoose = require('mongoose');
const HobbyModel = mongoose.model('Hobby', { name: String });
class HobbiesService {
    list(userId, skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HobbyModel.find({ userId }, null, { skip, limit });
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HobbyModel.findById(id).exec();
        });
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const hobbyModel = new HobbyModel(params);
            yield hobbyModel.save();
            return hobbyModel._id;
        });
    }
    edit(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const hobbyModel = yield HobbyModel.findById(params._id).exec();
            hobbyModel.name = params.name;
            hobbyModel.userId = params.userId;
            hobbyModel.passionLevel = params.passionLevel;
            hobbyModel.year = params.year;
            yield hobbyModel.save();
            return true;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const count = yield HobbyModel.deleteOne({ _id: id });
            return count > 0;
        });
    }
}
exports.HobbiesService = HobbiesService;
