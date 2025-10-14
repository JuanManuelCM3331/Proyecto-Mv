function guardarConfiguracion() {
  const tamañoFuente = document.getElementById("tamañoFuente").value;
  const formatoHora = document.querySelector('select[aria-label="Formato de hora"]')?.value;

  localStorage.setItem("tamañoFuente", tamañoFuente);

  if (formatoHora) {
    localStorage.setItem("formatoHora", formatoHora);
  }

  location.reload();
}

function aplicarConfiguracion() {
  const tamañoFuente = localStorage.getItem("tamañoFuente");
  if (tamañoFuente) {
    let fontSize;
    switch (tamañoFuente) {
      case "small": fontSize = "14px"; break;
      case "medium": fontSize = "18px"; break;
      case "large": fontSize = "22px"; break;
      default: fontSize = "16px";
    }
    let styleTag = document.getElementById("fuente-personalizada");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "fuente-personalizada";
      document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = `
      body, body * { font-size: ${fontSize} !important; }
      .text-3xl, .text-2xl, .text-xl, .text-lg, .text-base, .text-sm, .text-xs {
        font-size: ${fontSize} !important;
      }
    `;
  }
}

window.onload = aplicarConfiguracion;

window.onload = aplicarConfiguracion;