function filterTest (req, res, callback) {

    const stub = require('next-stub'),
        defaults = require('../index'),
        cleanware = require('cleanware')(defaults)

    var req = req || {body: {}},
        res = res || {locals: {}},
        callback = callback || function (err, req, res) {}

    stub(cleanware, req, res, callback)
}

module.exports = filterTest

