import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(navBox, button, list, classe) {
    this.navBox = document.querySelector(navBox);
    this.button = document.querySelector(button);
    this.list = document.querySelector(list);
    this.classe = classe;
    this.events = ["touchstart", "click"];

    this.onMenu = this.onMenu.bind(this);
  }

  // method que add a classe de ativo
  // e também ativa callback que faz
  // toda a verificação de click outside
  onMenu(evento) {
    evento.preventDefault();
    this.button.classList.toggle(this.classe);
    this.list.classList.toggle(this.classe);
    outsideClick(this.navBox, () => {
      this.button.classList.remove(this.classe);
      this.list.classList.remove(this.classe);
    });
  }

  // add events
  addEventButton() {
    this.events.forEach((evento) => {
      this.button.addEventListener(evento, this.onMenu);
    });
  }

  init() {
    if (this.navBox && this.button && this.list) {
      this.addEventButton();
    }
    return this;
  }
}
