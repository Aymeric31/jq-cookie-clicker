$(document).ready(function(){
	var i = 0;

	$(".cake").click(function(){
		$(".counter").html(i++);
		if (i == 21) {
			alert("Va travailler", "Ta pas autre chose à ****");
		};
	});
});
	//votre code