export default function outsideClick(element, callback) {
  const getHtml = document.documentElement;
  const atributo = "data-outsideClick";
  const events = ["touchstart", "click"];

  // function que faz toda a verificação
  // se o elemento pai contiver o click
  // não ocorre a ação somente se o evento
  // de click for outside
  function initOffInteration(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(atributo, "");
      events.forEach((evento) => {
        getHtml.removeEventListener(evento, initOffInteration);
      });
      callback();
    }
  }

  // add event de click ho html
  // verificando se possui um atributo
  // ou não para não adicionar vários
  // eventos ao html e somente um
  if (!element.hasAttribute(atributo)) {
    element.setAttribute(atributo, "");
    events.forEach((evento) => {
      getHtml.addEventListener(evento, initOffInteration);
    });
  }
}
