const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')

// -------------in case of uploading picture----------------

const upload = require('../middleware/upload')

//-----------------------------------------------



router.get('/list', EmployeeController.list)
router.post('/show', EmployeeController.show)

router.post('/store', upload.single('picture') /*in case of uploading single picture*/
// upload.array('picture[]')     // in case of uploading multiple pictures
, EmployeeController.store)

router.post('/update', EmployeeController.update)
router.delete('/delete', EmployeeController.destroy)


module.exports = router