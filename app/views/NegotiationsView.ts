import { NegotiationsRepository } from "../repositories/NegotiationsRepository.js";

export class NegotiationsView {
  private element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  public template(negotiationsRepository: NegotiationsRepository): string {
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

  public update(negotiationsRepository: NegotiationsRepository): void {
    this.element.innerHTML = this.template(negotiationsRepository);
  }
}
