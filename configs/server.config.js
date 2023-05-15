if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}
//console.log(process.env.NODE_ENV);
//console.log(process.env.PORT);
//console.log(process.env.DB_NAME);
module.exports = {
    PORT : process.env.PORT
}