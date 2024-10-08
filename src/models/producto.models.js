import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre: String,
    categoria: String,
    precio: Number
})


const ProductoModel = mongoose.model("juguetes", productSchema);

export default ProductoModel;

