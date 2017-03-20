; var isSet = 0;
$(document).ready(function(){
  $(".btn").click(function() {
    $(this).each(function(){
      if ($(this).hasClass("show-front")) {
        $("#cube").css({transform: "rotateY(0deg)"});
      }
      else if ($(this).hasClass("show-back")) {
          $("#cube").css({transform: "translateZ(-100px) rotateX(180deg)"});
      }
      else if ($(this).hasClass("show-top")) {
        $("#cube").css({transform: "translateZ(-100px) rotateX(90deg)"});
      }
      else if ($(this).hasClass("show-bottom")) {
        $("#cube").css({transform: "translateZ(-100px) rotateX(-90deg)"});
      }
      else if ($(this).hasClass("show-right")) {
        $("#cube").css({transform: "translateZ(-100px) rotateY(-90deg)"});
      }
      else if ($(this).hasClass("show-left")) {
        $("#cube").css({transform: "translateZ(-100px) rotateY(90deg)"});
      }
    });
 });
 $(".btn").click(function() {
    $(this).each(function(){
      if ($(this).hasClass("show-front")) {
        $("#cube").css({transform: "rotateY(0deg)"});
      }
      else if ($(this).hasClass("show-back")) {
          $("#cube").css({transform: "translateZ(-100px) rotateX(180deg)"});
      }
      else if ($(this).hasClass("show-top")) {
        $("#cube").css({transform: "translateZ(-100px) rotateX(90deg)"});
      }
      else if ($(this).hasClass("show-bottom")) {
        $("#cube").css({transform: "translateZ(-100px) rotateX(-90deg)"});
      }
      else if ($(this).hasClass("show-right")) {
        $("#cube").css({transform: "translateZ(-100px) rotateY(-90deg)"});
      }
      else if ($(this).hasClass("show-left")) {
        $("#cube").css({transform: "translateZ(-100px) rotateY(90deg)"});
      }
    });
 });
  $("#toggle-backface-visibility").click(function() {
        if (isSet) {
            $("figure").each(function(){
            $(this).css({opacity: 0.7});
          });
          isSet = 0;
        }
        else {
            $("figure").each(function(){
              $(this).css({opacity: 1});
              isSet = 1;
          });
        }
    });
});