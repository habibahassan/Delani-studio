$(document).ready(function () {
    $(".click1").click(function () {
        $("#part1").toggle();
        $(".hiddendesign").toggle();
    });
    $(".click2").click(function () {
        $("#part2").toggle();
        $(".hiddendevelopment").toggle();
    });
    $(".click3").click(function () {
        $("#part3").toggle();
        $(".hiddenproductmanagement").toggle();
    });
    $(".row4").hover(function () {
        $(".imge4").css({ "opacity": "0.2", "transition": "3s" });
        $("#work4").show();
    },
        function () {
            $(".imge4").css("opacity", "1");
            $("#work4").hide();
        });
    $(".row3").hover(function () {
        $(".imge3").css({ "opacity": "0.2", "transition": "3s" });
        $("#work3").show();
    },
        function () {
            $(".imge3").css("opacity", "1")
            $("#work3").hide();
        });
    $(".row2").hover(function () {
        $(".imge2").css({ "opacity": "0.2", "transition": "3s" });
        $("#work2").show();
    },
        function () {
            $(".imge2").css("opacity", "1")
            $("#work2").hide();
        });
    $(".row1").hover(function () {
        $(".imge1").css({ "opacity": "0.3", "transition": "3s" });
        $("#work1").show();
    },
        function () {
            $(".imge1").css("opacity", "1")
            $("#work1").hide();
        });
    $(".row5").hover(function () {
        $(".imge5").css({ "opacity": "0.3", "transition": "3s" });
        $("#work5").show();
    },
        function () {
            $(".imge5").css("opacity", "1")
            $("#work5").hide();
        });
    $(".row6").hover(function () {
        $(".imge6").css({ "opacity": "0.3", "transition": "3s" });
        $("#work6").show();
    },
        function () {
            $(".imge6").css("opacity", "1")
            $("#work6").hide();
        });
    $(".row7").hover(function () {
        $(".imge7").css({ "opacity": "0.3", "transition": "3s" });
        $("#work7").show();
    },
        function () {
            $(".imge7").css("opacity", "1")
            $("#work7").hide();
        });
    $(".row8").hover(function () {
        $(".imge8").css({ "opacity": "0.3", "transition": "3s" });
        $("#work8").show();
    },
        function () {
            $(".imge8").css("opacity", "1")
            $("#work8").hide();
        });
});
$('form#submitform').submit(function () {
    var name = $('#name').val();
    var email = $('#email').val();
    var text = $('#text').val();
    var url = "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?" + "apikey=df458b36b6"
    "id=98190a3419c9eb27281a8f3d59840865-us20 " 
    alert("Hey " + name + "We have received your information thank you for reaching us!");
});