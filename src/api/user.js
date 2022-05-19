const express = require('express')
const router = express.Router()


router.post('/', (req, res) => {

})

router.put('/',(req, res) => {
    
})

router.del('/', (req, res) => {
    if (!req.query.id) 
        res.statusCode(400).end()
    

})

module.exports = router 
