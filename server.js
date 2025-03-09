const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const UserSchema=require('./models/User')
const bcrypt=require('bcryptjs')

// const app=express()
// const PORT=3000
//Middlewears

const app=express()
app.use(express.json());
const PORT=5000 

app.get('/',(req, res) => {
    res.send("<h2>Welcome to this session</h2>")
})

app.post('/register',async(req, res)=>{
    const{username, email, password}=req.body
    try{
            const hashedPassword= await bcrypt.hash(password,10)
            const user=new UserSchema({username,email,password:hashedPassword})
            await user.save()
            res.json({message: "User Registred.."})
            console.log("User Registration completed...")
        }
        catch(err)
        {
            console.log(err)
        }
    })




    app.post('/login', async(req, res)=>{
        const {email,password}=req.body
        try{
            const user = await User.findOne({ email });
            if (!user || !(await bcrypt.compare(password, user.password))) 
                {
                 return res.status(400).json({ message: "Invalid Credentials" });
                }
              res.json({ message: "Login Successful", username: user.username });
            }
        catch(err)
        {
            console.log(err)
        }
    })
    

mongoose.connect("mongodb+srv://demomongo123:demomongo123@cluster0.drkxt.mongodb.net/backend?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=>console.log('DB connected...')
).catch(
    (err)=>console.log(err)
)
    

app.listen(PORT,(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("Server is runnng on port :"+PORT)
})


