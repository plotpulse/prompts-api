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
exports.Reply = void 0;
const typeorm_1 = require("typeorm");
const Prompt_1 = require("./Prompt");
const Profile_1 = require("./Profile");
let Reply = class Reply {
};
exports.Reply = Reply;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reply.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Reply.prototype, "response", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Prompt_1.Prompt, (prompt) => prompt.replies),
    __metadata("design:type", Prompt_1.Prompt)
], Reply.prototype, "prompt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Profile_1.Profile),
    __metadata("design:type", Profile_1.Profile)
], Reply.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Reply.prototype, "created", void 0);
exports.Reply = Reply = __decorate([
    (0, typeorm_1.Entity)()
], Reply);
//# sourceMappingURL=Reply.js.map