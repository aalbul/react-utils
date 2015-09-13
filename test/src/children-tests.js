'use strict';

const sinon = require('sinon');
const childrenUtils = require(__srcPath + '/children');

describe('children map', () => {
    it('should return an empty array if there are no children', () => {
        const children = undefined;
        let mapped = childrenUtils.map(children);
        mapped.should.be.empty;
    });

    it('should return an array with one element if children is an object', () => {
        const children = {};
        let mapped = childrenUtils.map(children, (c) => c);
        mapped.should.have.length(1);
    });

    it('should call the mapper for every child', () => {
        const children = [{}, {}];
        let mapper = sinon.spy();
        let mapped = childrenUtils.map(children, mapper);
        mapper.should.have.been.calledTwice;
    });

    it('should return an array of correctly mapped children', () => {
        const children = [{x: 1}, {x: 2}];
        let mapper = (c) => { return { x: c.x * 2} ; };
        let mapped = childrenUtils.map(children, mapper);
        mapped[0].x.should.equal(2);
        mapped[1].x.should.equal(4);
    });
});

describe('children count', () => {
    it('should return zero if there are no children', () => {
        const children = undefined;
        let count = childrenUtils.count(children);
        count.should.be.equal(0);
    });

    it('should return one if children is an object', () => {
        const children = {};
        let count = childrenUtils.count(children);
        count.should.be.equal(1);
    });

    it('should return the correct number of children in an array', () => {
        const children = [{}, {}, {}];
        let count = childrenUtils.count(children);
        count.should.be.equal(3);
    });
});

describe('children at', () => {
    it('should return undefined if there are no children', () => {
        const children = undefined;
        let element = childrenUtils.at(children, 0);
        should.not.exist(element);
    });

    it('should return undefined if children is an object and index is greater than zero', () => {
        const children = {};
        let element = childrenUtils.at(children, 99);
        should.not.exist(element);
    });

    it('should return the child if children is an object and index is zero', () => {
        const children = {};
        let element = childrenUtils.at(children, 0);
        element.should.equal(children);
    });

    it('should return undefined if children is an array and index is out of bounds', () => {
        const children = [];
        let element = childrenUtils.at(children, 99);
        should.not.exist(element);
    });

    it('should return the correct child if children is an array and index is within bounds', () => {
        const children = [{x: 1}, {x: 2}];
        let element = childrenUtils.at(children, 1);
        element.should.equal(children[1]);
    });
});