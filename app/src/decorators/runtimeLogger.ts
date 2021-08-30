export function runtimeLogger(inSeconds: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();

      originalMethod.apply(this, args);

      const t2 = performance.now();
      console.log(
        `${propertyKey}, tempo de execução: ${
          (t2 - t1) / (inSeconds ? 1000 : 1)
        } ${inSeconds ? "segundos" : "milisegundos"}`
      );
    };

    return descriptor;
  };
}
