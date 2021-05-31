"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
var joi_1 = __importDefault(require("joi"));
var date_1 = __importDefault(require("@joi/date"));
var joi = joi_1.default.extend(date_1.default);
var validateUser = function (obj) {
    var schema = joi_1.default.object({
        email: joi_1.default.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "dev"] } })
            .required(),
        password: joi_1.default.string()
            .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
            .error(new Error("password is too short"))
            .required(),
        firstName: joi_1.default.string().min(3).max(30).required(),
        lastName: joi_1.default.string().min(3).max(30).required(),
        dateOfBirth: joi
            .date()
            .format(["YYYY/MM/DD", "DD-MM-YYYY"])
            .error(new Error("Date format 'YYYY / MM / DD' or 'DD - MM - YYYY' "))
            .required(),
        gender: joi_1.default.any()
            .valid("M", "Male", "Female", "F")
            .error(new Error("Gender should be Male or M or Female or F"))
            .required(),
    });
    return schema.validate(obj);
};
exports.validateUser = validateUser;
