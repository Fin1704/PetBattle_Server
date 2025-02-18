const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const playerRoutes = require('./routes/player.js');
const sequelize = require('./config/database.js');
const {Web3} = require('web3');
require('dotenv').config();
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sử dụng route đăng ký người chơi
app.use('/api/player', playerRoutes);

sequelize.sync().then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
}).catch((err) => {
    console.log('Error connecting to database: ', err);
});


const url = process.env.HTTPS_ENDPOINT;

const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error) {
        console.log(blockNumber);
    } else {
        console.log(error);
    }
});