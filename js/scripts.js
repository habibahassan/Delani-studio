$(document).ready(function () {
    $(".click1design").click(function () {
        $("#part1").toggle();
        $(".hiddendesign").toggle();
    });
    $(".click2development").click(function () {
        $("#part2").toggle();
        $(".hiddendevelopment").toggle();
    });
    $(".click3productmanagement").click(function () {
        $("#part3").toggle();
        $(".hiddenproductmanagement").toggle();
    });
    $(".row4fashion").hover(function () {
        $(".project4").css({ "opacity": "0.2", "transition": "3s" });
        $("#work4").show();
    },
        function () {
            $(".project4").css("opacity", "1");
            $("#work4").hide();
        });
    $(".row3ontario").hover(function () {
        $(".project3").css({ "opacity": "0.2", "transition": "3s" });
        $("#work3").show();
    },
        function () {
            $(".project3").css("opacity", "1")
            $("#work3").hide();
        });
    $(".row2design").hover(function () {
        $(".project2").css({ "opacity": "0.2", "transition": "3s" });
        $("#work2").show();
    },
        function () {
            $(".project2").css("opacity", "1")
            $("#work2").hide();
        });
    $(".row1movies").hover(function () {
        $(".project1").css({ "opacity": "0.3", "transition": "3s" });
        $("#work1").show();
    },
        function () {
            $(".project1").css("opacity", "1")
            $("#work1").hide();
        });
    $(".row5portfolio").hover(function () {
        $(".project5").css({ "opacity": "0.3", "transition": "3s" });
        $("#work5").show();
    },
        function () {
            $(".project5").css("opacity", "1")
            $("#work5").hide();
        });
    $(".row6Calculator").hover(function () {
        $(".project6").css({ "opacity": "0.3", "transition": "3s" });
        $("#work6").show();
    },
        function () {
            $(".project6").css("opacity", "1")
            $("#work6").hide();
        });
    $(".row7logo").hover(function () {
        $(".project7").css({ "opacity": "0.3", "transition": "3s" });
        $("#work7").show();
    },
        function () {
            $(".project7").css("opacity", "1")
            $("#work7").hide();
        });
    $(".row8Restaurant").hover(function () {
        $(".project8").css({ "opacity": "0.3", "transition": "3s" });
        $("#work8").show();
    },
        function () {
            $(".project8").css("opacity", "1")
            $("#work8").hide();
        });
});
$('form#submitform').submit(function () {
    var name = $('#name').val();
    var email = $('#email').val();
    var text = $('#text').val();
    alert("Hey " + name + " we have received your information thank you for reaching us!");
});
