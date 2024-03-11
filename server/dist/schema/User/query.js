"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userQuery = void 0;
exports.userQuery = {
    users: (_, { query }, { dataSources }) => {
        return dataSources.AppAPI.users(query);
    },
    user: (_, { id }, { dataSources }) => {
        return dataSources.AppAPI.user(id);
    },
};
