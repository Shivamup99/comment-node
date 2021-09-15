const express = require('express')
const blog = require('../controller/blog')
//const auth = require('../middleware/auth')
//const {userValidation,schemaValidation} = require('../validation/user')
const router = express.Router();
 
router.post('/api/v1/blog',blog.postBlog)
router.get('/api/v1/blog',blog.getBlog)
router.get('/api/v1/blog/:_id',blog.getBlogById)

module.exports = router;