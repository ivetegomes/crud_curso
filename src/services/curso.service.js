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
export default {
    createCursoService,
    readAllCursoService
}