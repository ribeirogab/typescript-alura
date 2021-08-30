var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect } from "../decorators/inspect.js";
import { runtimeLogger } from "../decorators/runtimeLogger.js";
import { scape } from "../decorators/scape.js";
export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (!element) {
            throw new Error(`Nenhum elemento encontrado com o seletor "${selector}"`);
        }
        this.element = element;
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}
__decorate([
    runtimeLogger(true),
    inspect(),
    scape()
], View.prototype, "update", null);
