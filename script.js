const prereqs = {
  // Primer año
  "biologia-celular": ["histoembriologia", "microbiologia-parasitologia"],
  "fundamento-actuar-comunitario": [
    "fundamentos-eticos-actuar-comunitario",
    "fundamentos-enfermeria-salud-comunitaria"
  ],
  "introduccion-matematica": [
    "fundamentos-quimica-bioquimica",
    "bioestadistica",
    "farmacologia"
  ],
  "morfologia-funcion": [
    "histoembriologia",
    "proceso-atencion-1",
    "fisiologia-general"
  ],
  "introduccion-estudios-enfermeria": ["enfermeria-vida-humana"],
  "primeros-auxilios": ["enfermeria-vida-humana"],

  // 1° año – 2° semestre
  "enfermeria-vida-humana": ["proceso-atencion-1"],
  "ingles-1": ["ingles-2", "internado-1", "internado-2", "prep-examen"],
  "histoembriologia": ["fisiologia-general"],
  "fundamentos-quimica-bioquimica": [
    "microbiologia-parasitologia",
    "farmacologia"
  ],
  "fundamentos-eticos-actuar-comunitario": ["salud-publica"],

  // 2° año – 3° semestre
  "bioestadistica": ["gestion-1", "epidemiologia"],
  "salud-publica": [
    "metodologia-participativa",
    "practica-2",
    "salud-adulto-2"
  ],
  "proceso-atencion-1": ["proceso-atencion-2", "fundamentos-enfermeria-salud-comunitaria"],
  "microbiologia-parasitologia": ["practica-1"],
  "ingles-2": ["practica-1", "internado-1", "internado-2", "prep-examen"],
  "fisiologia-general": ["fisiopatologia", "proceso-atencion-2"],

  // … (completa aquí los demás semestres con el mismo patrón) …
};

/* ---------- Inicialización ------------------------------ */
window.addEventListener("DOMContentLoaded", () => {
  const allRamos = document.querySelectorAll(".ramo");

  // Estado guardado
  const aprobados = new Set(JSON.parse(localStorage.getItem("aprobados") || "[]"));

  allRamos.forEach((div) => {
    const id = div.id;
    const btn = div.querySelector("button");

    // Bloquear por defecto
    if (!aprobados.has(id) && !esRamoInicial(id)) {
      bloquear(btn);
    }

    // Restaurar aprobados
    if (aprobados.has(id)) {
      aprobar(div, btn, false); // false → no recursivo
    }

    // Manejar clics
    btn.addEventListener("click", () => manejarClick(div, btn));
  });
});

/* ---------- Funciones principales ----------------------- */
function manejarClick(div, btn) {
  const id = div.id;
  const aprobados = new Set(JSON.parse(localStorage.getItem("aprobados") || "[]"));

  if (div.classList.contains("aprobado")) {
    desaprobar(div, btn);
    aprobados.delete(id);
  } else {
    aprobar(div, btn);
    aprobados.add(id);
  }
  localStorage.setItem("aprobados", JSON.stringify(Array.from(aprobados)));
}

function aprobar(div, btn, propagar = true) {
  div.classList.add("aprobado");
  btn.classList.add("aprobado");
  if (propagar) desbloquearDependientes(div.id);
}

function desaprobar(div, btn) {
  div.classList.remove("aprobado");
  btn.classList.remove("aprobado");
  // No bloqueamos dependientes automáticamente para ev


