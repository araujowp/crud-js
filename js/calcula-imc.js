

var titulo = document.querySelector(".titulo");

var pacientes = document.querySelectorAll(".paciente");

for(var contador = 0; contador < pacientes.length ; contador++){

    var paciente = pacientes[contador];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    var trImc = paciente.querySelector(".info-imc");
    
    var pesoValido = true;
    var alturaValida = true;

    if (!validaPeso(peso)){
        pesoValido = false;
        trImc.textContent = "peso inválido";
    }
    
    if (!validaAltura(altura)) {
        alturaValida = false;
        trImc.textContent = "altura inválida";
    }

    if(pesoValido && alturaValida){
        trImc.textContent = calculaImc(peso, altura);
    }else{
        //paciente.style.backgroundColor = "lightCoral";
        paciente.classList.add("paciente-invalido");
    }

    function calculaImc(peso, altura){

         var imc  = peso / (altura * altura);
        return imc.toFixed(2);
    }

}

function validaPeso(peso){
    if (peso <= 0 || peso >= 250){
        return false;
    }else{
        return true;
    }
}

function validaAltura(altura){
    if (altura <= 0 || altura >= 3.00) {
        console.log("altura recebida " + altura + "invalida" );
        return false;
    }else{
        console.log("altura recebida " + altura + "ok" );
        return true;
    }
}


