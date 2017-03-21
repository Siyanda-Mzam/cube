;
var isSet = 0;
$(".btn").click(function() {
    var target = $(this);
    if (target.attr("id") == "front") {
        $("#cube").css({ transform: "rotateY(0deg)" });
    } else if (target.attr("id") == "back") {
        $("#cube").css({ transform: "translateZ(-100px) rotateX(180deg)" });
    } else if (target.attr("id") == "top") {
        $("#cube").css({ transform: "translateZ(-100px) rotateX(90deg)" });
    } else if (target.attr("id") == "bottom") {
        $("#cube").css({ transform: "translateZ(-100px) rotateX(-90deg)" });
    } else if (target.attr("id") == "right") {
        $("#cube").css({ transform: "translateZ(-100px) rotateY(-90deg)" });
    } else if (target.attr("id") == "left") {
        $("#cube").css({ transform: "translateZ(-100px) rotateY(90deg)" });
    }
});
$("#toggle-backface-visibility").click(function() {
    if (isSet) {
        $("figure").each(function() {
            $(this).css({ opacity: 0.7 });
        });
        isSet = 0;
    } else {
        $("figure").each(function() {
            $(this).css({ opacity: 1 });
            isSet = 1;
        });
    }
});

// Rotate on mouse down
$(document).ready(function() {
    function rotateOnMouse(e, target) {
        var offset = target.offset();
        var center_x = (offset.left) + ($(target).width() / 2);
        var center_y = (offset.top) + ($(target).height() / 2);
        var mouse_x = e.pageX;
        var mouse_y = e.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = -((radians * (180 / Math.PI) * -1) + 100);
        $(target).css('-moz-transform', 'translateZ(-100px) rotate(' + degree + 'deg)');
        $(target).css('-webkit-transform', 'translateZ(-100px) rotateX(' + degree + 'deg)');
        $(target).css('-o-transform', 'translateZ(-100px) rotate(' + degree + 'deg)');
        $(target).css('-ms-transform', 'translateZ(-100px) rotate(' + degree + 'deg)');
    }

    $('.container #cube').mousedown(function(e) {
        e.preventDefault(); // prevents the dragging of the cube
        $(document).bind('mousemove', function(e2) {
            rotateOnMouse(e2, $('.container #cube'));
        });
    });

    $(document).mouseup(function(e) {
        $(document).unbind('mousemove');
    });
});