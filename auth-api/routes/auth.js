var express = require('express')
var jwt = require('jsonwebtoken')
var config = require('../config')
var router = express.Router()

/**
 * Receive email and password
 * Find user
 * Generate token
 */
router.post('/login', (req, res, next) => {
    const { email, password } = req.body.userData

    if (email === undefined || password === undefined) {
        res.status(401).json({
            success: false,
            code: 'ERROR_ROUTES_AUTH_ROUTER-POST-LOGIN',
            message: 'Password or email is invalid'
        })
    }
    else {
        let tokenData = {
            id: '1843'
        }
        let generatedToken = jwt.sign(tokenData, config.JWT_KEY, { expiresIn : '1m' })
        res.json({
            success: true,
            token: generatedToken
        })
    }
})

module.exports = router