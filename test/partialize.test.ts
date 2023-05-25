import { partialize } from '../src'
import { expect } from 'chai'

describe('partialize', () => {
  describe('partialize/2', () => {
    it('returns a function', () => {
      const _add = (a: number, b: number) => a + b
      const add = partialize(_add)

      expect(add(2)(2)).to.equal(4)
    })
  })

  describe('partialize/3', () => {
    it('returns a function', () => {
      const _add = (a: number, b: number, c: number) => a + b + c
      const add = partialize(_add)

      expect(add(2)(2)(2)).to.equal(6)
    })
  })

  describe('partialize/4', () => {
    it('returns a function', () => {
      const _add = (a: number, b: number, c: number, d: number) => a + b + c + d
      const add = partialize(_add)

      expect(add(2)(2)(2)(2)).to.equal(8)
    })
  })

  describe('partialize/5', () => {
    it('returns a function', () => {
      const _add = (a: number, b: number, c: number, d: number, e: number) =>
        a + b + c + d + e
      const add = partialize(_add)

      expect(add(2)(2)(2)(2)(2)).to.equal(10)
    })
  })

  describe('partialize/6', () => {
    it('returns a function', () => {
      const _add = (
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number,
      ) => a + b + c + d + e + f
      const add = partialize(_add)

      expect(add(2)(2)(2)(2)(2)(2)).to.equal(12)
    })
  })

  describe('partialize/7', () => {
    it('returns a function', () => {
      const _add = (
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number,
        g: number,
      ) => a + b + c + d + e + f + g
      const add = partialize(_add)

      expect(add(2)(2)(2)(2)(2)(2)(2)).to.equal(14)
    })
  })

  describe('partialize/8', () => {
    it('returns a function', () => {
      const _add = (
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number,
        g: number,
        h: number,
      ) => a + b + c + d + e + f + g + h
      const add = partialize(_add)

      expect(add(2)(2)(2)(2)(2)(2)(2)(2)).to.equal(16)
    })
  })

  describe('partialize/9', () => {
    it('returns a function', () => {
      const _add = (
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number,
        g: number,
        h: number,
        i: number,
      ) => a + b + c + d + e + f + g + h + i
      const add = partialize(_add)

      expect(add(2)(2)(2)(2)(2)(2)(2)(2)(2)).to.equal(18)
    })
  })

  describe('partialize/10', () => {
    it('returns a function', () => {
      const _add = (
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number,
        g: number,
        h: number,
        i: number,
        j: number,
      ) => a + b + c + d + e + f + g + h + i + j
      const add = partialize(_add)

      expect(add(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)).to.equal(20)
    })
  })
})
