const mongoose=require('mongoose')
const {Schema}=mongoose



const userSchema = new Schema ({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})
const userModel = mongoose.model('User',userSchema)
module.exports = userModel;






// const postSchema = new Schema({
//     link:String,
//     logo:String
// }) 
// const postModel =mongoose.model('posts',postSchema)
// module.exports=postModel