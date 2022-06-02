// Function checks if the page is ready
$(document).ready(function(){

  // Use jQuery to build global header and footer
  $(function(){
    $("#header").load("header.html");
  });
  $(function(){
    $("#footer").load("footer.html");
  });
   // Hover effect for heading
  $("#video > div + div > h2").hover(function(){
    $(this).addClass("enlarge");
    $(this).addClass("color_blue");
  },
  function(){
    $(this).removeClass("enlarge");
    $(this).removeClass("color_blue");
  });
  // Click effect for heading
  $("#video > div + div > h2").click(function(){
    $("#video > div + div > p").slideToggle();
  });
  
});
