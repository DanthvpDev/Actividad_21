"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMetodo = LogMetodo;
function LogMetodo(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Método: ${propertyKey} \n Argumentos: `, args.length > 0 ? args : 'La función no requiere de argumentos');
        return metodoOriginal.apply(this, args);
    };
    return descriptor;
}
