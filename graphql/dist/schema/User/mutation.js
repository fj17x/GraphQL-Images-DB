"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMutation = void 0;
exports.userMutation = {
    createUser: (_, args, { dataSources }) => {
        return dataSources.AppAPI.createUser(args);
    },
    deleteUser: (_, { idToUpdate }, { dataSources }) => {
        return dataSources.AppAPI.deleteUser(idToUpdate);
    },
    updateUser: (_, { userDetails }, { dataSources }) => {
        return dataSources.AppAPI.updateUser(userDetails);
    },
    partiallyUpdateUser: (_, { userDetails }, { dataSources }) => {
        return dataSources.AppAPI.partiallyUpdateUser(userDetails);
    },
};
