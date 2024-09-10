// Guardar el progreso en LocalStorage
function startClass() {
    const currentClass = localStorage.getItem('currentClass') || 1;
    window.location.href = `class${currentClass}.html`;
}

function completeClass(classNumber) {
    const nextClass = classNumber + 1;
    localStorage.setItem('currentClass', nextClass);
    alert(`Has completado la Clase ${classNumber}. Ahora puedes avanzar a la Clase ${nextClass}.`);
    if (nextClass <= 12) {
        window.location.href = `class${nextClass}.html`;
    } else {
        alert('¡Felicitaciones! Has completado todas las clases.');
    }
}

// Bloquear el acceso directo a clases no permitidas
function checkClassAccess(requiredClass) {
    const currentClass = localStorage.getItem('currentClass') || 1;
    if (currentClass < requiredClass) {
        alert('Debes completar las clases anteriores antes de acceder a esta.');
        window.location.href = `class${currentClass}.html`;
    }
}
