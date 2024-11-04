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
        const category = document.getElementById('category').value;

        const question = {
            text: questionText,
            answers: [answer1, answer2, answer3],
            correct: correctAnswer,
            category: category
        };

        saveQuestionToLocalStorage(question);
        addQuestionToList(question);
        questionForm.reset();
    });

    function saveQuestionToLocalStorage(question) {
        const storedQuestions = JSON.parse(localStorage.getItem('customQuestions')) || {};
        if (!storedQuestions[question.category]) {
            storedQuestions[question.category] = [];
        }
        storedQuestions[question.category].push(question);
        localStorage.setItem('customQuestions', JSON.stringify(storedQuestions));
    }

    function addQuestionToList(question) {
        const questionItem = document.createElement('div');
        questionItem.classList.add('question-item');
        questionItem.innerHTML = `
            <p><strong>Pregunta:</strong> ${question.text}</p>
            <p><strong>Opciones:</strong> ${question.answers.join(', ')}</p>
            <p><strong>Respuesta Correcta:</strong> ${question.correct}</p>
            <p><strong>Categoría:</strong> ${question.category}</p>
        `;
        questionsList.appendChild(questionItem);
    }
});

