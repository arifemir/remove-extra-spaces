# remove-extra-spaces
if you need to remove extra spaces from object properties and string variables you can use this package

### Usage
```js
//objectTrim function using
let object = {
  key: '  hi  xD  ',
  key2: {
    key: 'hi   xD',
	key2: {
	  key: 'hi    xD'
	}
  }
}

object = objectTrim(object)
console.log(object.key2.key2.key) //hi xD

//stringTrim function using
let string = ' hi   xD  '

string = stringTrim(string)
console.log(string)//hi xD
```
