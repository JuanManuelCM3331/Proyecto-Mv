function guardarConfiguracion() {
  const tamañoFuente = document.getElementById("tamañoFuente").value;
  const modoContraste = document.getElementById("contraste").checked;

  localStorage.setItem("tamañoFuente", tamañoFuente);
  localStorage.setItem("modoContraste", modoContraste);

  alert("Configuración guardada ");
  location.reload()
}

function aplicarConfiguracion() {
  const tamañoFuente = localStorage.getItem("tamañoFuente");
  const modoContraste = localStorage.getItem("modoContraste") === "true";

  if (tamañoFuente) {
    document.body.style.fontSize =
      tamañoFuente === "small" ? "14px" :
        tamañoFuente === "medium" ? "18px" :
          "22px";
  }

  if (modoContraste) {
    document.body.classList.add("bg-black", "text-white");
  } else {
    document.body.classList.remove("bg-black", "text-white");
  }
}
window.onload = aplicarConfiguracion;