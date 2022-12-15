import mongoose from "mongoose"

const conn  = () => {
    mongoose.connect(process.env.DB_URI,{
        dbName: "lenslight",
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then(() => {
        console.log("connected to the DB")
    }).catch((err) => {
        console.log(err)
    })
}



export default conn;