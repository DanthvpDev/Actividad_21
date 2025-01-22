import { ITarea } from "./ITarea";

class Tarea implements ITarea {
    
    static contadorId: number = 1;
    public id: number;
    public titulo: string;
    public descripcion?: string | undefined;
    public completada: boolean;
    
    constructor(titulo: string, descripcion?: string) {
        this.completada = false;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.id = Tarea.contadorId++;
    }

    public MarcarCompletada(): void {
        this.completada = true;
        console.log('Tarea completada');
    }
    
}



export {
    Tarea
}