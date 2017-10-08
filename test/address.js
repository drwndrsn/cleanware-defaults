const ƒ = require('./init'),
    chai = require('chai'),
        expect = chai.expect

const ø = undefined

describe('address', () => {
    let req = {
            body: {
                street_home: '444 Stinkleberry Lane',
                street_business: 'P.O. Box 94102',
                stateLetters_home: 'FL',
                stateLetters_two: 'WA'
            }
    }

    ƒ(req,ø,(err, req, res) => {
        
        it('valid street and PO box', () => {
            expect(req.body.street_home).to.equal('444 Stinkleberry Lane')
            expect(req.body.street_business).to.equal('P.O. Box 94102')
        })

        it('valid two letter state', () => {
            expect(req.body.stateLetters_home).to.equal('FL')

        })
    })

    req = {body: {street_bad: '{}!! <script>'}}

    ƒ(req,ø,(err, req, res) => {

        it('fail on street with weird characters', () => {
            expect(err.message).to.match(/invalid\sstreet/)
        })
    })

    req = {body: {stateLetters_bad: 'MX'}}

    ƒ(req,ø,(err, req, res) => {

        it('fail invalid state', () => {
            expect(err.message).to.match(/invalid\sstate/)
        })
    })
})