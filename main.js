(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var i=function(){function e(n,i,s){t(this,e),this.getPhotoAmpliada=document.querySelectorAll(n),this.getPhotoMin=document.querySelectorAll(i),this.preferClasse=s,this.events=["touchstart","click"]}return n(e,[{key:"onShowImgMax",value:function(t,e,n){var i=this;n.preventDefault(),this.getPhotoAmpliada.forEach((function(t){t.classList.remove(i.preferClasse)})),this.getPhotoAmpliada[e].classList.add(this.preferClasse),this.getPhotoMin.forEach((function(t){t.classList.remove(i.preferClasse)})),t.classList.add(this.preferClasse)}},{key:"addEventImgMin",value:function(){var t=this;this.events.forEach((function(e){t.getPhotoMin.forEach((function(n,i){n.addEventListener(e,(function(e){t.onShowImgMax(n,i,e)}))}))}))}},{key:"init",value:function(){return this.getPhotoAmpliada.length&&this.getPhotoMin.length&&(this.getPhotoAmpliada[0].classList.add(this.preferClasse),this.addEventImgMin()),this}}]),e}(),s=function(){function e(n,i,s,o){t(this,e),this.navBox=document.querySelector(n),this.button=document.querySelector(i),this.list=document.querySelector(s),this.classe=o,this.events=["touchstart","click"],this.onMenu=this.onMenu.bind(this)}return n(e,[{key:"onMenu",value:function(t){var e=this;t.preventDefault(),this.button.classList.toggle(this.classe),this.list.classList.toggle(this.classe),function(t,n){var i=document.documentElement,s="data-outsideClick",o=["touchstart","click"];function a(n){t.contains(n.target)||(t.removeAttribute(s,""),o.forEach((function(t){i.removeEventListener(t,a)})),e.button.classList.remove(e.classe),e.list.classList.remove(e.classe))}t.hasAttribute(s)||(t.setAttribute(s,""),o.forEach((function(t){i.addEventListener(t,a)})))}(this.navBox)}},{key:"addEventButton",value:function(){var t=this;this.events.forEach((function(e){t.button.addEventListener(e,t.onMenu)}))}},{key:"init",value:function(){return this.navBox&&this.button&&this.list&&this.addEventButton(),this}}]),e}();new i('[data-photo="ampliada"]','[data-photo="min"]',"active-photo").init(),new s("[data-menu]",'[data-menu="button"]','[data-menu="list"]',"active-menu").init()})();