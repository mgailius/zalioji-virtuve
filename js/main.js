$(document).ready(function() {

  swal({
    title: "Verslas parduodamas!",
    text: "Daugiau info +37068649751",
    button: "Uždaryti"
  });

	var expand = $("#more");
	expand[0].onclick = function(){

		$("img.arrow").toggleClass("arrow-up");
	};

	$(window).scroll(function() {
  	if($(document).scrollTop() > 150) {
    	$('#nav').addClass('nav-opaque');
    }
    else {
    $('#nav').removeClass('nav-opaque');
    }
  });

	$(".more-about").click(function(){

		$(".about-content p:gt(0)").slideToggle("slow", function(){
			var visible = $(".about-content p:gt(0)").is(":visible");
		});

	});

  $(".mobile-meniu").on("click", function() {
  var el = $(this);
  if (el.text() == el.data("text-swap")) {
    el.text(el.data("text-original"));
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text-swap"));
  }
});

  $('.mobile-meniu').click(function() {
    $('.mobile-meniu-img').toggleClass('mobile-meniu-open');
    $('.mobile-meniu').toggleClass('mobile-meniu-close');  
  });

	$('.pagrindiniai').click(function() {
		$('.pagrindiniai').toggleClass('meniu-selected');
		$('.gerimai').removeClass('meniu-selected');
		$('.desertai').removeClass('meniu-selected');
    $('.uzkandziai').removeClass('meniu-selected');
    $('.meniu-pagr').toggleClass('meniu-dif');
		$('.meniu-ger').addClass('meniu-dif');
		$('.meniu-des').addClass('meniu-dif');
    $('.meniu-uzk').addClass('meniu-dif');
  });

	$('.gerimai').click(function() {
		$('.gerimai').toggleClass('meniu-selected');
		$('.pagrindiniai').removeClass('meniu-selected');
	  $('.desertai').removeClass('meniu-selected');
    $('.uzkandziai').removeClass('meniu-selected');
    $('.meniu-ger').toggleClass('meniu-dif');
		$('.meniu-pagr').addClass('meniu-dif');
		$('.meniu-des').addClass('meniu-dif');
    $('.meniu-uzk').addClass('meniu-dif');
  });

	$('.desertai').click(function() {
		$('.desertai').toggleClass('meniu-selected');
		$('.pagrindiniai').removeClass('meniu-selected');
		$('.gerimai').removeClass('meniu-selected');
    $('.uzkandziai').removeClass('meniu-selected');
    $('.meniu-des').toggleClass('meniu-dif');
		$('.meniu-pagr').addClass('meniu-dif');
		$('.meniu-ger').addClass('meniu-dif');
    $('.meniu-uzk').addClass('meniu-dif');
	});

  $('.uzkandziai').click(function() {
    $('.uzkandziai').toggleClass('meniu-selected');
    $('.gerimai').removeClass('meniu-selected');
    $('.desertai').removeClass('meniu-selected');
    $('.pagrindiniai').removeClass('meniu-selected');
    $('.meniu-uzk').toggleClass('meniu-dif');
    $('.meniu-ger').addClass('meniu-dif');
    $('.meniu-des').addClass('meniu-dif');
    $('.meniu-pagr').addClass('meniu-dif');
  });

	$('.balloon').click(function() {
		$('.balloon').toggleClass('event-selected');
		$('.knife').removeClass('event-selected');
		$('.presentation').removeClass('event-selected');
    $('.birthdays').toggleClass('events-dif');
		$('.lessons').addClass('events-dif');
		$('.presentations').addClass('events-dif');
	});

	$('.knife').click(function() {
		$('.knife').toggleClass('event-selected');
		$('.balloon').removeClass('event-selected');
		$('.presentation').removeClass('event-selected');
    $('.lessons').toggleClass('events-dif');
		$('.birthdays').addClass('events-dif');
		$('.presentations').addClass('events-dif');
    $('.event').addClass('event-extended')
	});

	$('.presentation').click(function() {
		$('.presentation').toggleClass('event-selected');
	  $('.balloon').removeClass('event-selected');
		$('.knife').removeClass('event-selected');
    $('.presentations').toggleClass('events-dif');
		$('.birthdays').addClass('events-dif');
		$('.lessons').addClass('events-dif');
  });

	$('.product-more-x1').click(function() {
	  $('.equipment-expanded').toggleClass('equipment-dif');
    $('.product-x2').addClass('equipment-dif');
    $('.product-x3').addClass('equipment-dif');
  });

  $('.product-more-x2').click(function() {
    $('.equipment-expanded').toggleClass('equipment-dif');
    $('.product-x1').addClass('equipment-dif');
    $('.product-x3').addClass('equipment-dif');
  });

  $('.product-more-x3').click(function() {
    $('.equipment-expanded').toggleClass('equipment-dif');
    $('.product-x2').addClass('equipment-dif');
    $('.product-x1').addClass('equipment-dif');
  });

	$('.x-icon').click(function() {
    $('.equipment-expanded').addClass('equipment-dif');
		$('.birthdays').addClass('events-dif');
		$('.balloon').removeClass('event-selected');
		$('.lessons').addClass('events-dif');
		$('.knife').removeClass('event-selected');
		$('.presentations').addClass('events-dif');
		$('.presentation').removeClass('event-selected');
		var video = $("#event-video").attr("src");
	  $("#event-video").attr("src","");
		$("#event-video").attr("src",video);
    $('.event').removeClass('event-extended');
	});

	$(".meniu-from").click(function() {
    $("nav ul").toggleClass("mobile-ul");
    $("#burger-container").toggleClass("open-burger");
    if ($(window).width() < 700){
      $('html, body').animate({
        scrollTop: $("#meniu-to").offset().top - 50
      }, 1000);
    }
    else {
      $('html, body').animate({
        scrollTop: $("#meniu-to").offset().top - 54.5
      }, 1000);
    }
	});

	$(".contacts-from").click(function() {
    $("nav ul").toggleClass("mobile-ul");
    $("#burger-container").toggleClass("open-burger");
    if ($(window).width() < 700){
      $('html, body').animate({
        scrollTop: $("#contacts-to").offset().top - 50
      }, 1000);
    }
    else {
      $('html, body').animate({
        scrollTop: $("#contacts-to").offset().top - 54.5
      }, 1000);
    }
	});

	$(".events-from").click(function() {
    $("nav ul").toggleClass("mobile-ul");
    $("#burger-container").toggleClass("open-burger");
    if ($(window).width() < 700){
      $('html, body').animate({
        scrollTop: $("#events-to").offset().top - 50
      }, 1000);
    }
    else {
      $('html, body').animate({
        scrollTop: $("#events-to").offset().top - 54.5
      }, 1000);
    };
	});

	$(".equipment-from").click(function() {
    $("nav ul").toggleClass("mobile-ul");
    $("#burger-container").toggleClass("open-burger");
    if ($(window).width() < 700){
      $('html, body').animate({
        scrollTop: $("#equipment-to").offset().top - 50
      }, 1000);
    }
    else {
      $('html, body').animate({
        scrollTop: $("#equipment-to").offset().top - 54.5
      }, 1000);
    }
	});

	$(".media-from").click(function() {
    $("nav ul").toggleClass("mobile-ul");
    $("#burger-container").toggleClass("open-burger");
    if ($(window).width() < 700){
      $('html, body').animate({
        scrollTop: $("#media-to").offset().top - 50
      }, 1000);
    }
    else {
      $('html, body').animate({
        scrollTop: $("#media-to").offset().top - 54.5
      }, 1000);
    }
	});

  $("#burger-container").on('click', function(){
    $(this).toggleClass("open-burger");
    $("nav ul").toggleClass("mobile-ul");
    $(".mobnav").toggleClass("mobnav-open");
  });

});
