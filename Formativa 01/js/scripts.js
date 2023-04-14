//////////////////1/////////////////////
function aviso() {
    let Data = frmRegistro.inData.value;
    let cliente = frmRegistro.inCli.value;
    let tell = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let produto = frmRegistro.inProd.value;
    let quantidade = frmRegistro.inQtd.value;
    let Valor = frmRegistro.inVal.value;

    let divErro = document.getElementById("mensagem-erro")
   

    if (Data.trim() == '') {
        divErro.innerHTML = "O campo não pode ser vazio!";
        return false;
    }
    if (cliente.trim().length <5) {
        divErro.innerHTML = "O campo não pode ter menos que 5 caracteres";
        frmRegistro.inCli.focus();
        return false;
    }

    if (tell == '') {
        divErro.innerHTML = "O campo não pode ser vazio!";
        frmRegistro.inFone.focus();
        return false;
    }

    if (email.trim().length <5) {
        divErro.innerHTML = "O campo não pode ter menos que 5 caracteres";
        frmRegistro.inMail.focus();
        return false;
    }

    if (produto.trim().length <5) {
        divErro.innerHTML = "O campo não pode ter menos que 5 caracteres";
        frmRegistro.inProd.focus();
        return false;
    }

    if (quantidade < 0) {
        divErro.innerHTML = "O campo não pode ser negativo!";
        frmRegistro.inQtd.focus();
        return false;
    }
    if (Valor < 0) {
        divErro.innerHTML = "O campo não pode ser negativo!";
        frmRegistro.inVal.focus();
        return false;
    }
    if (quantidade == '') {
        divErro.innerHTML = "O campo não pode ser vazio!";
        frmRegistro.inQtd.focus();
        return false;
    }
    if (Valor == '') {
        divErro.innerHTML = "O campo não pode ser vazio!";
        frmRegistro.inVal.focus();
        return false;
    }
    if (cliente.trim().length <5) {
        divErro.innerHTML = "O campo deve conter pelo menos 5 caracteres!";
        frmRegistro.inCli.focus();
        return false;
    }
   
    divErro.innerHTML ="Enviado!";
    return false;
   

}


///////////////2/////////////////////////

function diamante() {
    let caixa = document.getElementById('canvas');
    let imagem = '<img class="imagens" src="img/logo.png" alt="Logo" class="imagens" />';
    let quantia = document.getElementById('inQtdImg');
    caixa.innerHTML = '';

    for(let i=0; i < quantia.value; i++){
        caixa.innerHTML = imagem + caixa.innerHTML
    }
   
}


///////////////3/////////////////////

function alterarLampada() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/')+1);
    let btn = document.getElementById('btnEnviar') 

    if (arquivo=='apagada.jpg') {
        btn.textContent  = 'Apagar'
        arquivo = imagem.src='img/acesa.jpg'
    }
    else {
        btn.textContent = 'Acender'
        arquivo = imagem.src='img/apagada.jpg'
    }

}

//////////////4////////////////////////////

