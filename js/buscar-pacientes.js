var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var httpResquest = new XMLHttpRequest();

  httpResquest.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  httpResquest.addEventListener("load", function () {

    var erroAjax = document.querySelector("#erro-ajax");
    if(httpResquest.status == 200){
        erroAjax.classList.add("invisivel");
        var request = httpResquest.responseText;
        var pacientes = JSON.parse(request);
    
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    }else{
        // console.log(httpResquest.status);
        // console.log(httpResquest.responseText);
        erroAjax.classList.remove("invisivel");
    }

  });
  httpResquest.send();
});
