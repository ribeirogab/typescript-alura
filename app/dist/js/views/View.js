export class View {
    constructor(selector, scape = false) {
        this.scape = scape;
        const element = document.querySelector(selector);
        if (!element) {
            throw new Error(`Nenhum elemento encontrado com o seletor "${selector}"`);
        }
        this.element = element;
    }
    update(model) {
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
        }
        this.element.innerHTML = template;
    }
}
