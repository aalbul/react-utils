'use strict';

const nodeUtils = require(global.__srcPath + '/node');

describe('node get', () => {
    it('should return null if null is passed as target', () => {
        const result = nodeUtils.get(null, null);
        should.not.exist(result);
    });
    it('should return attribute from object (attribute access mode)', () => {
        const object = {x: 1, y: 2};
        const result = nodeUtils.get(object, 'x');
        result.should.be.equal(1);
    });
    it('should return attribute from Map (using get function if available)', () => {
        const map = new Map();
        map.set('x', 1);
        map.set('y', 2);
        const result = nodeUtils.get(map, 'y');
        result.should.be.equal(2);
    });
});
