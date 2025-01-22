import { GestorTareas } from "./gestorTareas";
import { Tarea } from "./Tarea";


let tarea1 = new Tarea('Correr', 'Correr 10km');
let tarea2 = new Tarea('Bañarme', 'No durar mucho');

let gestor = new GestorTareas();

gestor.AgregarItem(tarea1);
gestor.AgregarItem(tarea2);
