const validator = require('validator')

let filters = {
    phone: [
        s => s.replace(/\D/g, ''), // remove all non-digits,
        s => s.length === 11 ? s.replace(/^1/,'') : s,
        s => s.length === 10 ? s : 0
        // standard formatting here
    ],
    name: [
        (s) => {
            return s.replace(/[^a-z\s\-\.]/gi, '') // remove everything except letters, spaces, hyphen, period
        }
    ],
    alpha: [
        (s) => {
            return s.replace(/[^a-z]/gi, '')
        }
    ],
    email: [
        (s) => {
            return (validator.isEmail(s)) ? s : 0
        }
    ],
    cc: [
        (s) => {
            return (validator.isCreditCard(s)) ? s : 0
        }
    ],
    zip: [
        (s) => {
            return (validator.isPostalCode(s,'US')) ? s : 0
        }
    ],
    stateLetters: [
        (s) => {
            return (/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/.test(s)) ?
                s : 0
        }
    ]
}

module.exports = filters