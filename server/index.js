import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import User from "./models/user.js";
import * as dotenv from "dotenv";
import session from "express-session";


const dbUrl=process.env.DB_URL ||'mongodb://127.0.0.1:27017/airbnb-clone';
const secret = process.env.SECRET || "this is a secret"

const sess = {
    name:"session",
    secret,
    resave:false,
    saveUninitialized: false,
    cookie:{
        secure:true,
        expires:new Date(Date.now() + 8 * 3600000),
        httpOnly:true,
        maxAge: 24 * 60 * 60 * 1000 

    }
    }
    dotenv.config();
    const app = express();
app.use(express.json());
app.use(cors());

app.use(session(sess));

app.use((req,res,next)=>{
    console.log(req.session);
})
    
mongoose.connect(dbUrl)
.then((res) => {
    console.log("Data base is conneted");
  })
 

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/login", async(req, res) => {
    const {email,password} = req.body;
     const user = await User.findOne({email});
     console.log(user);
     const isLoggined = bcrypt.compareSync(password, password); 
    if(isLoggined){
    
    }else
    {
        res.send("Invalid email or password");
    }
});

app.post("/register", async(req, res) => {
  const { email, name, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  const newUser = new User({ email, name, password: hash });
  await newUser.save();
  req.cookie("Token", newUser);
//   res.status(201).json({data:null, message:"cookie set successfully."})

});

app.listen(3000, (req, res) => {
  console.log("Server is up and running");
});
