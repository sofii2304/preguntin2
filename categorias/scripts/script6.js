const apiUrl = 'https://opentdb.com/api.php?amount=40&category=21&type=multiple'; // URL de la API para Historia
let questions = [];
let score = 0;
let currentQuestionIndex = 0;
let currentSet = []; // Conjunto actual de preguntas
let questionsAnswered = 0; // Contador de preguntas respondidas

async function fetchQuestions() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        const data = await response.json();
        questions = data.results; // Obtener las preguntas de la respuesta
        loadNextSet();
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}

function loadNextSet() {
    if (currentQuestionIndex >= questions.length) {
        document.getElementById('questions-container').innerHTML = '<h2>No hay más preguntas disponibles.</h2>';
        return;
    }
    currentSet = questions.slice(currentQuestionIndex, currentQuestionIndex + 4);
    currentQuestionIndex += 4;

    displayQuestions();
}

function displayQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = ''; // Limpiar el contenedor
    container.style.opacity = 0; // Ocultar antes de mostrar

    currentSet.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question-card';
        questionElement.innerHTML = `
            <h2>Pregunta ${currentQuestionIndex - currentSet.length + index + 1}</h2>
            <p>${question.question}</p>
            <ul class="answers">
                ${[...question.incorrect_answers, question.correct_answer]
                    .sort(() => Math.random() - 0.5) // Mezclar respuestas
                    .map(answer => `<li onclick="selectAnswer('${answer}', '${question.correct_answer}')">${answer}</li>`).join('')}
            </ul>
        `;
        container.appendChild(questionElement);
    });

    container.style.opacity = 1; // Mostrar preguntas
}

function selectAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    questionsAnswered++; // Incrementar el contador de preguntas respondidas
    updateScore();

    // Verificar si se han respondido todas las preguntas del conjunto actual
    if (questionsAnswered === 4) {
        setTimeout(() => {
            questionsAnswered = 0; // Reiniciar contador de preguntas respondidas
            loadNextSet();
        }, 1000); // Temporizador de 1 segundo
    }
}

function updateScore() {
    document.getElementById('score').innerText = `Puntaje: ${score}`;
}

fetchQuestions();
