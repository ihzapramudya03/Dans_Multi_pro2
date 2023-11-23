const express = require('express')
const router = express.Router()
const Controller = require ('../controllers/controller')
const { authentication } = require('../middlewares/authentication')


router.post('/login', Controller.login)
router.post('/register', Controller.register)

// router.use(authentication)

router.get('/jobList', Controller.jobList)
router.get('/jobList/:id', Controller.jobById)


module.exports = router