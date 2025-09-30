function filtrarHistorial() {
  const medicamento = document.getElementById("medicamento").value;
  const fechaInicio = document.getElementById("fechaInicio").value;
  const fechaFin = document.getElementById("fechaFin").value;

  alert(`Filtrando por:
  Medicamento: ${medicamento || "Todos"}
  Desde: ${fechaInicio || "N/A"}
  Hasta: ${fechaFin || "N/A"}`);
  
}
