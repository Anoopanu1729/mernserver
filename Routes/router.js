const express = require('express')
const router = express.Router()
const cors = require('cors')
const { test, registerUser,loginUser, } = require('../Controllers/logic')
const FRONT_URL=process.env.FRONT_URL

router.use(
    cors({
        credentials: true,
        origin: `${FRONT_URL}`
    })
)




router.get('/',test)


router.post('/register',registerUser)

router.post('/login',loginUser)

// router.get('/fetchdata',post )

module.exports = router