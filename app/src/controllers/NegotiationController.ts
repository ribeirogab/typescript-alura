import { runtimeLogger } from "../decorators/runtimeLogger.js";
import { Negotiation } from "../models/Negotiation.js";
import { NegotiationsRepository } from "../repositories/NegotiationsRepository.js";
import { MessageView } from "../views/MessageView.js";
import { NegotiationsView } from "../views/NegotiationsView.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;

  private negotiationsRepository = new NegotiationsRepository();
  private negotiationsView = new NegotiationsView("#negociacoesView");
  private messageView = new MessageView("#mensagemView");

  constructor() {
    const inputDate = document.querySelector("#data");
    const inputAmount = document.querySelector("#quantidade");
    const inputValue = document.querySelector("#valor");

    if (!inputDate || !inputAmount || !inputValue) {
      throw new Error(`
        ${
          !inputDate ? 'Nenhum elemento encontrado com o seletor "#data"\n' : ""
        }
        ${
          !inputAmount
            ? 'Nenhum elemento encontrado com o seletor "#quantidade"\n'
            : ""
        }
        ${
          !inputValue ? 'Nenhum elemento encontrado com o seletor "#valor"' : ""
        }
      `);
    }

    this.inputDate = inputDate as HTMLInputElement;
    this.inputAmount = inputAmount as HTMLInputElement;
    this.inputValue = inputValue as HTMLInputElement;

    this.inputDate.value = new Date()
      .toLocaleDateString("pt-BR")
      .split("/")
      .reverse()
      .join("-");

    this.negotiationsView.update(this.negotiationsRepository);
  }

  private updateViews() {
    this.negotiationsView.update(this.negotiationsRepository);
    this.messageView.update("Negociação adicionada com sucesso!");
  }

  private cleanForm(): void {
    this.inputDate.value = "";
    this.inputAmount.value = "";
    this.inputValue.value = "";
  }

  @runtimeLogger()
  public add(): void {
    try {
      const negotiation = Negotiation.create(
        this.inputDate.value,
        this.inputAmount.value,
        this.inputValue.value
      );

      this.negotiationsRepository.add(negotiation);

      this.cleanForm();
      this.updateViews();
    } catch (error) {
      this.messageView.update(error.message);
    }
  }
}
