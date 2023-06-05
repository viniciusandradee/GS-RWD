function validar(){
    var razao = document.frmEmpc.txtRazao;
    var cnpj = document.frmEmpc.txtCNPJ;
    var fantasia = document.frmEmpc.txtFantasia;
    var segmento = document.frmEmpc.txtSegmento;
    var cep = document.frmEmpc.txtCEP;
    var rua = document.frmEmpc.txtRua;
    var cidade = document.frmEmpc.txtCidade;
    var estado = document.frmEmpc.txtEstado;
    var comp = document.frmEmpc.txtComp;
    var num = document.frmEmpc.txtNum;
    var senha = document.frmEmpc.pwdPass;

    var lista = [razao, cnpj, fantasia, segmento, cep, rua, cidade, estado, comp, num, pwdPass];

    var erro = document.getElementById("erro");
    
    
    for (var contador = 0; contador < 11; contador++){
        if (lista[contador].value == ""){
            lista[contador].style.border = "1px solid";
            lista[contador].style.borderColor = "red";
        }else{
            lista[contador]
            lista[contador].style.border = "none";
        }
    }

    for (var contador = 0; contador < 11; contador++){
        if (lista[contador].value == ""){
            erro.innerHTML = "Preencha os campos obrigatórios.";
            erro.style.fontSize = "20px";
            return false;
        }
    }
    alert("Dados salvos!")
    return true;


}