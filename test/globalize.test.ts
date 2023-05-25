import '../src/globalize'
import { expect } from 'chai'
import { partialize } from '../src'

describe('globalize', () => {
  it('provides partialize as a global function', () => {
    expect(partialize).to.be.a('function')
  })
})
