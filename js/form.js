var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteFormulario(form);

    var erros = validaPaciente(paciente);
    
    if (erros.length){
        imprimeErros(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtemPacienteFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
    return paciente;
}

function montaTr(paciente){

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura,"info-altura");
    var gorduraTd = montaTd(paciente.gordura,"info-gordura");
    var imc  = calculaImc(paciente.peso,paciente.altura);
    var imcTd = montaTd(imc,"info-imc");

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent  = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;    
}

function imprimeErros(erros){

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";//limpar o elemento

    erros.forEach(  function(erro){
        console.log("imprimindo");
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

