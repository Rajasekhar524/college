const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const studentRoutes = require('./routes/studentRoutes')
const collegeRoutes = require('./routes/collegeRoutes')
const cors = require('cors')

const app = express();
 let PORT = process.env.PORT || 3000 ;
//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cors({ origin: true }));

app.set('view engine','ejs')

const dbURI = 'mongodb+srv://Raj:211221@cluster1.mg6wb.mongodb.net/nodeClg?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGODB_URI||dbURI,{useNewUrlParser:true,
                        useUnifiedTopology:true,
                        useCreateIndex:true })
                        .then((result)=> app.listen(PORT))
                        .catch((err)=>console.log(err));

if(process.envNODE_ENV === 'production') {
    app.use(express.static('client/build'))
}



app.get('/', (req,res) => res.render('home'))
app.get('/smooth',(req,res)=> res.render('smooth'));
app.use(authRoutes)
app.use(studentRoutes)
app.use(collegeRoutes)