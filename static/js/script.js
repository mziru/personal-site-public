var changeTab;

function menuFunction() {
  var toggleMenu = document.getElementById("hamburger-tabs");
  var barsIcon = document.getElementById("bars-icon");
  var xIcon = document.getElementById("x-icon");
  if (toggleMenu.style.display === "block") {
    toggleMenu.style.display = "none";
    barsIcon.style.display = "block";
    xIcon.style.display = "none";
  } else {
    toggleMenu.style.display = "block";
    barsIcon.style.display = "none";
    xIcon.style.display = "block";

  }
}

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
    };

window.addEventListener("DOMContentLoaded", () => {
  if(location.hash) {
    var tabName = location.hash.split('_')[0];
    document.getElementById(tabName.substring(1) + '-tab').click();
    document.getElementById(tabName.substring(1) + '-tab-hamburger').click();
    window.location = location.hash;
  }
}, false);

(function(){

  HTMLElement.prototype.setupClassCache = function() {
    this.classCache = {};
    var classes = this.className.split(" ");
    for ( var i = 0; i < classes.length; i++ ){
      this.classCache[ classes[i] ] = true;
    }
    return this;
  }

  HTMLElement.prototype.removeClass = function(klass) {
    if ( !this.classCache ) this.setupClassCache();
    if ( this.className === '' || !this.classCache[klass] ) return;
    var klassName = "";
    delete this.classCache[klass];
    for ( var i in this.classCache ) klassName += i;
    this.className = klassName;
  }

  HTMLElement.prototype.addClass = function(klass) {
    if ( !this.classCache ) this.setupClassCache();
    if( this.classCache[klass] ) return;
    var klassName = "";
    this.classCache[klass] = true;
    for ( var i in this.classCache ) klassName += i+' ';
    this.className = klassName;
  }

  var nav            = document.getElementById("top-nav").setupClassCache();
  var scrollPosition = document.getElementsByTagName("header")[0].offsetHeight;
  var tabs           = document.getElementsByClassName("tab-section");

  changeTab = function(el) {
    for ( var i = 0; i < tabs.length; i++ ) {
      tabs[i].style.display = (tabs[i].id === "tab-" + el.value) ? "block" : "none";
    }
    if (el.id.includes("hamburger")) {
      document.getElementById(el.id.replace("-hamburger", "")).click();
    }
    else {
      document.getElementById(el.id + "-hamburger").click();
    }
    if ( scrollY >= scrollPosition) {
      scrollTo(0, scrollPosition)}
  }

  document.onscroll = function(){
    if ( Math.ceil(window.scrollY) >= scrollPosition ) nav.addClass('fixed');
    else nav.removeClass('fixed');
  };


let clickCounter = 0
function removeHash() {
  ++clickCounter;
  if (clickCounter === 4) {
    history.replaceState("", document.title, window.location.pathname);
    window.removeEventListener("click", removeHash)
  }
}

window.addEventListener("click", removeHash)


})();