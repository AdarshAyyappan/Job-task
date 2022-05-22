const  Post = require('../Models/Post')


// ====================post job===============
const postJob = async(req,res)=>{
    console.log('postjob reached')
    console.log(req.body)
    const {name,budget,vacancy, hired,application} =req.body

    try {
        const post =await Post.create({name,budget,vacancy, hired,application})
        res.status(201).json({
            _id: post._id,
            name: post.name,
            budget:post.budget,
            vacancy:post.vacancy,
            hired:post.  hired,
            application:post.application,
            success:true


        })
    } catch (err) {
        console.log(err)
        // res.status(500).json(err);
    }
}

// =====================get post=================

const getJob = async(req,res)=>{
    try {
        const post = await Post.find({})
        console.log(post);
        res.json(post)
        
    } catch (err) {
        res.json(err)
    }
}

//====================delete post==================

const deleteJob = async (req,res) =>{
    
    try {
        const post = await Post.findById(req.params.id)
        await post.remove()
        res.json({})
    } catch (error) {
        res.json(err)
    }
}

module.exports ={postJob,getJob,deleteJob}