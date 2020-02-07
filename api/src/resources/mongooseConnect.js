const mongoose = require('mongoose');
MONGOCONNECTSTR = process.env.MONGOCONNECTSTR;

function mongooseConnect() {
  mongoose
  .connect(`${MONGOCONNECTSTR}`,{
    // userUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((x)=>{
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('An error accured while trying to connect to DB', err)
  })
  return mongoose
}

module.exports = {
  mongooseConnect,
}