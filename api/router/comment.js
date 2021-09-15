const express = require('express')
const comment = require('../controller/comment')
//const auth = require('../middleware/auth')
//const {userValidation,schemaValidation} = require('../validation/user')
const router = express.Router();
 
router.post('/api/v1/comment',comment.postComment)
// router.get('/api/v1/comment',comment.getComment)
// router.get('/api/v1/comment/:_id',comment.getCommentById)

module.exports = router;