const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./db/connect");



dotenv.config();
const app = express()

// const listRouter = require("./routes/list.routes")

// app.use("/list",listRouter);

app.get('/', (req, res) => res.send('Hello World!'));

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))




const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();