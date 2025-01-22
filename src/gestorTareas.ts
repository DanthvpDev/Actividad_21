import { LogMetodo } from "./decoradorGestorTareas";

class GestorTareas<T> {
    private _almacenadorTareas: T[] = [];

    @LogMetodo
    public AgregarItem(item: T): void {
        this._almacenadorTareas.push(item);
    }


    @LogMetodo
    public ListarItems(): T[] {
        return this._almacenadorTareas;
    }

    @LogMetodo
    public BuscarItemPorId(id : number): void {
        console.log(this._almacenadorTareas.find((elem:any) => elem.id == id));
    }
}


export {
    GestorTareas
}