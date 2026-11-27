import cursoController from "../controller/curso.controller.js";
import { Router } from "express";

const cursoRouter = Router();

cursoRouter.post("/curso", cursoController.createCursoController);

produtoRouter.get("/curso", cursoController.readAllCursoController);

export default cursoRouter;

