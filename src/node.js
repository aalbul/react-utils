'use strict';

export default {
    get: function(node, key){
        if (node == null){ return null; }
        if (node.get && typeof node.get === "function") {
            return node.get(key);
        } else {
            return node[key];
        }
    }
};
