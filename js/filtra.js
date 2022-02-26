var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function () {
console.log(this.value);
  var pacientes = document.querySelectorAll(".paciente");
  console.log(pacientes);
  for (var i = 0; i < pacientes.length; i++) {
    var tdNome = pacientes[i].querySelector(".info-nome");
    var nome = tdNome.textContent;
    if (nome != this.value) {
      pacientes[i].classList.add("invisivel");
      console.log("invisivel");
    } else {
      pacientes[i].classList.remove("invisivel");
      console.log("visivel");
    }
  }
});
