function validar(){
  var nome = document.frmMot.txtNome;
  var cpf = document.frmMot.txtCPF;
  var rg = document.frmMot.txtRG;
  var oe = document.frmMot.txtOE;
  var mei = document.frmMot.txtMEI;
  var cnh = document.frmMot.txtCNH;
  var km = document.frmMot.txtKM;
  var email = document.frmMot.txtEmail;
  var senha = document.frmMot.pwdSenha;
  var crlv = document.frmMot.txtCRLV;
  var modelo = document.frmMot.txtModelo;
  var placa = document.frmMot.txtPlaca;
  var ano = document.frmMot.txtAno;
  var cor = document.frmMot.txtCor;
  var marca = document.frmMot.txtMarca;
  var termometro = document.frmMot.txtTerm
  var cep = document.frmMot.txtCEP;
  var rua = document.frmMot.txtRua;
  var cidade = document.frmMot.txtCidade;
  var estado = document.frmMot.txtEstado;
  var comp = document.frmMot.txtComp;
  var num = document.frmMot.txtNum;

  var lista = [nome, cpf, rg, oe, mei, cnh, km, email, senha, crlv, modelo, placa, ano, cor, marca, termometro, cep, rua, cidade, estado, comp, num];

  var erro = document.getElementById("erro");
  
  
  for (var contador = 0; contador < 22; contador++){
      if (lista[contador].value == ""){
          lista[contador].style.border = "1px solid";
          lista[contador].style.borderColor = "red";
      }else{
          lista[contador]
          lista[contador].style.border = "none";
      }
  }

  for (var contador = 0; contador < 22; contador++){
      if (lista[contador].value == ""){
          erro.innerHTML = "Preencha os campos obrigatórios.";
          erro.style.fontSize = "20px";
          return false;
      }
  }
  alert("Dados salvos!")
  return true;


}