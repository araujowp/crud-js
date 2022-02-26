var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function () {
  var digitado = this.value;

  var pacientes = document.querySelectorAll(".paciente");

  pacientes.forEach(function (paciente) {
    var tdNome = paciente.querySelector(".info-nome");
    var nome = tdNome.textContent;
    var expressao = new RegExp(digitado, "i");//i: == case insensitive:


    if (!expressao.test(nome) && digitado !== "") {
      paciente.classList.add("invisivel");
    } else {
      paciente.classList.remove("invisivel");
    }
  });
});
