"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HobbiesController = void 0;
const tsoa_1 = require("tsoa");
const hobbiesService_1 = require("./../services/hobbiesService");
let HobbiesController = class HobbiesController {
    list(userId, skip, limit) {
        return new hobbiesService_1.HobbiesService().list(userId, skip, limit);
    }
    getById(userId) {
        return new hobbiesService_1.HobbiesService().get(userId);
    }
    createUser(params) {
        return new hobbiesService_1.HobbiesService().create(params);
    }
    updateUser(params) {
        return new hobbiesService_1.HobbiesService().edit(params);
    }
    deleteUser(hobbyId) {
        return new hobbiesService_1.HobbiesService().delete(hobbyId);
    }
};
__decorate([
    (0, tsoa_1.Get)("{userId}/{skip}/{limit}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], HobbiesController.prototype, "list", null);
__decorate([
    (0, tsoa_1.Get)("{userId}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HobbiesController.prototype, "getById", null);
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HobbiesController.prototype, "createUser", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HobbiesController.prototype, "updateUser", null);
__decorate([
    (0, tsoa_1.Delete)("{hobbyId}"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HobbiesController.prototype, "deleteUser", null);
HobbiesController = __decorate([
    (0, tsoa_1.Route)("hobbies")
], HobbiesController);
exports.HobbiesController = HobbiesController;
