const Blog = require('../model/blog')
const User = require('../model/user')
exports.getBlog = async(req,res)=>{
    try {
        let blog = await Blog.find().select('-password').populate({path:'comment'})
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getBlogById = async(req,res)=>{
    try {
        let blog = await Blog.findById({_id:req.params._id}).select('-password')
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.postBlog = async(req,res)=>{
    let users = await User.findOne(req.user)
    try {
        let blog = new Blog(req.body)
        await blog.save()
        users.blog.push(blog._id)
        await users.save()
        res.status(201).json(blog)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
