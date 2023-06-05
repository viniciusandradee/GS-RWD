function validar(){
    var tipo = document.frmRota.txtTipo;
    var descricao = document.frmRota.txtDesc;
    var condicao = document.frmRota.txtCondMin;
    var peso = document.frmRota.numPeso;
    var nome = document.frmRota.txtNome;
    var cpf = document.frmRota.txtCPF;
    var rg = document.frmRota.txtRG;
    var oe = document.frmRota.txtOE;
    var cep1 = document.frmRota.txtCEP1;
    var rua1 = document.frmRota.txtRua1;
    var cidade1 = document.frmRota.txtCidade1;
    var estado1 = document.frmRota.txtEstado1;
    var comp1 = document.frmRota.txtComp1;
    var num1 = document.frmRota.txtNum1;
    var cep2 = document.frmRota.txtCEP2;
    var rua2 = document.frmRota.txtRua2;
    var cidade2 = document.frmRota.txtCidade2;
    var estado2 = document.frmRota.txtEstado2;
    var comp2 = document.frmRota.txtComp2;
    var num2 = document.frmRota.txtNum2;

    var lista = [tipo, descricao, condicao, peso, nome, cpf, rg, oe, cep1, rua1, cidade1, estado1, comp1, num1, cep2, rua2, cidade2, estado2, comp2, num2];

    var erro = document.getElementById("erro");
    
    
    for (var contador = 0; contador < 20; contador++){
        if (lista[contador].value == ""){
            lista[contador].style.border = "1px solid";
            lista[contador].style.borderColor = "red";
        }else{
            lista[contador]
            lista[contador].style.border = "none";
        }
    }

    for (var contador = 0; contador < 20; contador++){
        if (lista[contador].value == ""){
            erro.innerHTML = "Preencha os campos obrigatórios.";
            erro.style.fontSize = "20px";
            return false;
        }
    }
    alert("Rota cadastrada!")
    return true;


}