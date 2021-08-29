import { View } from "./View.js";
export class NegotiationsView extends View {
    template(negotiationsRepository) {
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
