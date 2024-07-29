import express from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';


const router = express.Router();

router.post('/', (req, res) => {
    const {firstName, lastName, username, email, phone} = req.body;

    bcrypt.hash(req.body.password, 10, async (err, hash) =>{
        try {
             await new User({firstName, lastName, username, email, phone, password: hash}).save();

             console.log("User Added to Database successfully");
        } catch (error) {
            console.log(`\nERROR! ERROR!! ERROR!!!\nCould not add user to Database.\nError Code: ${error.code}\nError Message: ${error.errmsg}`);
        }
    })


    res.json({Status: 'Successfull'});
})

export default router;