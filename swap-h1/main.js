jQuery(document).ready(function(){

 console.log("jquery cargado")

	jQuery(".titleWrapper").addClass("ready");

jQuery(".titleWrapper h1").each(function(){
	var fullString;
	var characters = jQuery(this).text().split("");

	$this = jQuery(this);
	$this.empty();
	$.each(characters, function (i, elemento) {
		if(elemento == " "){elemento = "&nbsp;"};
    $this.append("<span>" + elemento + "</span");
	});

});

});
