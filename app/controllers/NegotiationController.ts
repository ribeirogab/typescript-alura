import { Negotiation } from "../models/Negotiation.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputAmount = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");
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
    console.log(negotiation);
    this.cleanForm();
  }

  public cleanForm(): void {
    this.inputDate.value = "";
    this.inputAmount.value = "";
    this.inputValue.value = "";
  }
}
