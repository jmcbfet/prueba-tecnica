import mongoose from 'mongoose';
import { config } from "dotenv";

config();

mongoose.connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
})
    .then(db => console.log("la base de datos ha sido conectada"))
    .catch(err => console.log(err))