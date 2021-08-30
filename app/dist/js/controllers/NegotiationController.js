var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { runtimeLogger } from "../decorators/runtimeLogger.js";
import { Negotiation } from "../models/Negotiation.js";
import { NegotiationsRepository } from "../repositories/NegotiationsRepository.js";
import { MessageView } from "../views/MessageView.js";
import { NegotiationsView } from "../views/NegotiationsView.js";
export class NegotiationController {
    constructor() {
        this.negotiationsRepository = new NegotiationsRepository();
        this.negotiationsView = new NegotiationsView("#negociacoesView");
        this.messageView = new MessageView("#mensagemView");
        const inputDate = document.querySelector("#data");
        const inputAmount = document.querySelector("#quantidade");
        const inputValue = document.querySelector("#valor");
        if (!inputDate || !inputAmount || !inputValue) {
            throw new Error(`
        ${!inputDate ? 'Nenhum elemento encontrado com o seletor "#data"\n' : ""}
        ${!inputAmount
                ? 'Nenhum elemento encontrado com o seletor "#quantidade"\n'
                : ""}
        ${!inputValue ? 'Nenhum elemento encontrado com o seletor "#valor"' : ""}
      `);
        }
        this.inputDate = inputDate;
        this.inputAmount = inputAmount;
        this.inputValue = inputValue;
        this.inputDate.value = new Date()
            .toLocaleDateString("pt-BR")
            .split("/")
            .reverse()
            .join("-");
        this.negotiationsView.update(this.negotiationsRepository);
    }
    updateViews() {
        this.negotiationsView.update(this.negotiationsRepository);
        this.messageView.update("Negociação adicionada com sucesso!");
    }
    cleanForm() {
        this.inputDate.value = "";
        this.inputAmount.value = "";
        this.inputValue.value = "";
    }
    add() {
        try {
            const negotiation = Negotiation.create(this.inputDate.value, this.inputAmount.value, this.inputValue.value);
            this.negotiationsRepository.add(negotiation);
            this.cleanForm();
            this.updateViews();
        }
        catch (error) {
            this.messageView.update(error.message);
        }
    }
}
__decorate([
    runtimeLogger()
], NegotiationController.prototype, "add", null);
