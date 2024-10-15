import mongoose from "mongoose";
import configObject from "./config/config.js";
const { MONGO_URL } = configObject;

/* mongoose.connect(MONGO_URL)
    .then(() => console.log("Conectado a la db"))
    .catch(error => console.log(error))
 */

////////////////////////////////////


// 3) Patron de diseño Singleton

/* 
    Lo usamos para tener una isntancia global en toda la aplicación.
    El caso mas usado es en la conexión a la db.

    Como funciona?

    Verifica si ya existe una instancia de esta clase, en caso de que existe, retorna esa instancia, caso contrario, la crea.

*/


class BaseDeDatos {
    static #instancia;
    // Se declara una variable estatica y privada, llamada instancia. La # indica que se pueda acceder sólo dentro de la misma clase.
    //static significa que le pertenece a la clase en si, no a las instancias individuales. Para poder llamarlo, tengo que llamar primero a la clase.

    constructor() {
        mongoose.connect(MONGO_URL);
    }

    static getInstancia() {
        if(this.#instancia) {
            //Si ya tenemos una instancia, la retornamos
            return this.#instancia;
        }
        //Caso contrario, la creamos

        this.#instancia = new BaseDeDatos();
        return this.#instancia;   
    }
}


export default BaseDeDatos;