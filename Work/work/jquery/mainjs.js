console.log("asdasdadasd");

$(document).ready(function(){



    $('.fa-bars').click(function(){
        $(".w3-display-container.w3-container > img").slideToggle(2000);
    });


    $('img').click(function() {
    	var that = this.cloneNode(true);
    	var parent = this.parentNode;
    	// var image = document.createElement("div");
    	// image.innerHTML = that;
    	// this.parentNode.appendChild(that);

        parent.insertBefore(that,this);
    // parent.appendChild(that);
// console.log(image.toString());
// console.log(this);
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
            height: '150px',
            width: '150px'
          },500);
    });


});


































// console.log("asiudhasdoa");

// $(document).ready(function() {

// 	$('fa-bars').click(function(){
// 		$("p").hide(1000);


// 	});

// 	function hideSidebar(){
// 		$("#mySidebar").hide();
// 	}
// 	$('#mySidebar').click(function(){
// 		$("img").toggle();

// 		});
// 	});