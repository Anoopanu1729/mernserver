const express = require('express')
const router = express.Router()
const cors = require('cors')
const { test, registerUser,loginUser, } = require('../Controllers/logic')


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)




router.get('/',test)


router.post('/register',registerUser)

router.post('/login',loginUser)

// router.get('/fetchdata',post )

module.exports = router