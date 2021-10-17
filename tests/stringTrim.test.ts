import { stringTrim } from '../src'

describe('stringTrim()', () => {
  describe('when value equal to "Hi  xD"', () => {
    it('returns "Hi xD"', () => {
      expect(stringTrim("Hi  xD")).toBe("Hi xD")
    })
  })
  describe('when value equal to "  Hi xD "', () => {
    it('returns "Hi xD"', () => {
      expect(stringTrim("  Hi xD ")).toBe("Hi xD")
    })
  })
  describe('when value equal to "        Hi  xD    "', () => {
    it('returns "Hi xD"', () => {
      expect(stringTrim("        Hi  xD    ")).toBe("Hi xD")
    })
  })
  describe('when value equal to "Hi xD"', () => {
    it('returns "Hi xD"', () => {
      expect(stringTrim("Hi xD")).toBe("Hi xD")
    })
  })
})
