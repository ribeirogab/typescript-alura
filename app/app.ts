import { NegotiationController } from "./controllers/NegotiationController.js";

const negotiationController = new NegotiationController();

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  negotiationController.add();
});
