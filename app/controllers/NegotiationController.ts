import { Negotiation } from "../models/Negotiation.js";
import { NegotiationsRepository } from "../repositories/NegotiationsRepository.js";
import { NegotiationsView } from "../views/NegotiationsView.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;

  private negotiationsRepository = new NegotiationsRepository();
  private negotiationsView = new NegotiationsView("#negociacoesView");

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputAmount = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");

    this.negotiationsView.update(this.negotiationsRepository);
  }

  public createNegotiation() {
    const date = new Date(this.inputDate.value.replace(/-/g, ","));
    const amount = parseInt(this.inputAmount.value);
    const value = Number(this.inputValue.value);

    const negotiation = new Negotiation(date, amount, value);

    return negotiation;
  }

  public add(): void {
    const negotiation = this.createNegotiation();

    this.negotiationsRepository.add(negotiation);
    this.negotiationsView.update(this.negotiationsRepository);

    this.cleanForm();
  }

  public cleanForm(): void {
    this.inputDate.value = "";
    this.inputAmount.value = "";
    this.inputValue.value = "";
  }
}
