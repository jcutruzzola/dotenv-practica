//Importamos dotenv y program

import dotenv from "dotenv";
import program from "../utils/commander.js";

const { mode } = program.opts();

dotenv.config({
    path: mode === "produccion" ? "./.env.produccion":"./.env.desarrollo",
});

const configObject = {
    MONGO_URL: process.env.MONGO_URL

};

// console.log(process.env.MONGO_URL);
// console.log(configObject);

export default configObject;

