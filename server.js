const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("requireDir");
const app = express();

mongoose.connect("mongodb://localhost:27017/nodeapi",{userNewUrlParser: true});

requireDir('./src/models/product');

const product = mongoose.model('Product');
app.get('/',(req, res) => {
    product.create({
        title: 'Rwact Native',
        description:'Build native apps with React',
        url:'http://github.com/facebook/react-native'
    })
 return res.send('Hello rockseat')
});

app.listen(3001);
