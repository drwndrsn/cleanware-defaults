const validator = require('validator')

//common expressions used below
const nonText = /[^a-z\s\d\-\.]/gi
/* 
All filters need to be arrays even if they only have one element because cleanware 
uses es6 array methods.
*/
let filters = {
    alpha: [s => s.replace(/[^a-z]/gi, '')],
    email: [s => validator.isEmail(s) ? s : 0],
    int: [
        s => s.length > 1 && /^0/.test(s) ? s.replace(/^0+/,'') : s,
        s => parseInt(s)
    ],
    name: [s => s.replace(nonText, '')],
    phone: [
        // remove all non-digits
        s => s.replace(/\D/g, ''),
        // strip a leading 1 
        s => s.length === 11 ? s.replace(/^1/,'') : s,
        // make sure the result is 10 digits or fail
        s => s.length === 10 ? s : 0
    ],
    stateLetters: [
        s => /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/.test(s) ? s : 0
    ],
    street: [s => /^[a-z\s\d\-\.]*$/i.test(s) ? s : 0],
    t: [s => s.replace(nonText,'')],
    zip: [s => validator.isPostalCode(s,'US') ? s : 0]
}

module.exports = filters