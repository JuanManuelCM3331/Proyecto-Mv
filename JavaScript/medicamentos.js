let pacientes = [
  { nombre: "Juan Pérez", medicamentos: [] },
  { nombre: "Ana López", medicamentos: [] }
];

let pacienteSeleccionado = 0;
let editIndex = null;

function cargarPacientes() {
  const select = document.getElementById("pacienteSeleccionado");
  select.innerHTML = "";
  pacientes.forEach((paciente, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = paciente.nombre;
    select.appendChild(option);
  });

  pacienteSeleccionado = select.value;
  mostrarMedicamentos();
}

function mostrarMedicamentos() {
  const tabla = document.getElementById("tablaMedicamentos");
  tabla.innerHTML = "";

  const medicamentos = pacientes[pacienteSeleccionado].medicamentos;

  medicamentos.forEach((medicamento, index) => {
    const fila = document.createElement("tr");
    fila.className = "hover:bg-gray-50";

    fila.innerHTML = `
      <td class="p-3">${medicamento.nombre}</td>
      <td class="p-3">${medicamento.dosis}</td>
      <td class="p-3">${medicamento.frecuencia}</td>
      <td class="p-3">${medicamento.duracion} días</td>
      <td class="p-3 text-center space-x-2">
        <button onclick="editarMedicamento(${index})" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Editar</button>
        <button onclick="eliminarMedicamento(${index})" class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Eliminar</button>
      </td>
    `;

    tabla.appendChild(fila);
  });
}

function abrirFormulario() {
  document.getElementById("modalMedicamento").classList.remove("hidden");
  document.getElementById("formMedicamento").reset();
  document.getElementById("tituloModal").textContent = " Nuevo Medicamento";
  editIndex = null;
}


function cerrarFormulario() {
  document.getElementById("modalMedicamento").classList.add("hidden");
}


document.getElementById("formMedicamento").addEventListener("submit", function (e) {
  e.preventDefault();

  const nuevoMedicamento = {
    nombre: document.getElementById("nombreMedicamento").value,
    dosis: document.getElementById("dosisMedicamento").value,
    frecuencia: document.getElementById("frecuenciaMedicamento").value,
    duracion: document.getElementById("duracionMedicamento").value
  };

  if (editIndex !== null) {
    pacientes[pacienteSeleccionado].medicamentos[editIndex] = nuevoMedicamento;
  } else {
    pacientes[pacienteSeleccionado].medicamentos.push(nuevoMedicamento);
  }

  cerrarFormulario();
  mostrarMedicamentos();
});


function editarMedicamento(index) {
  const medicamento = pacientes[pacienteSeleccionado].medicamentos[index];
  document.getElementById("nombreMedicamento").value = medicamento.nombre;
  document.getElementById("dosisMedicamento").value = medicamento.dosis;
  document.getElementById("frecuenciaMedicamento").value = medicamento.frecuencia;
  document.getElementById("duracionMedicamento").value = medicamento.duracion;

  document.getElementById("tituloModal").textContent = " Editar Medicamento";
  document.getElementById("modalMedicamento").classList.remove("hidden");

  editIndex = index;
}


function eliminarMedicamento(index) {
  if (confirm("¿Seguro que quieres eliminar este medicamento?")) {
    pacientes[pacienteSeleccionado].medicamentos.splice(index, 1);
    mostrarMedicamentos();
  }
}


function filtrarMedicamentos() {
  const input = document.getElementById("busquedaMedicamento").value.toLowerCase();
  const filas = document.getElementById("tablaMedicamentos").getElementsByTagName("tr");
  for (let i = 0; i < filas.length; i++) {
    let texto = filas[i].innerText.toLowerCase();
    filas[i].style.display = texto.includes(input) ? "" : "none";
  }
}

document.getElementById("pacienteSeleccionado").addEventListener("change", function () {
  pacienteSeleccionado = this.value;
  mostrarMedicamentos();
});

window.onload = cargarPacientes;
