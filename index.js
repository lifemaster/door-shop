const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();



const productRoutes = require('routes/product');
const orderRoutes = require('routes/order');
const productProducerRoutes = require('routes/productProducer');
const ourWorksRoutes = require('routes/ourWork');
const ourCommentsRouter = require('routes/ourComment');
const consultationFormRouter = require('routes/consultationForm')



const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(cors({
  credentials: true,
  origin:['http://localhost:4200']
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect('mongodb+srv://kamyshan19:kamyshan19@door-shop.yqrrsud.mongodb.net/?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}, (err) => {
  if(err){
    console.log(err);
    return;
  } 
  
  console.log('mongodb connected');
  


  app.listen(PORT, () => {
    console.log('Website served on http://localhost:' + PORT)
  });
})

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/product-producers', productProducerRoutes);
app.use('/api/our-works', ourWorksRoutes);
app.use('/api/our-comments', ourCommentsRouter);
app.use('/api/consultation-form', consultationFormRouter);
app.use('/uploads', express.static('uploads'));
app.use(express.static('backend'));
app.use(express.static('public')); 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
}) 

app.get('*', (req, res) => {
  res.send(path.join(__dirname, 'backend'));
})





