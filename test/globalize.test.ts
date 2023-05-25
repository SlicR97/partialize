import '../src/globalize'
import { expect } from 'chai'

describe('globalize', () => {
  it('provides pipe as a global function', () => {
    expect(hello).to.be.a('function')
  })
})
