"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
class Tarea {
    constructor(titulo, descripcion) {
        this.completada = false;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.id = Tarea.contadorId++;
    }
    MarcarCompletada() {
        this.completada = true;
        console.log('Tarea completada');
    }
}
exports.Tarea = Tarea;
Tarea.contadorId = 1;
