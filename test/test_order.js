'use strict'

const filter = require('../index.js')
const Chai = require('chai')
const expect = Chai.expect

describe('Convert query string sort attribute into Sequelize order queries.', (done) => {
  it('Sort by one field descending. (geoId desc)', () => {
    let qs = 'geoId desc'
    let order = filter.sort(qs)
    expect(order).to.be.instanceof(Object)
    expect(order).to.be.instanceof(Array)
  })

  it('Sort by one field ascending. (geoId asc)', () => {
    let qs = 'geoId asc'
    let order = filter.sort(qs)
    expect(order).to.be.instanceof(Object)
    expect(order).to.be.instanceof(Array)
  })

  it('Sort by two fields. (geoId desc ,  name asc)', () => {
    let qs = 'geoId desc,  name asc'
    let order = filter.sort(qs)
    expect(order).to.be.instanceof(Object)
    expect(order).to.be.instanceof(Array)
    expect(order[0]).to.be.instanceof(Object)
    expect(order[0]).to.be.instanceof(Array)
    expect(order[1]).to.be.instanceof(Object)
    expect(order[1]).to.be.instanceof(Array)
  })

    it('Sort by two fields. (geoId desc,name asc)', () => {
      let qs = 'geoId desc,name asc'
      let order = filter.sort(qs)
      expect(order).to.be.instanceof(Object)
      expect(order).to.be.instanceof(Array)
      expect(order[0]).to.be.instanceof(Object)
      expect(order[0]).to.be.instanceof(Array)
      expect(order[1]).to.be.instanceof(Object)
      expect(order[1]).to.be.instanceof(Array)
    })
})
