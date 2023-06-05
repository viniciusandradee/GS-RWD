function validar(){

  var cnpj = document.frmLoginEmp.txtCNPJ;
  var senha = document.frmLoginEmp.pwdPass;
  var erro = document.getElementById("erro");

  if(cnpj.value == ""){
    cnpj.style.border = "1px solid";
    cnpj.style.borderColor = "red";
  } 
  if(senha.value == ""){
      senha.style.border = "1px solid";
      senha.style.borderColor = "red";
  } 
  if(senha.value != "123" || cnpj.value != "123"){
    erro.innerHTML = "CNPJ e/ou senha incorreto(s)";
    erro.style.fontSize = "20px";

    return false;
  } else if(cnpj.value == "123" && senha.value == "123"){
    return true;
  }
}