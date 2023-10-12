"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = exports.support = exports.primitives = exports.dex = void 0;
var definitions_js_1 = require("./dex/definitions.js");
Object.defineProperty(exports, "dex", { enumerable: true, get: function () { return __importDefault(definitions_js_1).default; } });
var definitions_js_2 = require("./primitives/definitions.js");
Object.defineProperty(exports, "primitives", { enumerable: true, get: function () { return __importDefault(definitions_js_2).default; } });
var definitions_js_3 = require("./support/definitions.js");
Object.defineProperty(exports, "support", { enumerable: true, get: function () { return __importDefault(definitions_js_3).default; } });
var definitions_js_4 = require("./runtime/definitions.js");
Object.defineProperty(exports, "runtime", { enumerable: true, get: function () { return __importDefault(definitions_js_4).default; } });
