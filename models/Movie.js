const mongoose = require('mongoose');


const MovieSchema = new mongoose.Schema({
  imdbId:{type:String,required:true,unique:true},
  title:{type:String},
  titleType:{type:String},
  isSeries:{type:Boolean,default:false},
  year:{type:String},
  certificate:{type:String},
  genre:{type:String},
  img:{type:String},
  trailer:{type:String,default:''},
  video:{type:String,default:''},
  desc:{type:String}
},
{timestamps:true});


module.exports = mongoose.model('Movie',MovieSchema);