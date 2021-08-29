import { View } from "./View.js";
export class MessageView extends View {
    template(message) {
        return `<p class="alert alert-info">${message}</p>`;
    }
}
