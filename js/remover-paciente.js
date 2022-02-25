var pacientes = document.querySelectorAll(".paciente");

var tabela  = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
    
    if(event.target.tagName == "TD"){
        paiDoAlvo.classList.add("fadeOut");

        setTimeout(function(){
            paiDoAlvo.remove();
        },500);
    }


    // event.target.parentNode.remove(); //podemos fazer em uma linda mas este é um exemplo didaticos
});