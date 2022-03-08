import ShowPhoto from "./modules/show-photos.js";
import MenuMobile from "./modules/menu-mobile.js";

const showPhoto = new ShowPhoto(
  '[data-photo="ampliada"]',
  '[data-photo="min"]',
  "active-photo"
);
showPhoto.init();

const menuMobile = new MenuMobile(
  "[data-menu]",
  '[data-menu="button"]',
  '[data-menu="list"]',
  "active-menu"
);
menuMobile.init();
