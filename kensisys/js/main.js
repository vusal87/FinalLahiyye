$(document).ready(function(){


$(function(){
$(".slider .images li").hide();
$(".slider .images li:first").show();
$(".slider-buttons .item:first").addClass("active");
$(".slider-buttons .item").click(function(){
	var indis=$(this).index();
$(".slider-buttons .item").removeClass("active");
	$("this").addClass("active");
	$(".slider .images li").hide();
	$(".slider .images li:eq("+indis+")").fadeIn("slow");		
})
})

$(".slider .images li p")
  .animate({height: "hide"}, 1000)
  // .text("<h2>A HUHE SELECTION</h2>")
  .animate({height: "show"}, 1000);


var mycls = $(".slider-buttons");
  mycls.find(".item").click(function() {
  mycls.find(".item").removeClass("active");
  $(this).addClass("active");

});

$('#mycarousel').owlCarousel({
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
    $(".shekiller .text").mouseover(function(){
        $(this).css({"padding-top":"25px","transition":"all 0.5s"});
         });
        $(".shekiller .text").mouseout(function(){
        $(this).css("padding-top", "0px");
         });

// $("div .newArrrivals").mouseover(function(){
// 	// $(this).addClass("div .aktiv2");
// 	$(this).hide();
// 	// $(this).slideDown();
// 	$("div .aktiv2").css("display","inline-block").show();

// });

// $("div .aktiv2").mouseout(function(){
// 	$("div .aktiv2").css("display","inline-block").hide();
// 	// $("div .aktiv2").hide();
// 	$("div .newArrrivals").slideDown();
// 	$("div .newArrrivals").show(300);
// });



$('.whiteCarousel').owlCarousel({
    dots:false,
    nav:true,
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// $('.scroll').mouseover(function(){
// 	 $(this).children(".overlay").show(500);
// 	// $('.scroll .overlay').show(200);

// // $( 'scroll' ).mouseover(function() {
// //   $( this ).children(".overlay").animate( "slow", 1 );
// // });
// });
// $('.scroll').mouseout(function(){
// 	// $(this).hide();
// 	$('.scroll .overlay').hide();

// });

// $('.scroll').mouseover(function(){
// 	var nese = $('.overlay').width();
// 	var test = $('.overlay').height();
// 	$(this).children(".overlay").children(".borderTop").width(nese);
// 	if ($('.borderTop').width() == nese) {
// 		$(this).children(".overlay").children(".borderRight").height(test);
// 	}
// });

// $('.scroll').mouseout(function(){
// 	$(this).children(".overlay").children(".borderTop").hide();
	
// });

$('.scroll').mouseover(function(){
var nese = $('.overlay').width();
	$(this).children(".overlay").children(".borderTop").width(nese);
});

$('.scroll').mouseout(function(){
	$(this).children(".overlay").children(".borderTop").width(0);

})

$('.scroll').mouseover(function(){
var hundurluk = $('.overlay').height();
$(this).children('.overlay').children(".borderLeft").height(hundurluk).fadeIn().delay(100);

});


$('.scroll').mouseout(function(){
	$(this).children(".overlay").children(".borderLeft").height(0);
})


$('.scroll').mouseover(function(){
var nes= $('.overlay').width();
$(this).children('.overlay').children(".borderBottom").width(nes).delay(800);

});

$('.scroll').mouseout(function(){
	$(this).children(".overlay").children(".borderBottom").width(0);
})



$('.scroll').mouseover(function(){
var hundur= $('.overlay').height();
$(this).children('.overlay').children(".borderRight").height(hundur).delay(800);
});

$('.scroll').mouseout(function(){
	$(this).children(".overlay").children(".borderRight").height(0);

})





















});








// var mycls = $(".cls");

// mycls.find(".item").click(function() {
//   mycls.find(".item").removeClass("active");
//   $(this).addClass("active");
// });