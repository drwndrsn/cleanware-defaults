const f = require('./template'),
    chai = require('chai'),
        expect = chai.expect

const ø = undefined

var req = {body: {
    phone_plusOneAreaCode: "+1 (904) 555-6878",
    contactInfo: {
        phone_nestedCell: "(888) 555-1111"
    }
}}

f(req,ø,(err, req, res) => {
    describe('phone transformations', () => {
        
        it('should strip and reduce to 10 digits', () => {
            expect(req.body.phone_plusOneAreaCode).to.equal('9045556878')
        })

        it('should find a nested input', () => {
            expect(req.body.contactInfo.phone_nestedCell).to.equal('8885551111')
        })
    })
    
})