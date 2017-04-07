console.log("laba");

$(document).ready(function(){



    $('.fa-bars').click(function(){
        $(".w3-display-container.w3-container > img").slideToggle(2000);
    });


    $('img').click(function() {
      var that = this.cloneNode(true);
      var parent = this.parentNode;

        //  parent.appendChild(that);
        parent.insertBefore(that,this);

// console.log( image );
console.log(this.outerHTML);
console.log(typeof(this.outerHTML));
console.log(this.parentNode);
console.log(typeof(this.parentNode));

       $(that).css("position","absolute");
       $(that).css("width","20%");
       $(that).animate(  {
            right: '50px',
            top: '50px',
            opacity: '0',
            height: '40px',
            width: '40px'
          }, 2000);

    });



});
