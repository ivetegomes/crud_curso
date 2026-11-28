import cursoController from "../controller/curso.controller.js";
import { Router } from "express";

const cursoRouter = Router();

cursoRouter.post("/curso", cursoController.createCursoController);

cursoRouter.get("/curso", cursoController.readAllCursoController);

cursoRouter.delete("/curso/:id", cursoController.deleteCursoController);


export default cursoRouter;

