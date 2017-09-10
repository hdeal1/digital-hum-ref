function addForms(){
	console.log("eyyyy");
	var number = 8;
	var container = document.getElementById("form_generation");

	for (i=0;i<number;i++){
		var input = document.createElement("input");
		container.appendChild(input);
		container.appendChild(document.createElement("br"));
	}
}