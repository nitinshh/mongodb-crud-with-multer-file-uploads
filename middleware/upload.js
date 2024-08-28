const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback) {
        if(
            file.mimetype == "image/png" || file.mimetype == 'image/jpg'
        ) {
            callback(null, true)
        } else{
            console.log("only jpg & png file supported")
            callback(null, false)
        }

        // only accept jpg & png format. otherwise it will add the employee but will not upload the image
    },
    limits: {
        fileSize: 1024 * 1024 * 2     // suppport maximum 2mb file
    }
})

module.exports = upload