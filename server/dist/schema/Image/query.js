"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageQuery = void 0;
exports.imageQuery = {
    images: (_, { query }, { dataSources }) => {
        return dataSources.AppAPI.images(query);
    },
    image: (_, { id }, { dataSources }) => {
        return dataSources.AppAPI.image(id);
    },
};
