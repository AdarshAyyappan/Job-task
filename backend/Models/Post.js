const mongoose= require("mongoose")

const PostSchema= new mongoose.Schema({
    name:{
        type:String,
        require: true,
        min:3,
        max:20,
        unique:true

    },
    budget:{
        type:Number,
        required:true,
    },
    vacancy:{
        type:Number,
        required:true,
    },
    hired:{
        type:Number,
        required:true,
    },
    application:{
        type:Number,
        required:true,
    },


    

},{
    timestamps:true
}
)
module.exports=mongoose.model("Post",PostSchema)