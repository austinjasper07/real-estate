import express from 'express';

const app = express();
const PORT = 3000;


app.use(express.urlencoded({extended: false}));



app.listen(3000, ()=>{
    console.log(`Server running on port ${PORT}`)
})