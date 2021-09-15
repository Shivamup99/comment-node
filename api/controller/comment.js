const Comment = require('../model/comment')
const Blog = require('../model/blog')

exports.postComment = async(req,res)=>{
    let blogs = await Blog.findOne(req.blog)
    try {
        let comment = new Comment(req.body)
        await comment.save()
        blogs.comment.push(comment._id)
        await blogs.save()
        res.status(201).json(comment)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}