const ƒ = require('./init'),
    chai = require('chai'),
        expect = chai.expect

const ø = undefined

describe('phone', () => {
    let req = {
            body: {
                phone_plusOneAreaCode: "+1 (904) 555-6878",
                contactInfo: {
                    phone_nestedCell: "(888) 555-1111"
                }
            }
    }

    ƒ(req,ø,(err, req, res) => {
        
        it('strip and reduce to 10 digits', () => {
            expect(req.body.phone_plusOneAreaCode).to.equal('9045556878')
        })

        it('process nested input', () => {
            expect(req.body.contactInfo.phone_nestedCell).to.equal('8885551111')
        })
    })

    req = {body: {phone_bad: '1911572'}}

    ƒ(req,ø,(err, req, res) => {

        it('fail on a bad phone', () => {
            expect(err).to.exist
        })
    })
})