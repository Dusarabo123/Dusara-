const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID|| "EcpBXTRT#3WkcAnxGGwXorxU6O7kfOnM50QUtA4NiqTeoO91JuMU",
MONGODB: process.env.MONGODB|| "mongodb://mongo:iyfnhSmIYxBqwwsYJZrynDqqmoqrlyQj@junction.proxy.rlwy.net:39503",
ALIVE_IMG: process.env.ALIVE_IMG || "https://8030.us.kg/file/zOm4HoO6YnQR.jpg",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_BIO:"true",
AUTO_VOICE:"true"
};
