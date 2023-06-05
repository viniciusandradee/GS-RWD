function validar(){

  var motivo = document.frmSuporte.txtMotivo;
  var nome = document.frmSuporte.txtNome;
  var cpf = document.frmSuporte.txtCPF;
  var email = document.frmSuporte.txtEmail;
  var telefone = document.frmSuporte.txtTel;
  var data = document.frmSuporte.txtDate;
  var celular = document.frmSuporte.txtCel;
  var estado = document.frmSuporte.txtEstado;
  var cidade = document.frmSuporte.txtCidade;
  var mensagem = document.frmSuporte.txtMensagem;

  var lista = [motivo, nome, cpf, email, telefone, data, celular, estado, cidade, mensagem]
  
  var feedback = document.getElementById("feedback");

  for (var contador = 0; contador < 10; contador++){
    if (lista[contador].value == ""){
        lista[contador].style.border = "1px solid";
        lista[contador].style.borderColor = "red";
    }else{
        lista[contador]
        lista[contador].style.border = "none";
    }
  }

  for (var contador = 0; contador < 10; contador++){
    if (lista[contador].value == ""){
        feedback.innerHTML = "Preencha os campos obrigatórios.";
        feedback.style.fontSize = "20px";
        return false;
    }
  }

  alert("Sua mensagem foi enviada com sucesso!")
  return true;

}