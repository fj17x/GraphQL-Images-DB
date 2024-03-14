"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authQuery = void 0;
exports.authQuery = {
    me: (_, __, { dataSources }) => {
        return dataSources.AppAPI.me();
    },
};
