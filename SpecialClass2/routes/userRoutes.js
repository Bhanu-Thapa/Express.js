const express = require('express');

const {home,createuser,getusers,deleteuser,updateuser} = require('../controller/userController.js')

const router = express.Router()

router.get('/',home)
//Here, you’re passing a function reference (home), not calling it.
//Internally, Express does something like this:
// router.get('/', (req, res) => {
//   home(req, res);  // Express calls home() and passes req, res
// });

router.post('/createuser',createuser)
router.get('/getusers',getusers)
router.delete('/deleteuser/:id',deleteuser)
router.put('/updateuser/:id',updateuser)

module.exports = router