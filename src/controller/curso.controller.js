import cursoService from "../services/curso.service.js";

async function createCursoController(request, response) {
    const novoCurso = request.body;

    try {
        const cursoSalvo = await cursoService.createCursoService(novoCurso);

        response.status(201).send(cursoSalvo);
    } catch(error) {
        response.status(400).send(error.message);
    }
}

async function readAllCursoController(request, response) {
    try {
       const curso = await cursoService.readAllCursoService();
       
       response.status(200).send({curso});
    } catch(error) {
        response.status(404).send(error.message);
    }
}

async function deleteCursoController(request, response) {
    const { id } = request.params;

    try {
        const mensagemRetorno = await cursoService.deleteCursoService(id);
        response.status(200).send({ message: mensagemRetorno });
    } catch(error) {
        response.status(400).send(error.message);
    }
}

export default {
    createCursoController,
    readAllCursoController,
    deleteCursoController

}