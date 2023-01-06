$(document).ready(function() {
    // Toggle menu on click
    $("#menu-toggler").click(function() {
      toggleBodyClass("menu-active");
    });
  
    function toggleBodyClass(className) {
      document.body.classList.toggle(className);
    }
  
   });


   var checkClass = document.getElementsByClassName('menu-active');
   if (checkClass.length > 0) {
      
    document.getElementById("link-über-mich").href="/index.html#über-mich";
   }
  
   