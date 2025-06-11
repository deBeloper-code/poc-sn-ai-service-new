"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const troubleshoot_1 = require("../controllers/troubleshoot");
const router = express_1.default.Router();
//@ts-ignore
router.post("/troubleshooter", troubleshoot_1.troubleshootIssue);
exports.default = router;
