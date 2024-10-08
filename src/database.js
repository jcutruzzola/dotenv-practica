import mongoose from "mongoose";
import configObject from "./config/config.js";
const { MONGO_URL } = configObject;

mongoose.connect(MONGO_URL)
    .then(() => console.log("Conectado a la db"))
    .catch(error => console.log(error))

    