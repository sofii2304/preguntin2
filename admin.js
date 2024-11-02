document.addEventListener('DOMContentLoaded', () => {
    const questionForm = document.getElementById('question-form');
    const questionsList = document.getElementById('questions-list');

    // Función para agregar una nueva pregunta
    questionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const questionText = document.getElementById('question-text').value;
        const answer1 = document.getElementById('answer-1').value;
        const answer2 = document.getElementById('answer-2').value;
        const answer3 = document.getElementById('answer-3').value;
        const correctAnswer = document.getElementById('correct-answer').value;

        const question = {
            text: questionText,
            answers: [answer1, answer2, answer3],
            correct: correctAnswer
        };

        // Aquí puedes almacenar la pregunta en localStorage o una base de datos
        addQuestionToList(question);
        questionForm.reset();
    });

    // Función para mostrar preguntas en la lista
    function addQuestionToList(question) {
        const questionItem = document.createElement('div');
        questionItem.classList.add('question-item');
        questionItem.innerHTML = `
            <p><strong>Pregunta:</strong> ${question.text}</p>
            <p><strong>Opciones:</strong> ${question.answers.join(', ')}</p>
            <p><strong>Respuesta Correcta:</strong> ${question.correct}</p>
        `;
        questionsList.appendChild(questionItem);
    }
});
