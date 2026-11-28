import cursoRepository from "../repository/curso.repository.js";

async function createCursoService(novoCurso) {
    const cursoSalvo  = await cursoRepository.createCursoRepository(novoCurso);

    if (!cursoSalvo) {
        throw new Error("Erro ao criar novo curso!");
    }

    return cursoRepository;
}

async function readAllCursoService() {
    const curso = await cursoRepository.readAllCursoRepository();
    
    return curso;
}

async function deleteCursoService(id) {
    const mensagemRetorno = await cursoRepository.deleteCursoRepository(id);
    if (!mensagemRetorno) {
        throw new Error("Erro ao deletar curso!");
    }
            return mensagemRetorno;
}


export default {
    createCursoService,
    readAllCursoService,
    deleteCursoService

}