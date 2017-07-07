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




});








// var mycls = $(".cls");

// mycls.find(".item").click(function() {
//   mycls.find(".item").removeClass("active");
//   $(this).addClass("active");
// });