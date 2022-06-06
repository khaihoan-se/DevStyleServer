require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path')


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

// Router
app.use('/user', require('./routes/userRouter'));
app.use('/api', require('./routes/upload'));
// Connect to mongoDB
const URI = process.env.MONGODB_URL;
(async () => {
    try {
        await mongoose.connect(URI);
        console.log('Connected To MongoDB!!!');
    } catch (error) {
        console.error(error);
    }
})()

// Fi2xJb3yu7X0gUAE
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`);
})