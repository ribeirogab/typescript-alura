export function scape() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let originalReturn = originalMethod.apply(this, args);

      if (typeof originalReturn === "string") {
        console.log(
          `@scape em ação na classe ${this.constructor.name} para o método ${propertyKey}`
        );
        originalReturn = originalReturn.replace(
          /<script>[\s\S]*?<\/script>/g,
          ""
        );
      }

      return originalReturn;
    };

    return descriptor;
  };
}
