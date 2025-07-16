const requisitos = {
    "biologia-cellular": ["histoembriologia", "microbiologia-parasitologia"],
    "fundamento-actuar-comunitario": ["fundamentos-eticos", "fundamentos-enfermeria-comunitaria"],
    "enfermeria-vida-humana": ["proceso-atencion-enfermeria1"]
    // Completar con los requisitos de todos los ramos
};

function toggleRamo(ramoId) {
    const ramo = document.getElementById(ramoId);
    const button = ramo.querySelector('button');

    // Marcar el ramo como aprobado o no
    if (ramo.classList.contains('aprobado')) {
        ramo.classList.remove('aprobado');
        button.classList.remove('aprobado');
    } else {
        ramo.classList.add('aprobado');
        button.classList.add('aprobado');

        // Desbloquear los ramos que dependen de este
        desbloquearRequisitos(ramoId);
    }
}

function desbloquearRequisitos(ramoId) {
    // Buscar los ramos que dependen de este y desbloquearlos
    Object.keys(requisitos).forEach((ramo) => {
        if (requisitos[ramo].includes(ramoId) && !document.getElementById(ramo).classList.contains('aprobado')) {
            document.getElementById(ramo).classList.remove('disabled');
            const button = document.getElementById(ramo).querySelector('button');
            button.disabled = false;
        }
    });
}

