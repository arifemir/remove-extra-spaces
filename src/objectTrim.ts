import { stringTrim } from '.'

const objectTrim = (object: object): object => {
  return Object.keys(object).reduce((acc, key) => {
    if (typeof object[key] === 'string')
      return { ...acc, [key]: stringTrim(object[key]) }
    if (typeof object[key] !== 'object') return { ...acc, [key]: object[key] }
    return { ...acc, [key]: objectTrim(object[key]) }
  }, {})
}

export default objectTrim
