'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var collectionUtils = require('./collection');

exports['default'] = {
    map: function map(children, mapper) {
        if (!children) {
            return [];
        }
        if (!collectionUtils.canMap(children)) {
            children = [children];
        }
        return children.map(mapper);
    },
    count: function count(children) {
        if (!children) {
            return 0;
        }
        if (!Array.isArray(children)) {
            return 1;
        }
        return children.length;
    },
    at: function at(children, index) {
        if (!children) {
            return;
        }
        if (!Array.isArray(children)) {
            if (index > 0) {
                return;
            }
            if (index === 0) {
                return children;
            }
        }
        return children[index];
    }
};
module.exports = exports['default'];