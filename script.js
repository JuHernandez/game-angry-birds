$(".part-2").hide();
$(".part-3").hide();


$(".part-1").click(function() {
    $(".part-1").toggle();
    $(".part-2").show();

});

$(".part-2").click(function() {
    $(".part-2").hide();
    $(".part-3").show();
     $("h1").text("You pissed him off");
});