'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = {
    canMap: function canMap(collection) {
        if (collection === null) {
            return false;
        }
        return typeof collection.map === 'function';
    }
};
module.exports = exports['default'];