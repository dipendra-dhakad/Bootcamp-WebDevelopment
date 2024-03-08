const port = 4000;
const express = require("express");
const app = express();  //using express e create an app
const mongoose = require("mongoose"); //inisilise the mangoose library using that we can use mongodb
const jwt = require("jsonwebtoken"); //by this we verify the token (authentication)
const multer = require("multer");  //by intisilse the multer by using that we can create image storage sytem 
const path = require("path");
const cors = require("cors");    //provide access to the react project
const { log } = require("console");
const { ADDRGETNETWORKPARAMS } = require("dns");
const { runInNewContext } = require("vm");

app.use(express.json());     //using that whatever request we get   that will be passed using json method
app.use(cors());   //using that we get access to frontend to connect with the backend

//database connection with mongodb
mongoose.connect("mongodb+srv://dipdhakad:dipdhakad8530@cluster0.ui13ypm.mongodb.net/e-commerce")     //mongoose library to connect the mongodb database by connection stream
.then(()=>console.log("DB connected Successfully"))
.catch((err)=> console.log("Error connecting DB", err))

//API creation
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//Image Storage Engine
const Storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({storage:Storage})


//Creating upload Endpoint for images
app.use('/images', express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//create Schema for product

const Product = mongoose.model("Product",{
   id:{
    type:Number,
    required:true,
        
   },
   name:{
      type:String,
      required:true,
   },
   image:{
      type:String,
      required:true,
   },
   category:{
       type:String,
       required:true,
   },
   new_price:{
       type:Number,
       required:true,
   },
   old_price:{
    type:Number,
    required:true,
   },
   date:{
    type:Date,
    default:Date.now,
   },
   availabe:{
    type:Boolean,
    default:true,
   }
})

app.post('/addproduct', async (req,res) =>{
    let products = await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    console.log("api hit")
        try{
            const product = new Product({

                id:id,
                name:req.body.name,
                image:req.body.image,
                category:req.body.category,
                new_price:req.body.new_price,
                old_price:req.body.old_price,
            });
            console.log("Inside");
            console.log(product);
            await product.save();   /// check
            console.log("saved");
            res.json({
                success:true,
                name:req.body.name,
            })
        } catch(error){
            console.log("Error", error)
        }
})


//creating api for deleting product

app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//creating api for getting all products
app.get ('/allproducts' ,async(req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
    
})

//Schema creating for user model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

//Creating Endpoint for registering the user
app.post('/signup',async(req,res)=>{
   
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email address"});

    }
    let cart ={};
    for(let i=0 ;i<300;i++){
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

//creating end point for the user login

app.post('/login',async(req,res)=>{
   let user = await Users.findOne({email:req.body.email});

   if(user){
    const passCompare= req.body.password === user.password;
    if(passCompare){
        const data ={
            user:{
                id:user.id
            }
        }
        const token = jwt.sign(data,'secret_ecom');
        res.json({success:true,token});
    }
    else{
        res.json({success:false,errors:"Wrong Password"});
    }

   }
  else{
    res.json({success:false,errors:"Wrong Email Id"})
  }
})


//creating endpoint for newCollection
app.get('/newCollection',async(req,res)=>{
    let product = await Product.find({});
    let newCollection = product.slice(1).slice(-8);
    console.log("newCollection Fetched");
    res.send(newCollection);

})
//Creatring end point for popular in women collection
app.get('/popularinwomen',async(req,res)=>{
    let products = await Product.find({category:"women"});
    let popular_in_women = products.slice(0,4);
    console.log("Popular in women fetched");
    res.send(popular_in_women);
})

//creating middleware to fetch user
const fetchuser = async(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }else{
        try {
           const data = jwt.verify(token,'secret_ecom');
           req.user = data.user ;
           next();
        } catch (error) {
           res.status(401).send({errors:"please authenticate using valid token"}) 
        }
    }
}

//Creating end point for adding  products in carts
app.post('/addtocart',fetchuser,async(req,res)=>{
    // console.log(req.body,req.user);
    console.log("Added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] +=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})


//Creating endpoint to remove product
app.post('/removefromcart',fetchuser,async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})

//creating endpoint to get cartdata
// app.post('/getcart',fetchuser,async (req,res)=>{
//   console.log("GetCart");
//   let userData = await Users.findOne({_id:req.user.id});
//   res.json(userData.cartData);
// })

app.post('/getcart', fetchuser, async (req, res) => {
    try {
      console.log("GetCart");
      let userData = await Users.findOne({ _id: req.user.id });
      if (!userData) {
        return res.status(404).json({ error: "User data not found" });
      }
      res.json(userData.cartData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port "+port);
    }
    else{
        console.log("Error : " +error);
    }
})