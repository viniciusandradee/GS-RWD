function validar(){

    var cpf = document.frmLoginMot.txtCPF;
    var senha = document.frmLoginMot.pwdPass;
    var erro = document.getElementById("erro");
  
    if(cpf.value == ""){
      cpf.style.border = "1px solid";
      cpf.style.borderColor = "red";
    } 
    if(senha.value == ""){
        senha.style.border = "1px solid";
        senha.style.borderColor = "red";
    } 
    if(senha.value != "123" || cpf.value != "123"){
      erro.innerHTML = "CPF e/ou senha incorreto(s)";
      erro.style.fontSize = "20px";
  
      return false;
    } else if(cpf.value == "123" && senha.value == "123"){
      return true;
    }
  }