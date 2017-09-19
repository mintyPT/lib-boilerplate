"use strict";

var expect = require("chai").expect;

var lib = require("../index");

describe("confession", function() {
    it("should do something", function() {
        const f = () => 'oi';
        expect(lib.run()).to.equal(true);
    });
});
