//Importamos librerías
const express = require('express');
const router = express.Router();
const dbconfig = require('../../db/config');

//Importación de clase Contenedor
const ClaseContenedor = require('../../data/Contenedor');
const contenedorProductos = new ClaseContenedor(dbconfig.mariaDB, 'productos');
const arrayProductos = contenedorProductos.getAll();
module.exports = router;