document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const playerNameInput = document.getElementById('player-name');
    const adminField = document.getElementById('admin-field');
    const adminLoginBtn = document.getElementById('admin-login-btn');
    const adminCodeInput = document.getElementById('admin-code');
    const maxAdminAttempts = 2;
    let adminAttempts = 0;

    // Clave secreta del administrador
    const ADMIN_SECRET_CODE = "codigo_secreto";

    // Función para manejar el botón de inicio de sesión
    startBtn.addEventListener('click', () => {
        const playerName = playerNameInput.value.trim();

        if (playerName) {
            // Verificar si el usuario es "admin"
            if (playerName.toLowerCase() === 'admin') {
                adminField.classList.remove('hidden'); // Mostrar campo de código para administrador
            } else {
                // Guardar el nombre y puntaje en localStorage
                localStorage.setItem('playerName', playerName);
                localStorage.setItem('playerScore', 0);

                // Redirigir a la página de selección de categoría
                window.location.href = 'categoria.html';
            }
        } else {
            alert('Por favor, ingresa tu nombre para iniciar el juego.');
        }
    });

    // Intento de inicio de sesión de administrador
    adminLoginBtn.addEventListener('click', () => {
        const enteredCode = adminCodeInput.value;

        if (enteredCode === ADMIN_SECRET_CODE) {
            alert("Ingreso exitoso como administrador");
            window.location.href = 'admin.html'; // Redirigir al panel de administrador
        } else {
            adminAttempts++;
            if (adminAttempts >= maxAdminAttempts) {
                alert("Intentos fallidos. El acceso está bloqueado.");
                adminLoginBtn.disabled = true;
            } else {
                alert("Código incorrecto. Inténtalo nuevamente.");
            }
        }
    });
});
