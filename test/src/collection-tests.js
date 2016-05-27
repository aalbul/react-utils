'use strict';

const collectionUtils = require(global.__srcPath + '/collection');

describe('collection canMap', () => {
    it('should return "false" if null is passed', () => {
        const result = collectionUtils.canMap(null);
        result.should.be.equal(false);
    });
    it('should return "true" if array is passed', () => {
        const result = collectionUtils.canMap([]);
        result.should.be.equal(true);
    });
    it('should return "false" if object without map function passed', () => {
        const object = {};
        const result = collectionUtils.canMap(object);
        result.should.be.equal(false);
    });
});
