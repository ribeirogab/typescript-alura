import { Negotiation } from "../models/Negotiation.js";

export class NegotiationsRepository {
  private negotiations: Negotiation[] = [];

  public add(negotiation: Negotiation): void {
    this.negotiations.push(negotiation);
  }

  public list(): readonly Negotiation[] {
    return this.negotiations;
  }
}
