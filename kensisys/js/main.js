$(document).ready(function(){

$(function(){
$(".slider .images li").hide();
$(".slider .images li:first").show();
$(".slider .btn1 button:first").addClass("active");
$(".slider .btn1 button").click(function(){
	var indis=$(this).index();
$(".slider .btn1 button").removeClass("active");
	$("this").addClass("active");
	$(".slider .images li").hide();
	$(".slider .images li:eq("+indis+")").fadeIn("slow");		
})
})

$(".slider .images li p")
  .animate({height: "hide"}, 1000)
  .text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. provident  placeat.")
  .animate({height: "show"}, 1000);


});


