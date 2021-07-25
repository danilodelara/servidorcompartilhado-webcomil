// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

//= require jquery2
//= require jquery_ujs


$(document).ready(function () {

var objSideNav =  $('.sidenav').sidenav({ onOpenEnd :  function(){ 
  console.log("CARREGOU");

      $('.sidenav .collapsible').collapsible({
      onOpenStart : function(e){
         var _id =  $(e).parent().find("a").attr("id") ;
         if( _id.valueOf() == "ddMenuProducts" ){
          console.log("ABRIUUUU");
          $('.sidenav').sidenav().close();
         }
      }
     });
    }
  });
    


  $(".dropdown-trigger").dropdown();
 
  //$('.carousel.carousel-slider').carousel({ fullWidth: true, indicators: false });

  $(".block-cards").find(".card , .card-action a").on("click", function (event) {
    event.preventDefault();

    console.log("CLICOU" , $(this).attr("data-target") , $(this).parent().find(".card-action a").attr("data-target") );

    var _activeItem = $(this).attr("data-target") == undefined ? $(this).parent().find(".card-action a").attr("data-target") : $(this).attr("data-target") ;
    if (_activeItem !== undefined) {

      $("#ddProductsMenu-filter").find("a").each(function (event) {
        var segment = $(this).attr("data-target");

        if (_activeItem == segment) {
          $("#ddProductsMenu-filter").find("a").removeClass("active");
          $(this).addClass("active");

          $(".ddProducts_display").find(".product-card").each(function () {
            var _block = $(this).attr("data-target");
            if (segment === "all" || _block === segment) {
              $(this).fadeIn("slow");
            } else if (_block != segment) {
              $(this).fadeOut("fast");
            }
          });

          $(".ddProductsContainer").fadeIn("500", function () {
            $("html, body").animate({ scrollTop: 0 }, "500");
          });
        }
      });
    }
  });


  $("#ddProductsMenu-filter").find("a").on("click", function (event) {
    event.preventDefault();

    var segment = $(this).attr("data-target");
    var _activeItem = $("#ddProductsMenu-filter").find("a.active").attr("data-target");

    if ($(this).attr("class") === "modal-close") {
      $(".ddProductsContainer").fadeOut("500").removeClass("display-flex");
      return false;
    }

    if (_activeItem != segment) {
      $("#ddProductsMenu-filter").find("a").removeClass("active").removeClass("display-flex");
      $(this).addClass("active").addClass("display-flex");
    }
    
    $(".ddProducts_display").find(".product-card").each(function () {
      var _block = $(this).attr("data-target");
      if (segment === "all" || _block === segment) {
        $(this).fadeIn("slow").addClass("display-flex");
      } else if (_block != segment) {
        $(this).fadeOut("fast");
      }
    });
    return false;
  });




  var openModalProposta = function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "500");

    $('.block-proposta-modal').fadeIn("slow", function () {
      $(".block-proposta-modal input[type=text]").first().focus();
      $('.block-proposta-modal').find(".modal-close").on("click", function () {
        $('.block-proposta-modal').fadeOut(1000);
        return false;
      });
    });
    
    return false;
  };

  $(".ma-floating-talkwus.ma-opened .ma-inside-link").on("click", function (event) {
    event.preventDefault();
    $(".ma-floating-talkwus.ma-opened .ma-inside-link").css("display", "none");
    $(".ma-floating-talkwus .ma-floating-content .talkw-us-links .email").on("click", openModalProposta);
    $(".ma-floating-talkwus.ma-opened .ma-floating-content").css("display", "flex").on('mouseleave', function () {
      $(this).css("display", "none");
      $(".ma-floating-talkwus.ma-opened .ma-inside-link").css("display", "flex");
    });
  })

  $('.link-proposta-modal').on("click", openModalProposta);

  $('#ddMenuProducts, .carousel-action-link').on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "500");
    $(".ddProductsContainer").fadeIn("500").addClass("display-flex");
  });
 

});