import { NegotiationController } from "./controllers/NegotiationController.js";

const negotiationController = new NegotiationController();

const form = document.querySelector(".form");

if (!form) {
  throw new Error(
    "Não foi possível iniciar a aplicação, verifique se o `form` existe."
  );
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  negotiationController.add();
});
