const mongoose=require('mongoose');
const schema = mongoose.Schema;
const infoSchema=new mongoose.Schema({
    ModelNumber:String,
    Name:String,
    OS:String,
    RAM:String,
    Camera:String,
    Special_features:Array,
    Price:Number,
    photoPath:Array,
    video:String,
    
});

module.exports=mongoose.model('guide',infoSchema,'info');