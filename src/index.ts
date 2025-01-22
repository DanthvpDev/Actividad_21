import { GestorTareas } from "./gestorTareas";
import { Tarea } from "./Tarea";

//* Cree dos nuevas instancias de Tarea
let tarea1 = new Tarea('Correr', 'Correr 10km');
let tarea2 = new Tarea('Bañarme', 'No durar mucho');

//* Genere una nueva instancia del GestorDeTareas
let gestor = new GestorTareas();

//* Agregue las tareas como ítems del gestor de tareas
gestor.AgregarItem(tarea1);
gestor.AgregarItem(tarea2);

//* Liste los ítems del gestor
gestor.ListarItems();

//* Marque como completada alguna tarea
tarea1.MarcarCompletada();

//* Busque una tarea por id
gestor.BuscarItemPorId(1);


