const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');


dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=>{
  console.log("MongoDB server is running........");
 

})
.catch((err)=>console.log(err));

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/movies',movieRoute);
app.use('/api/lists',listRoute);


const port = process.env.PORT || 8800;

app.listen(port,()=>{
    
    console.log("Backend server is running.........");
});