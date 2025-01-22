function LogMetodo(target: any,
                   propertyKey: any,
                   descriptor: any) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Método: ${propertyKey} \n Argumentos: `, args.length > 0 ? args : 'La función no requiere de argumentos');
        return metodoOriginal.apply(this, args)
    }

    return descriptor;

}


export{
    LogMetodo
}