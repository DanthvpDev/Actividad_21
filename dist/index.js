"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gestorTareas_1 = require("./gestorTareas");
const Tarea_1 = require("./Tarea");
//* Cree dos nuevas instancias de Tarea
let tarea1 = new Tarea_1.Tarea('Correr', 'Correr 10km');
let tarea2 = new Tarea_1.Tarea('Bañarme', 'No durar mucho');
//* Genere una nueva instancia del GestorDeTareas
let gestor = new gestorTareas_1.GestorTareas();
//* Agregue las tareas como ítems del gestor de tareas
gestor.AgregarItem(tarea1);
gestor.AgregarItem(tarea2);
//* Liste los ítems del gestor
gestor.ListarItems();
//* Marque como completada alguna tarea
tarea1.MarcarCompletada();
//* Busque una tarea por id
gestor.BuscarItemPorId(1);
