"use strict"

const { expect } = require("chai")
const { x, y, total } = require("../index")

describe("Variable", () => {
    it("x should not be undefined", () => {
        expect(x).to.not.be.undefined
    })
    it("y should not be undefined", () => {
        expect(y).to.not.be.undefined
    })
    it("total should be equal to 14", () => {
        expect(total).to.equal(14)
    })
})