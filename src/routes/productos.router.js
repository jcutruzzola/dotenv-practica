import { Router } from "express";
const router = Router();
import ProductoController from "../controllers/productos.controller.js";

const productoController = new ProductoController();

router.get("/", productoController.getProductos);
router.post("/", productoController.postProducto);


export default router