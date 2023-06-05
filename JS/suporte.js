function validar(){

  var motivo = document.frmSuporte.txtMotivo;
  var nome = document.frmSuporte.txtNome;
  var email = document.frmSuporte.txtEmail;
  var mensagem = document.frmSuporte.txtMensagem;

  var lista = [motivo, nome, email, mensagem]
  
  var feedback = document.getElementById("feedback");

  for (var contador = 0; contador < 4; contador++){
    if (lista[contador].value == ""){
        lista[contador].style.border = "1px solid";
        lista[contador].style.borderColor = "red";
    }else{
        lista[contador]
        lista[contador].style.border = "none";
    }
  }

  for (var contador = 0; contador < 4; contador++){
    if (lista[contador].value == ""){
        feedback.innerHTML = "Preencha os campos obrigatórios.";
        feedback.style.fontSize = "20px";
        return false;
    }
  }

  alert("Sua mensagem foi enviada com sucesso!")
  return true;

}