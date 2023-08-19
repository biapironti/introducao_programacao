		
function mensagemNota() {
	var nota = document.getElementById("notaAluno1").value

	if(nota>=90){
		alert("Nota A")
	} else {
		if(nota>=80 && nota<=89) {
			alert("Nota B")
		} else {
			if(nota>=70 && nota<=79) {
				alert("Nota C")
			} else { 
				if(nota>=60 && nota<=69) {
					alert("Nota D")
				} else { 
					if(nota<60) {
						alert("Nota E")
					}
				}
			}
		}
	}

	if(!nota) {
		alert("Nota não informada!")
	}
}