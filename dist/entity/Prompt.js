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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prompt = void 0;
const typeorm_1 = require("typeorm");
const Reply_1 = require("./Reply");
const Profile_1 = require("./Profile");
const Like_1 = require("./Like");
let Prompt = class Prompt {
};
exports.Prompt = Prompt;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Prompt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Prompt.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Reply_1.Reply, (reply) => reply.prompt, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Array)
], Prompt.prototype, "replies", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Like_1.Like, (like) => like.prompt),
    __metadata("design:type", Array)
], Prompt.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Profile_1.Profile),
    __metadata("design:type", Profile_1.Profile)
], Prompt.prototype, "user", void 0);
exports.Prompt = Prompt = __decorate([
    (0, typeorm_1.Entity)()
], Prompt);
//# sourceMappingURL=Prompt.js.map