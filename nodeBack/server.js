const express = require("express");
const mongoose =require("mongoose");
const { Schema } = mongoose;
const app = express();
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json())
mongoose.connect("mongodb+srv://elnurxo:Starboystar1@products.lhifuq4.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });

//DB TABLE
const userSchema = new Schema({
    firstname: String,
    lastname: String,
    birthdate: String,
    email: String,
},
{
    timestamps: true,
    versionKey: false,
})

const User = mongoose.model('User', userSchema);

//user post
app.post('/users',

    body('firstname').notEmpty().withMessage('First Name is required'),
    body('lastname').notEmpty().withMessage('Last Name is required'), (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        var user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            birthdate: req.body.birthdate,
            email: req.body.email
        });

        user.save();

        res.send('User created successfully!');

})

//user get all
app.get('/users', (req, res) => {

    User.find({}, (err, docs) => {

        if (!err) {
            res.json(docs)
        }
        else {
            res.status(500).json(err);
        }

    })

})

//user edit
app.put('/users/:id', (req, res) => {

    let id = req.params.id;

    userSchema.findByIdAndUpdate(id, req.body, (err) => {
        if (!err) {
            res.json({ 'message': 'success' });
        }
        else {
            res.status(500).json(err);
        }
    })
})

let PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})

//NODE MONGO DB SAMPLE

// //delete
// app.delete('/products/:id', async (req, res) => {
//   const id = req.params.id
//   const prod = await ProductModel.findByIdAndDelete(id)
//   res.status(200).json(prod)
// })

