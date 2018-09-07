$(document).ready(function() {
     console.log("oomaaaaaaaaad")

  $("#owl-demo").owlCarousel({
      rtl:true,
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      // singleItem:true,
      autoPlay: true,
      autoPlay: 3000,

      // "singleItem:true" is a shortcut for:
       items : 6,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false


  });

});

