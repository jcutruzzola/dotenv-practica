import ProductoModel from "../models/producto.models.js";
import { respuesta } from "../utils/utils.js";

class ProductoController {
    
    async getProductos(req, res) {
        try {
            const productos = await ProductoModel.find();
            respuesta(res, 200, productos);
        } catch (error) {
            respuesta(res, 500, "Error al obtener los productos");
        }

    }

    async postProducto(req, res) {
        try {
            const nuevoProducto = req.body;
            await ProductoModel.create(nuevoProducto);
            respuesta(res, 201, "Producto creado exitosamente");
        } catch (error) {
            respuesta(res, 500, "Error al crear productos");
            
        }
    }
}

export default ProductoController;
