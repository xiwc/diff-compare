var expect = require('chai').expect
var diff = require('../lib/diff-compare')
var debug = require('trace-debug-log')
debug.enable()
/* Definitions for JS Standard */
/* global describe, it */

describe('diff', function () {
  it('should adjust for simple omissions', function (done) {
    var a = ['abc','def']
    var b = ['def']

    var a_adjusted = ['abc','def']
    var b_adjusted = ['','def']

    var adjusted = diff(a,b)
    expect(adjusted).to.be.an('object')
    expect(adjusted.results).to.be.an('array')
    expect(adjusted.results[0]).to.be.an('array')
    expect(adjusted.results[0]).to.deep.equal(a_adjusted)
    expect(adjusted.results[1]).to.be.an('array')
    expect(adjusted.results[1]).to.deep.equal(b_adjusted)
    expect(adjusted.annotations).to.be.an('array')
    expect(adjusted.annotations[0]).to.be.an('object')
    expect(adjusted.annotations[0].omissions).to.be.an('array')
    expect(adjusted.annotations[0].omissions).to.deep.equal([0])
    expect(adjusted.annotations[0].changes).to.be.an('array')
    expect(adjusted.annotations[0].changes).to.deep.equal([])
    expect(adjusted.annotations[0].inert).to.be.an('array')
    expect(adjusted.annotations[0].inert).to.deep.equal([])
    expect(adjusted.annotations[1]).to.be.an('object')
    expect(adjusted.annotations[1].additions).to.be.an('array')
    expect(adjusted.annotations[1].additions).to.deep.equal([])
    expect(adjusted.annotations[1].changes).to.be.an('array')
    expect(adjusted.annotations[1].changes).to.deep.equal([])
    expect(adjusted.annotations[1].inert).to.be.an('array')
    expect(adjusted.annotations[1].inert).to.deep.equal([0])
    done()
  })

  it('should adjust for simple additions', function (done) {

    var a = ['def']
    var b = ['abc','def']

    var a_adjusted = ['','def']
    var b_adjusted = ['abc','def']

    var adjusted = diff(a,b)
    expect(adjusted).to.be.an('object')
    expect(adjusted.results).to.be.an('array')
    expect(adjusted.results[0]).to.be.an('array')
    expect(adjusted.results[0]).to.deep.equal(a_adjusted)
    expect(adjusted.results[1]).to.be.an('array')
    expect(adjusted.results[1]).to.deep.equal(b_adjusted)
    expect(adjusted.annotations).to.be.an('array')
    expect(adjusted.annotations[0]).to.be.an('object')
    expect(adjusted.annotations[0].omissions).to.be.an('array')
    expect(adjusted.annotations[0].omissions).to.deep.equal([])
    expect(adjusted.annotations[0].changes).to.be.an('array')
    expect(adjusted.annotations[0].changes).to.deep.equal([])
    expect(adjusted.annotations[0].inert).to.be.an('array')
    expect(adjusted.annotations[0].inert).to.deep.equal([0])
    expect(adjusted.annotations[1]).to.be.an('object')
    expect(adjusted.annotations[1].additions).to.be.an('array')
    expect(adjusted.annotations[1].additions).to.deep.equal([0])
    expect(adjusted.annotations[1].changes).to.be.an('array')
    expect(adjusted.annotations[1].changes).to.deep.equal([])
    expect(adjusted.annotations[1].inert).to.be.an('array')
    expect(adjusted.annotations[1].inert).to.deep.equal([])
    done()
  })
  it('should adjust for simple changes', function (done) {

    var a = ['acc','def']
    var b = ['abc','def']

    var a_adjusted = ['acc','def']
    var b_adjusted = ['abc','def']

    var adjusted = diff(a,b)
    expect(adjusted).to.be.an('object')
    expect(adjusted.results).to.be.an('array')
    expect(adjusted.results[0]).to.be.an('array')
    expect(adjusted.results[0]).to.deep.equal(a_adjusted)
    expect(adjusted.results[1]).to.be.an('array')
    expect(adjusted.results[1]).to.deep.equal(b_adjusted)
    expect(adjusted.annotations).to.be.an('array')
    expect(adjusted.annotations[0]).to.be.an('object')
    expect(adjusted.annotations[0].omissions).to.be.an('array')
    expect(adjusted.annotations[0].omissions).to.deep.equal([])
    expect(adjusted.annotations[0].changes).to.be.an('array')
    expect(adjusted.annotations[0].changes).to.deep.equal([0])
    expect(adjusted.annotations[0].inert).to.be.an('array')
    expect(adjusted.annotations[0].inert).to.deep.equal([])
    expect(adjusted.annotations[1]).to.be.an('object')
    expect(adjusted.annotations[1].additions).to.be.an('array')
    expect(adjusted.annotations[1].additions).to.deep.equal([])
    expect(adjusted.annotations[1].changes).to.be.an('array')
    expect(adjusted.annotations[1].changes).to.deep.equal([0])
    expect(adjusted.annotations[1].inert).to.be.an('array')
    expect(adjusted.annotations[1].inert).to.deep.equal([])
    done()
  })
  it('should adjust for multi-line omissions', function (done) {
    var a = ['abc','def','ghi','jkl']
    var b = ['jkl']

    var a_adjusted = ['abc','def','ghi','jkl']
    var b_adjusted = ['','','','jkl']

    var adjusted = diff(a,b)
    expect(adjusted).to.be.an('object')
    expect(adjusted.results).to.be.an('array')
    expect(adjusted.results[0]).to.be.an('array')
    expect(adjusted.results[0]).to.deep.equal(a_adjusted)
    expect(adjusted.results[1]).to.be.an('array')
    expect(adjusted.results[1]).to.deep.equal(b_adjusted)
    expect(adjusted.annotations).to.be.an('array')
    expect(adjusted.annotations[0]).to.be.an('object')
    expect(adjusted.annotations[0].omissions).to.be.an('array')
    expect(adjusted.annotations[0].omissions).to.deep.equal([0,1,2])
    expect(adjusted.annotations[0].changes).to.be.an('array')
    expect(adjusted.annotations[0].changes).to.deep.equal([])
    expect(adjusted.annotations[0].inert).to.be.an('array')
    expect(adjusted.annotations[0].inert).to.deep.equal([])
    expect(adjusted.annotations[1]).to.be.an('object')
    expect(adjusted.annotations[1].additions).to.be.an('array')
    expect(adjusted.annotations[1].additions).to.deep.equal([])
    expect(adjusted.annotations[1].changes).to.be.an('array')
    expect(adjusted.annotations[1].changes).to.deep.equal([])
    expect(adjusted.annotations[1].inert).to.be.an('array')
    expect(adjusted.annotations[1].inert).to.deep.equal([0,1,2])
    done()
  })
  it('should adjust for multi-line additions', function (done) {
    var a = ['jkl']
    var b = ['abc','def','ghi','jkl']

    var a_adjusted = ['','','','jkl']
    var b_adjusted = ['abc','def','ghi','jkl']

    var adjusted = diff(a,b)
    expect(adjusted).to.be.an('object')
    expect(adjusted.results).to.be.an('array')
    expect(adjusted.results[0]).to.be.an('array')
    expect(adjusted.results[0]).to.deep.equal(a_adjusted)
    expect(adjusted.results[1]).to.be.an('array')
    expect(adjusted.results[1]).to.deep.equal(b_adjusted)
    expect(adjusted.annotations).to.be.an('array')
    expect(adjusted.annotations[0]).to.be.an('object')
    expect(adjusted.annotations[0].omissions).to.be.an('array')
    expect(adjusted.annotations[0].omissions).to.deep.equal([])
    expect(adjusted.annotations[0].changes).to.be.an('array')
    expect(adjusted.annotations[0].changes).to.deep.equal([])
    expect(adjusted.annotations[0].inert).to.be.an('array')
    expect(adjusted.annotations[0].inert).to.deep.equal([0,1,2])
    expect(adjusted.annotations[1]).to.be.an('object')
    expect(adjusted.annotations[1].additions).to.be.an('array')
    expect(adjusted.annotations[1].additions).to.deep.equal([0,1,2])
    expect(adjusted.annotations[1].changes).to.be.an('array')
    expect(adjusted.annotations[1].changes).to.deep.equal([])
    expect(adjusted.annotations[1].inert).to.be.an('array')
    expect(adjusted.annotations[1].inert).to.deep.equal([])
    done()
  })
  it('should adjust for multi-line omissions with an end change', function (done) {
  })
  it('should adjust for multi-line additions with an end change', function (done) {
  })
  it('should adjust for multi-line omissions with a simple addition', function (done) {
  })
  it('should adjust for multi-line additions with a simple omission', function (done) {
  })
  it('should adjust for multi-line omissions with multi-line additions', function (done) {
  })
  it('should adjust for multi-line additions with multi-line omissions', function (done) {
  })
})