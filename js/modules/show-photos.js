export default class ShowPhoto {
  constructor(PhotoMax, PhotoMin, userClasse) {
    this.getPhotoAmpliada = document.querySelectorAll(PhotoMax);
    this.getPhotoMin = document.querySelectorAll(PhotoMin);
    this.preferClasse = userClasse;
    this.events = ["touchstart", "click"];
  }

  // method que add a classe de ativo
  // nas imagens maiores, de acordo com
  // o index da imagem menor, por isso, importante
  // a ordem das img maiores sejam a mesma das
  // menores para ocorrer a interação entre os index
  onShowImgMax(img, index, event) {
    event.preventDefault();
    // add a classe de ativo nas
    // photos maiores para seus estilos
    // e visibilidade
    this.getPhotoAmpliada.forEach((imgMax) => {
      imgMax.classList.remove(this.preferClasse);
    });
    this.getPhotoAmpliada[index].classList.add(this.preferClasse);
    // add a classe de ativo nas
    // photos menores para seus estilos
    this.getPhotoMin.forEach((imgMin) => {
      imgMin.classList.remove(this.preferClasse);
    });
    img.classList.add(this.preferClasse);
  }

  // add os eventos nas imagens menores
  addEventImgMin() {
    this.events.forEach((evento) => {
      this.getPhotoMin.forEach((img, index) => {
        img.addEventListener(evento, (event) => {
          this.onShowImgMax(img, index, event);
        });
      });
    });
  }

  // method que inicia toda a classe
  // já inicia a funcionalidade
  // colocando a classe de ativo no primeiro
  // item da array, para mostrar ao usuário a primeira
  // foto, sempre. Evitando que não apareça nada
  init() {
    if (this.getPhotoAmpliada.length && this.getPhotoMin.length) {
      this.getPhotoAmpliada[0].classList.add(this.preferClasse);
      this.addEventImgMin();
    }
    return this;
  }
}
