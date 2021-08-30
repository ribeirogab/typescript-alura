import { inspect } from "../decorators/inspect.js";
import { runtimeLogger } from "../decorators/runtimeLogger.js";
import { scape } from "../decorators/scape.js";

export abstract class View<T> {
  protected element: Element;

  constructor(selector: string) {
    const element = document.querySelector(selector);

    if (!element) {
      throw new Error(`Nenhum elemento encontrado com o seletor "${selector}"`);
    }

    this.element = element;
  }

  protected abstract template(model: T): string;

  @runtimeLogger(true)
  @inspect()
  @scape()
  public update(model: T): void {
    let template = this.template(model);
    this.element.innerHTML = template;
  }
}
