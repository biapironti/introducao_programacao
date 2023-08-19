
function pegarNota(){
	var nota = document.getElementById("notaAluno").value
	
	switch (true){
	case (nota>=90):
		console.log("Nota A")
		break;
	case (nota>=80 && nota<=89):
		console.log("Nota B")
		break;
	case (nota>=70 && nota<=79):
		console.log("Nota C")
		break;
	case (nota>=60 && notaA<=69):
		console.log("Nota D")
		break;
	case (nota<60):
		console.log("Nota E")
		break;
	default:
		console.log("Nota inválida")
	}

}

