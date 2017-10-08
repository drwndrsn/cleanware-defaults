const ƒ = require('./init'),
    chai = require('chai'),
        expect = chai.expect

const ø = undefined

describe('email', () => {
    
    it('simple email ok', () => {
        let req = {body: {email_personal: 'chickens@poop.com' }}

        ƒ(req,ø,(err, req, res) => {
            expect(req.body.email_personal).to.equal('chickens@poop.com')
        })
    })

    it('fail on a bad email', () => {
        let req = {body: {email_bad: '<script>var y = 2</script>'}}

        ƒ(req,ø,(err, req, res) => {
            expect(err).to.exist
        })
    })
})


