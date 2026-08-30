const {Schema, model}= require('mongoose');

const mySchema= new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    city:{type:String, default:"Unknown"}
},{timestamps:true});

module.exports=model('users', mySchema); //'users' is name of collection in database.