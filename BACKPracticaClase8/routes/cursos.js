const express = require ('express');
const router = express.Router();
const cursos = require('../services/cursos');


/*** GET CURSOS */

router.get('/', async function (req, res, next){
    try {
        res.json(await cursos.getAll());
    } catch (error) {
        console.error("Error en el router al traer todos los cursos");
        next(error);
    }
})
