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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.eventsFilterCallback = exports.eventsFilterRx = exports.mockEventRecord = exports.eventsFilter = exports.eventSectionsFilter = exports.eventMethodsFilter = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var eventMethodsFilter = function (methods) {
    return function (event) {
        var _a;
        var method = (_a = event === null || event === void 0 ? void 0 : event.event) === null || _a === void 0 ? void 0 : _a.method;
        return !!methods.find(function (item) { return item === method; });
    };
};
exports.eventMethodsFilter = eventMethodsFilter;
var eventSectionsFilter = function (sections) {
    return function (event) {
        var _a;
        var section = (_a = event === null || event === void 0 ? void 0 : event.event) === null || _a === void 0 ? void 0 : _a.section;
        return !!sections.find(function (item) { return item === section; });
    };
};
exports.eventSectionsFilter = eventSectionsFilter;
var eventsFilter = function (data) {
    return function (event) {
        return data.reduce(function (acc, cur) {
            var _a, _b;
            // eslint-disable-next-line prettier/prettier
            var isSectionMatch = cur.section === '*' ? true : cur.section.toUpperCase() === ((_a = event === null || event === void 0 ? void 0 : event.event) === null || _a === void 0 ? void 0 : _a.section.toUpperCase());
            // eslint-disable-next-line prettier/prettier
            var isMethodMatch = cur.method === '*' ? true : cur.method.toUpperCase() === ((_b = event === null || event === void 0 ? void 0 : event.event) === null || _b === void 0 ? void 0 : _b.method.toUpperCase());
            return acc || (isSectionMatch && isMethodMatch);
        }, false);
    };
};
exports.eventsFilter = eventsFilter;
var mockEventRecord = function (section, method) {
    return [{ event: { section: section, method: method } }];
};
exports.mockEventRecord = mockEventRecord;
var eventsFilterRx = function (api, configs, immediately) {
    var events$ = api.rpc.chain.subscribeNewHeads().pipe((0, operators_1.switchMap)(function () { return api.query.system.events(); }));
    return events$.pipe((0, operators_1.startWith)(immediately ? (0, exports.mockEventRecord)(configs[0].section, configs[0].method) : []), (0, operators_1.switchMap)(function (events) { return (0, rxjs_1.from)(events); }), (0, operators_1.filter)((0, exports.eventsFilter)(configs)), (0, operators_1.shareReplay)(1));
};
exports.eventsFilterRx = eventsFilterRx;
var eventsFilterCallback = function (api, configs, immediately, callback) {
    if (immediately)
        callback();
    api.rpc.chain.subscribeNewHeads(function () { return __awaiter(void 0, void 0, void 0, function () {
        var events, filterdEvents;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.query.system.events()];
                case 1:
                    events = _a.sent();
                    filterdEvents = events.filter((0, exports.eventsFilter)(configs));
                    if (filterdEvents.length !== 0) {
                        callback();
                    }
                    return [2 /*return*/];
            }
        });
    }); });
};
exports.eventsFilterCallback = eventsFilterCallback;
