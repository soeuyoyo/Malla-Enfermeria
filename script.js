const ramos = [
  { id: 'biologiaCelular', nombre: 'Biología Celular', requisitos: [] },
  { id: 'histoembriologia', nombre: 'Histoembriología', requisitos: ['biologiaCelular', 'morfologia'] },
  { id: 'microbiologia', nombre: 'Microbiología y Parasitología', requisitos: ['biologiaCelular', 'quimica'] },
  { id: 'fundamentoComunitario', nombre: 'Fundamento del Actuar Comunitario', requisitos: [] },
  { id: 'etica', nombre: 'Fundamentos Éticos del Actuar Comunitario', requisitos: ['fundamentoComunitario'] },
  { id: 'introMatematica', nombre: 'Introducción a la Matemática Aplicada', requisitos: [] },
  { id: 'quimica', nombre: 'Fundamentos de Química y Bioquímica', requisitos: ['introMatematica'] },
  { id: 'bioestadistica', nombre: 'Bioestadística', requisitos: ['introMatematica'] },
  { id: 'farmacologia', nombre: 'Farmacología', requisitos: ['quimica', 'introMatematica'] },
  { id: 'morfologia', nombre: 'Morfología y Función', requisitos: [] },
  { id: 'proceso1', nombre: 'Proceso de Atención de Enfermería 1', requisitos: ['morfologia', 'enfermeriaVidaHumana'] },
  { id: 'fisiologia', nombre: 'Fisiología General', requisitos: ['morfologia', 'histoembriologia'] },
  { id: 'introEnfermeria', nombre: 'Introducción a los Estudios de la Enfermería', requisitos: [] },
  { id: 'enfermeriaVidaHumana', nombre: 'Enfermería en el Curso de la Vida Humana', requisitos: ['introEnfermeria', 'primerosAuxilios'] },
  { id: 'primerosAuxilios', nombre: 'Primeros Auxilios', requisitos: [] },
  { id: 'ingles1', nombre: 'Inglés 1', requisitos: [] },
  { id: 'ingles2', nombre: 'Inglés 2', requisitos: ['ingles1'] },
  { id: 'epidemiologia', nombre: 'Epidemiología', requisitos: ['bioestadistica'] },
  { id: 'gestion1', nombre: 'Gestión y Administración en Enfermería 1', requisitos: ['bioestadistica'] },
  { id: 'enfermeriaComunitaria', nombre: 'Fundamentos de Enfermería en Salud Comunitaria', requisitos: ['proceso1', 'fundamentoComunitario'] },
  { id: 'saludPublica', nombre: 'Salud Pública y Políticas Públicas', requisitos: ['etica'] },
  { id: 'proceso2', nombre: 'Proceso de Atención de Enfermería 2', requisitos: ['proceso1', 'fisiologia'] },
  { id: 'fisiopatologia', nombre: 'Fisiopatología', requisitos: ['fisiologia'] },
  { id: 'psicologia', nombre: 'Psicología para el Ejercicio de la Enfermería', requisitos: [] },
  { id: 'metodologiaParticipativa', nombre: 'Metodología Participativa', requisitos: ['saludPublica'] },
  { id: 'taller1', nombre: 'Taller de Intervención Comunitaria 1', requisitos: ['metodologiaParticipativa'] },
  { id: 'practica1', nombre: 'Práctica Integrada 1', requisitos: ['microbiologia', 'psicologia', 'proceso2', 'farmacologia', 'fisiopatologia'] },
  { id: 'saludAdulto1', nombre: 'Salud y Morbilidad del Adulto 1', requisitos: ['fisiopatologia', 'farmacologia'] },
  { id: 'educacionSalud', nombre: 'Educación para la Salud', requisitos: [] },
  { id: 'bioetica', nombre: 'Bioética', requisitos: ['practica1'] },
  { id: 'practica2', nombre: 'Práctica Integrada 2', requisitos: ['practica1', 'educacionSalud', 'gestion1', 'epidemiologia', 'saludAdulto1'] },
  { id: 'saludAdulto2', nombre: 'Salud y Morbilidad del Adulto 2', requisitos: ['saludAdulto1', 'epidemiologia', 'gestion1'] },
  { id: 'metodologiaInvestigacion', nombre: 'Metodología de la Investigación', requisitos: ['bioetica', 'practica2'] },
  { id: 'saludNino1', nombre: 'Salud del Niño y Adolescente 1', requisitos: ['practica2', 'saludAdulto2'] },
  { id: 'enfermeriaMental', nombre: 'Enfermería en Salud Mental', requisitos: ['saludAdulto2'] },
  { id: 'urgencias', nombre: 'Enfermería en Urgencias', requisitos: ['saludAdulto2'] },
  { id: 'saludAdultoMayor', nombre: 'Salud del Adulto Mayor', requisitos: ['saludAdulto1'] },
  { id: 'cuidadosPaliativos', nombre: 'Cuidados Paliativos Integrales', requisitos: ['saludNino1', 'practica3'] },
  { id: 'practica3', nombre: 'Práctica Integrada 3', requisitos: ['practica2'] },
  { id: 'practica4', nombre: 'Práctica Integrada 4', requisitos: ['practica3'] },
  { id: 'seminario', nombre: 'Seminario de Grado', requisitos: ['metodologiaInvestigacion', 'urgencias', 'saludNino1'] },
  { id: 'saludNino2', nombre: 'Salud del Niño y Adolescente 2', requisitos: ['saludNino1'] },
  { id: 'saludOcupacional', nombre: 'Salud Ocupacional y Ambiental', requisitos: ['saludNino2'] },
  { id: 'infecciones', nombre: 'Infecciones y Atención en Salud', requisitos: ['saludAdulto2'] },
  { id: 'internado1', nombre: 'Internado 1', requisitos: ['practica4', 'seminario', 'infecciones'] },
  { id: 'internado2', nombre: 'Internado 2', requisitos: ['internado1'] },
  { id: 'preparacionExamen', nombre: 'Preparación Examen de Título', requisitos: ['internado1', 'internado2'] },
];

const aprobados = new Set();

function crearRamos() {
  const malla = document.getElementById("malla");
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.id = ramo.id;
    div.innerText = ramo.nombre;
    div.onclick = () => aprobarRamo(ramo.id);
    malla.appendChild(div);
  });
  actualizarRamos();
}

function aprobarRamo(id) {
  const ramo = ramos.find(r => r.id === id);
  if (!ramo || !ramo.requisitos.every(req => aprobados.has(req))) return;
  if (aprobados.has(id)) return;

  aprobados.add(id);
  document.getElementById(id).classList.remove("bloqueado");
  document.getElementById(id).classList.add("aprobado");
  actualizarRamos();
}

function actualizarRamos() {
  ramos.forEach(ramo => {
    const div = document.getElementById(ramo.id);
    if (aprobados.has(ramo.id)) return;
    const desbloqueado = ramo.requisitos.every(req => aprobados.has(req));
    div.classList.toggle("bloqueado", !desbloqueado);
    div.classList.toggle("aprobado", false);
  });
}

window.onload = crearRamos;


 


