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
document.getElementById("kontakt-formular").addEventListener("submit", function(e) {
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