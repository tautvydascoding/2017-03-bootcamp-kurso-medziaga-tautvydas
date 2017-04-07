console.log("laba");

$(document).ready(function(){



    $('.fa-bars').click(function(){
        $(".w3-display-container.w3-container > img").slideToggle(2000);
    });


    $('img').click(function() { 
      // nusikopijuojame paspausta paveiksliuko Obj
      // that - yra paveikslelio objekto kopija
      var paveikslelioObjKopija = this.cloneNode(true);
      var imgParent = this.parentNode;

      // i HTML idedame savo HTML elementa (paveikslelioObjKopija)
        imgParent.insertBefore(paveikslelioObjKopija,this);

       $(paveikslelioObjKopija).css("position","absolute");
       $(paveikslelioObjKopija).css("width","20%");
       $(paveikslelioObjKopija).animate(  {
            right: '50px',
            top: '50px',
            opacity: '0',
            height: '40px',
            width: '40px'
          }, 2000);

    });



});
