const express=require('express')
const { CreateData, GetAllData } = require('../Controllers/UserController')
const router=express.Router()

router.use(express.json())
router.route('/post').post(CreateData)
router.route('/get').get(GetAllData)

module.exports=router