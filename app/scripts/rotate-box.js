; var isSet = 0;
 $(".btn").click(function() {
      var target = $(this);
      if (target.attr("id") == "front") {
        $("#cube").css({transform: "rotateY(0deg)"});
      }
      else if (target.attr("id") == "back") {
          $("#cube").css({transform: "translateZ(-100px) rotateX(180deg)"});
      }
      else if (target.attr("id") == "top") {
        $("#cube").css({transform: "translateZ(-100px) rotateX(90deg)"});
      }
      else if (target.attr("id") == "bottom") {
        $("#cube").css({transform: "translateZ(-100px) rotateX(-90deg)"});
      }
      else if (target.attr("id") == "right") {
        $("#cube").css({transform: "translateZ(-100px) rotateY(-90deg)"});
      }
      else if (target.attr("id") == "left") {
        $("#cube").css({transform: "translateZ(-100px) rotateY(90deg)"});
      }
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