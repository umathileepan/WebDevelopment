$("h1").css("color","red");
$("h1").text("Great Day!");
$("h2").text("Fun day too!");
$("h2").addClass("funday");
$("h1").click(function() {$("h1").css("color", "purple")});

$("button").click(function(){$("h2").removeClass()});

$("input").keypress(function(event){$("p").text([event.key]).css("color","white")});
$("h1").on("mouseover", function(){$("h1".css("color","purple"))});