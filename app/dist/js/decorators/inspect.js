export function inspect() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Método ${propertyKey}`);
            console.log(`------ parâmetros: ${JSON.stringify(args)}`);
            const originalReturn = originalMethod.apply(this, args);
            console.log(`------ retorno: ${JSON.stringify(originalReturn)}`);
            return originalReturn;
        };
        return descriptor;
    };
}
