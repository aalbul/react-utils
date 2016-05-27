'use strict';

export default {
    canMap: function(collection){
        if (collection === null){ return false; }
        return typeof collection.map === 'function';
    }
};
