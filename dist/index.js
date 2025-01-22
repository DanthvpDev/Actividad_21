"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gestorTareas_1 = require("./gestorTareas");
const Tarea_1 = require("./Tarea");
let tarea = new Tarea_1.Tarea('Holix', 'Hacer nada');
let gestor = new gestorTareas_1.GestorTareas();
gestor.AgregarItem(tarea);
gestor.ListarItems();
