const prereqs = {
  // 1er año – 1er semestre
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

  // 1er año – 2do semestre
  "enfermeria-vida-humana": ["proceso-atencion-1"],
  "ingles-1": ["ingles-2", "internado-1", "internado-2", "prep-examen"],
  "histoembriologia": ["fisiologia-general"],
  "fundamentos-quimica-bioquimica": [
    "microbiologia-parasitologia",
    "farmacologia"
  ],
  "fundamentos-eticos-actuar-comunitario": ["salud-publica"],

  // 2do año – 3er semestre
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

  // 2do año – 4to semestre
  "metodologia-participativa": ["taller-intervencion-1", "practica-1"],
  "fundamentos-enfermeria-salud-comunitaria": ["practica-1"],
  "psicologia-ejercicio-enfermeria": ["practica-1"],
  "fisiopatologia": ["practica-1", "salud-adulto-1"],
  "proceso-atencion-2": ["practica-1"],
  "farmacologia": ["practica-1", "salud-adulto-1"],

  // 3er año – 5to semestre
  "gestion-1": ["practica-2", "salud-adulto-2", "gestion-2"],
  "educacion-salud": ["practica-2", "salud-adulto-2"],
  "taller-intervencion-1": [],
  "practica-1": ["practica-2", "salud-adulto-2", "bioetica"],
  "salud-adulto-1": ["practica-2", "salud-adulto-2", "adulto-mayor"],
  "epidemiologia": ["practica-2", "salud-adulto-2"],

  // 3er año – 6to semestre
  "practica-2": ["practica-3", "metodologia-investigacion", "salud-nino-1", "infeccion-atencion"],
  "salud-adulto-2": ["salud-mental", "practica-3", "metodologia-investigacion", "salud-nino-1", "urgencias", "infeccion-atencion", "cuidados-paliativos"],
  "bioetica": ["practica-3", "metodologia-investigacion"],
  "adulto-mayor": ["practica-3", "urgencias", "seminario-grado"],

  // 4to año – 7mo semestre
  "salud-mental": ["practica-4", "seminario-grado"],
  "practica-3": ["practica-4", "cuidados-paliativos"],
  "metodologia-investigacion": ["seminario-grado"],
  "salud-nino-1": ["practica-4", "cuidados-paliativos", "salud-nino-2", "seminario-grado"],
  "urgencias": ["seminario-grado"],

  // 4to año – 8vo semestre
  "infeccion-atencion": ["internado-1", "svav", "internado-2", "prep-examen"],
  "practica-4": ["internado-1", "svav", "internado-2", "prep-examen"],
  "cuidados-paliativos": ["internado-1", "svav", "internado-2", "prep-examen"],
  "salud-nino-2": ["internado-1", "svav", "internado-2", "prep-examen"],
  "salud-ocupacional": ["internado-1", "svav", "internado-2", "prep-examen"],
  "seminario-grado": ["internado-1", "svav", "internado-2", "prep-examen"],

  // 5to año
  "internado-1": [],
  "svav": [],
  "internado-2": [],
  "prep-examen": []
};



