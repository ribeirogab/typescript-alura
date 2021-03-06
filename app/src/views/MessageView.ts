import { View } from "./View.js";

export class MessageView extends View<string> {
  protected template(message: string): string {
    return `<p class="alert alert-info">${message}</p>`;
  }
}
