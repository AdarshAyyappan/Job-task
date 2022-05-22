const Post = require('../Models/Post')
const router = require('express').Router();
const {postJob,getJob,deleteJob} =require ('../Controller/postController')


router.route('/').post(postJob)
router.route('/').get(getJob)
router.route('/delete/:id').delete(deleteJob)

module.exports=router;