const mongoose = require('mongoose')
const db_connection = ()=>{
    mongoose.connect('mongodb+srv://Albouchi:1234@cluster0.y7sft.mongodb.net/restaurantapp?retryWrites=true&w=majority',
    {
        useNewUrlParser:true ,
        useUnifiedTopology: true,                  //configuration
        useCreateIndex: true,
        useFindAndModify: true,
       }
    )



    .then(()=>console.log('data base connected'))
    .catch(()=>console.log('Error horror'))
}
module.exports = db_connection