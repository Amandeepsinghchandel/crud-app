const express = require("express");
const userRoutes = require('./routes/user');
const {connectMongoDb} = require('./connection');
const{logReqRes} = require('./routes/user');

//import mongoose





const app = express();


//!Routes
app.use("/api/users",userRoutes);

//!connect to mongodb
mongoose.connect("mongodb://localhost:27017/User-App")
.then(()=>{
    console.log("Connect to mongodb");
})
.catch((err)=>console.log("Error",err))

//!schema.....



//Model

const User = mongoose.model('User',userSchema)

app.use(express.urlencoded({extended:false}));

app.use(logReqRes("Logger.txt"));
  

//! Middleware --> 1
app.use((req, res, next) => {
    req.myUsername = "aman";
  
  
    console.log("Middleware 1", req.myUsername);
    // res.send({msg: "Middleware 1 executed..."})
    next();
  });
  
  
  //! Middleware 2
  app.use((req, res, next) => {
    console.log("Middleware 2", req.myUsername);
    next();
  });
  



    // user.push({...body,id:users.length+1})
    // fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    //     res.send({status:"status updated",id: users.length});
    // })
    // console.log(body)

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`Server is runnig on port ${PORT}`);
});

