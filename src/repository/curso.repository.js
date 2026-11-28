import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS curso(
        id_curso INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        area TEXT NOT NULL,
        nivel TEXT NOT NULL,
        modalidade TEXT NOT NULL
    )
`);

function createCursoRepository(novoCurso) {
    return new Promise((resolve, reject) => {
        const {
            nome,
            area,
            nivel,
            modalidade
        } = novoCurso;

        db.run(
            `INSERT INTO curso(nome, area, nivel, modalidade)
            VALUES(?,?,?,?)`,
            [nome, area, nivel, modalidade],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(novoCurso);
                }
            }
        )
    });
}

function readAllCursoRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM curso`,
            [],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}
function deleteCursoRepository(id) {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM curso WHERE id = ?`,
            [id],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve((
                        message = "Curso excluido com sucesso!"
                    ));
                }
            }
        );
    });
}

export default {
    createCursoRepository,
    readAllCursoRepository,
    deleteCursoRepository

}
