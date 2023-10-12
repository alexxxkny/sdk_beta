"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsFilterCallback = exports.eventsFilterRx = exports.mockEventRecord = exports.eventsFilter = exports.eventSectionsFilter = exports.eventMethodsFilter = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const eventMethodsFilter = (methods) => {
    return (event) => {
        const method = event?.event?.method;
        return !!methods.find((item) => item === method);
    };
};
exports.eventMethodsFilter = eventMethodsFilter;
const eventSectionsFilter = (sections) => {
    return (event) => {
        const section = event?.event?.section;
        return !!sections.find((item) => item === section);
    };
};
exports.eventSectionsFilter = eventSectionsFilter;
const eventsFilter = (data) => {
    return (event) => {
        return data.reduce((acc, cur) => {
            // eslint-disable-next-line prettier/prettier
            const isSectionMatch = cur.section === '*' ? true : cur.section.toUpperCase() === event?.event?.section.toUpperCase();
            // eslint-disable-next-line prettier/prettier
            const isMethodMatch = cur.method === '*' ? true : cur.method.toUpperCase() === event?.event?.method.toUpperCase();
            return acc || (isSectionMatch && isMethodMatch);
        }, false);
    };
};
exports.eventsFilter = eventsFilter;
const mockEventRecord = (section, method) => {
    return [{ event: { section, method } }];
};
exports.mockEventRecord = mockEventRecord;
const eventsFilterRx = (api, configs, immediately) => {
    const events$ = api.rpc.chain.subscribeNewHeads().pipe((0, operators_1.switchMap)(() => api.query.system.events()));
    return events$.pipe((0, operators_1.startWith)(immediately ? (0, exports.mockEventRecord)(configs[0].section, configs[0].method) : []), (0, operators_1.switchMap)((events) => (0, rxjs_1.from)(events)), (0, operators_1.filter)((0, exports.eventsFilter)(configs)), (0, operators_1.shareReplay)(1));
};
exports.eventsFilterRx = eventsFilterRx;
const eventsFilterCallback = (api, configs, immediately, callback) => {
    if (immediately)
        callback();
    api.rpc.chain.subscribeNewHeads(async () => {
        const events = await api.query.system.events();
        const filterdEvents = events.filter((0, exports.eventsFilter)(configs));
        if (filterdEvents.length !== 0) {
            callback();
        }
    });
};
exports.eventsFilterCallback = eventsFilterCallback;
