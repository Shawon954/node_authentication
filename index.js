const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT ||5000;

const userregister = require('./router/auth_route');

mongoose.connect(`mongodb+srv://auth_user:5U8k7w1M4JRnu9CM@cluster0.bcaen6z.mongodb.net/AuthUser?retryWrites=true&w=majority`);

const db= mongoose.connection;


db.on("error",(error)=>{
    console.log(error);
});

db.once('open',()=>{
    console.log('Database Conncetion Successful');
})



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/v1/auth',userregister);




app.get('/',(req,res)=>{
    res.send('Server Running');
});

app.listen(port,()=>{
    console.log("My Server Port:",port);
});



// user_id: auth_user

// user_pass : 5U8k7w1M4JRnu9CM