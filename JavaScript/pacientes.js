// Datos simulados de pacientes (puedes reemplazar con API o DB)
let pacientes = [
  { nombre: "Juan Pérez", edad: 65, contacto: "3214567890", medico: "Dr. Ramírez" },
  { nombre: "Ana López", edad: 50, contacto: "3009876543", medico: "Dra. Martínez" }
];
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

function mostrarPacientes() {
  const tabla = document.getElementById("tablaPacientes");
  tabla.innerHTML = "";

  pacientes.forEach((paciente, index) => {
    const fila = document.createElement("tr");
    fila.className = "hover:bg-gray-50";

    fila.innerHTML = `
      <td class="p-3">${paciente.nombre}</td>
      <td class="p-3">${paciente.edad}</td>
      <td class="p-3">${paciente.contacto}</td>
      <td class="p-3">${paciente.medico}</td>
      <td class="p-3 text-center space-x-2">
        <button onclick="verPaciente(${index})" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Ver</button>
        <button onclick="editarPaciente(${index})" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Editar</button>
        <button onclick="eliminarPaciente(${index})" class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Eliminar</button>
      </td>
    `;

    tabla.appendChild(fila);
  });
}

function abrirFormulario() {
  document.getElementById("modalPaciente").classList.remove("hidden");
  document.getElementById("formPaciente").reset();
  document.getElementById("tituloModal").textContent = "➕ Nuevo Paciente";
  editIndex = null;
}

function cerrarFormulario() {
  document.getElementById("modalPaciente").classList.add("hidden");
}

let editIndex = null;

document.getElementById("formPaciente").addEventListener("submit", function (e) {
  e.preventDefault();

  const nuevoPaciente = {
    nombre: document.getElementById("nombrePaciente").value,
    edad: document.getElementById("edadPaciente").value,
    contacto: document.getElementById("contactoPaciente").value,
    medico: document.getElementById("medicoPaciente").value
  };

  if (editIndex !== null) {
    pacientes[editIndex] = nuevoPaciente;
  } else {
    pacientes.push(nuevoPaciente);
  }

  cerrarFormulario();
  mostrarPacientes();
});

function editarPaciente(index) {
  const paciente = pacientes[index];
  document.getElementById("nombrePaciente").value = paciente.nombre;
  document.getElementById("edadPaciente").value = paciente.edad;
  document.getElementById("contactoPaciente").value = paciente.contacto;
  document.getElementById("medicoPaciente").value = paciente.medico;

  document.getElementById("tituloModal").textContent = "✏️ Editar Paciente";
  document.getElementById("modalPaciente").classList.remove("hidden");

  editIndex = index;
}

function eliminarPaciente(index) {
  if (confirm("¿Seguro que quieres eliminar este paciente?")) {
    pacientes.splice(index, 1);
    mostrarPacientes();
  }
}

function verPaciente(index) {
  alert(`📋 Información del paciente:\n\nNombre: ${pacientes[index].nombre}\nEdad: ${pacientes[index].edad}\nContacto: ${pacientes[index].contacto}\nMédico: ${pacientes[index].medico}`);
}

function filtrarPacientes() {
  const input = document.getElementById("busquedaPaciente").value.toLowerCase();
  const filas = document.getElementById("tablaPacientes").getElementsByTagName("tr");
  for (let i = 0; i < filas.length; i++) {
    let texto = filas[i].innerText.toLowerCase();
    filas[i].style.display = texto.includes(input) ? "" : "none";
  }
}

window.onload = mostrarPacientes;
