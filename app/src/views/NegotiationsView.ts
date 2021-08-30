import { View } from "./View.js";
import { NegotiationsRepository } from "../repositories/NegotiationsRepository.js";
import { scape } from "../decorators/scape.js";

export class NegotiationsView extends View<NegotiationsRepository> {
  @scape()
  protected template(negotiationsRepository: NegotiationsRepository): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${negotiationsRepository.list().map((negotiation) => `
            <tr>
              <td>${negotiation.date.toLocaleDateString('pt-BR')}</td>
              <td>${negotiation.amount}</td>
              <td>${negotiation.value}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
}
