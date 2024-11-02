// Pantalla de Inicio
document.getElementById('start-btn').addEventListener('click', function() {
    playerName = document.getElementById('player-name').value;
    if (playerName) {
        startScreen.classList.add('hidden');
        categoryScreen.classList.remove('hidden');
    } else {
        alert('Por favor ingresa tu nombre');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const playerNameInput = document.getElementById('player-name');

    startBtn.addEventListener('click', () => {
        const playerName = playerNameInput.value.trim();

        if (playerName) {
            // Guardar el nombre y puntaje en localStorage
            localStorage.setItem('playerName', playerName);
            localStorage.setItem('playerScore', 0);

            // Redirigir a la página de selección de categoría
            window.location.href = 'categoria.html';
        } else {
            alert('Por favor, ingresa tu nombre para iniciar el juego.');
        }
    });
});
