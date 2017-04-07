console.log("laba");

$(document).ready(function(){



    $('.fa-bars').click(function(){
        $(".w3-display-container.w3-container > img").slideToggle(2000);
    });

    $('img').click(function() {
       $('img').css("position","absolute");
       $('img').css("width","20%");
       $('img').animate(  {
            right: '50px',
            top: '50px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
          },5000);
    });



});
