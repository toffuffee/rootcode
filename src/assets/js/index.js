(function(){
   var elem = $('.header-color');
   var doc = $(document);
   function scrolled() {
      var threshold = doc.scrollTop() > 760;
      elem.toggleClass('scrolled', threshold);
      }
   $(window).on({ scroll: scrolled });

   function animCircle() {
      let allCards = document.querySelectorAll(".circle-card");
      allCards.forEach(element => {
         if(element.style = "display: block;"){
            element.style = "display: none;";
         }
      });
   }
   
   document.querySelector(".analitic").addEventListener('mouseenter', function(){
      animCircle();
      document.querySelector(".analitic-card").style = "display: block;";
   });

   document.querySelector(".projecting").addEventListener('mouseenter', function(){
      animCircle();
      document.querySelector(".projecting-card").style = "display: block;";
   });

   document.querySelector(".design").addEventListener('mouseenter', function(){
      animCircle();
      document.querySelector(".design-card").style = "display: block;";
   });

   document.querySelector(".develop").addEventListener('mouseenter', function(){
      animCircle();
      document.querySelector(".develop-card").style = "display: block;";
   });

   document.querySelector(".test").addEventListener('mouseenter', function(){
      animCircle();
      document.querySelector(".test-card").style = "display: block;";
   });

   document.querySelector(".turnproject").addEventListener('mouseenter', function(){
      animCircle();
      document.querySelector(".turnproject-card").style = "display: block;";
   });

   document.querySelector(".support").addEventListener('mouseenter', function(){
      animCircle();
      document.querySelector(".support-card").style = "display: block;";
   });

   $(".menu-checkbox").on("click", function(){
      $(".menu").toggleClass("open-block");
      $(".header-color").toggleClass("close-block");
      $(".particles-js").toggleClass("close-block");
      $(".content").toggleClass("close-block");
      $(".footer").toggleClass("close-block");
    });

    $(".btn-in-menu").on("click", function() {
      if($(".menu").hasClass("open-block")){
         $(".menu").removeClass("open-block");
         $(".menu").addClass("close-block");
      }
      $(".contact").addClass("open-block");
    });

    $(".contact-checkbox").on("click", function(){
      $(".contact").toggleClass("open-block");
      $(".menu").toggleClass("close-block");
      $(".header-color").toggleClass("close-block");
      $(".particles-js").toggleClass("close-block");
      $(".content").toggleClass("close-block");
      $(".footer").toggleClass("close-block");
    });

    $(".btn-in-header").on("click", function(){
      $(".contact").toggleClass("open-block");
      $(".menu").toggleClass("close-block");
      $(".header-color").toggleClass("close-block");
      $(".particles-js").toggleClass("close-block");
      $(".content").toggleClass("close-block");
      $(".footer").toggleClass("close-block");
    });

    $(".btn-in-footer").on("click", function(){
      $(".contact").toggleClass("open-block");
      $(".menu").toggleClass("close-block");
      $(".header-color").toggleClass("close-block");
      $(".particles-js").toggleClass("close-block");
      $(".content").toggleClass("close-block");
      $(".footer").toggleClass("close-block");
    });

    $(".nav a").on("click", function () {
      $(".menu").toggleClass("open-block");
      $(".header-color").toggleClass("close-block");
      $(".particles-js").toggleClass("close-block");
      $(".content").toggleClass("close-block");
      $(".footer").toggleClass("close-block");

      let href = $(this).attr("href");
  
      $("html, body").animate({
          scrollTop: $(href).offset().top
      }, {
          duration: 370,   // по умолчанию «400»
          easing: "linear" // по умолчанию «swing»
      });
      return false;
  });

   $(".card1").mouseenter(function(){
      $(".artboard4").css('z-index','0');
      }).mouseleave(function(){
      $(".artboard4").css('z-index','0');
      });

   $(".card2").mouseenter(function(){
      $(".artboard5").css('z-index','0');
      }).mouseleave(function(){
      $(".artboard5").css('z-index','0');
      });

   $(".card3").mouseenter(function(){
      $(".artboard6").css('z-index','0');
      }).mouseleave(function(){
      $(".artboard6").css('z-index','0');
      });

   $(".card4").mouseenter(function(){
      $(".artboard4").css('z-index','1');
      }).mouseleave(function(){
      $(".artboard4").css('z-index','1');
      });

   $(".card5").mouseenter(function(){
      $(".artboard5").css('z-index','1');
      }).mouseleave(function(){
      $(".artboard5").css('z-index','1');
      }); 
   
   $(".card6").mouseenter(function(){
      $(".artboard6").css('z-index','1');
      }).mouseleave(function(){
      $(".artboard6").css('z-index','1');
      });    
})();
