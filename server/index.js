const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const list = require("./routes/list.routes");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
// const listRouter = require("./routes/list.routes")

app.use("/list",list);

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