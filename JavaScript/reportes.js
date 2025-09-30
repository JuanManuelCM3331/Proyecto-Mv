let chart;

function generarReporte() {
  const tomadas = Math.floor(Math.random() * 10) + 5;
  const omitidas = Math.floor(Math.random() * 5);
  const pospuestas = Math.floor(Math.random() * 3);

  const total = tomadas + omitidas + pospuestas;
  const adherencia = total > 0 ? Math.round((tomadas / total) * 100) : 0;

  document.getElementById("tomadas").textContent = tomadas;
  document.getElementById("omitidas").textContent = omitidas;
  document.getElementById("pospuestas").textContent = pospuestas;
  document.getElementById("adherencia").textContent = adherencia + "%";

  const ctx = document.getElementById("graficoReportes").getContext("2d");
  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Tomadas", "Omitidas", "Pospuestas"],
      datasets: [{
        data: [tomadas, omitidas, pospuestas],
        backgroundColor: ["#34D399", "#F87171", "#FBBF24"],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  });
}

function exportarPDF() {
  alert("📑 Función de exportar a PDF aún pendiente (se puede integrar con jsPDF o desde backend).");
}
