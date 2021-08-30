export function scape() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let originalReturn = originalMethod.apply(this, args);
            if (typeof originalReturn === "string") {
                console.log(`@scape em ação na classe ${this.constructor.name} para o método ${propertyKey}`);
                originalReturn = originalReturn.replace(/<script>[\s\S]*?<\/script>/g, "");
            }
            return originalReturn;
        };
        return descriptor;
    };
}
