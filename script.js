window.addEventListener('load', function () {
  //paralax effekt
  var vojta = document.getElementsByClassName('vojta');
  new SimpleParallax(vojta, {
    scale: 1.5,
    delay: 1,
    orientation: 'left down',
    overflow: true
  });
  var langarmy = document.getElementsByClassName('langarmy');
  new SimpleParallax(langarmy, {
    scale: 1.1,
    delay: 1,
    orientation: 'left down',
    overflow: true
  });
  var herotext = document.getElementsByClassName('herotext');
  new SimpleParallax(herotext, {
    scale: 2,
    delay: 1,
    orientation: 'up',
    overflow: true
  });
});
// side bar
var zapnuty = false;
function menu() {
    var menubutton = document.getElementById("menubutton");
    var menu = document.getElementsByClassName("sidemenu")[0];
    if (zapnuty === false) {
        menubutton.style.transform = "rotateZ(-90deg)";
        menu.style.left = "0px";
        zapnuty = true
        return
    }
    if (zapnuty === true) {
        menubutton.style.transform = "rotateZ(0deg)";
        menu.style.left = "-250px";
        zapnuty = false
        return
   }
    
    
}

//Email send pres emailjs
document.getElementById("kontakt-formular").addEventListener("submit", function(e) {
  //nepreskocitelny alert vyskočí aby se nedali emaily spamovat a mezitim se vrati jestli to bylo odesláno uspěšně
    swal("Čekejte!", {
        buttons: false,
        icon: "info",
        timer: 3000,
      });
    e.preventDefault();
    emailjs.sendForm('service_bjk8cql', 'template_uioe2qa', this)
      .then(
        (response) => {
            swal({
                text: "Zpráva byla odeslaná!",
                icon: "success"
              });
        },
        (error) => {
            swal({
                text: "Chyba",
                icon: "error"
              });
        }
      );
  });