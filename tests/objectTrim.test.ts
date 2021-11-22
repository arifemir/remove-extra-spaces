import { objectTrim } from '../src'

describe("objectTrim()", () => {
  const number = 12
    let object = {
      key: '  hi  xD  ',
      key2: {
        key: 'hi   xD',
        key2: {
          key: 'hi    xD'
        }
      },
      key3: number,
    }
    const expectToBeString = 'hi xD'
    const trimmedObj = objectTrim({...object})

  it(`object.key initial = \'${object.key}\' expected \'hi xD\'`, () => {
    expect(trimmedObj.key).toBe(expectToBeString)
  })

  it(`object.key2.key initial = \'${object.key2.key}\' expected \'hi xD\'`, () => {
    expect(trimmedObj.key2.key).toBe(expectToBeString)
  })

  it(`object.key2.key2.key initial = \'${object.key2.key2.key}\' expected \'hi xD\'`, () => {
    expect(trimmedObj.key2.key2.key).toBe(expectToBeString)
  })

  it(`object.key initial = ${number} expected ${number}`, () => {
    expect(trimmedObj.key3).toBe(number)
  })
})
