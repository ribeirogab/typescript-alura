export abstract class View<T> {
  protected element: Element;

  constructor(selector: string, private scape: boolean = false) {
    const element = document.querySelector(selector);

    if (!element) {
      throw new Error(`Nenhum elemento encontrado com o seletor "${selector}"`);
    }

    this.element = element;
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);

    if (this.scape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
    }

    this.element.innerHTML = template;
  }
}
