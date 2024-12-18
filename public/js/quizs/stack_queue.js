const questions = [
    {
        "question": "What is the main characteristic of a stack data structure?",
        "answers": [
            {"text": "First-In-First-Out (FIFO)", "correct": false},
            {"text": "Last-In-First-Out (LIFO)", "correct": true},
            {"text": "Random Access", "correct": false},
            {"text": "Circular Traversal", "correct": false}
        ]
    },
    {
        "question": "In a stack, which operation is used to add an element?",
        "answers": [
            {"text": "Push", "correct": true},
            {"text": "Pop", "correct": false},
            {"text": "Enqueue", "correct": false},
            {"text": "Dequeue", "correct": false}
        ]
    },
    {
        "question": "What happens when a Pop operation is performed on an empty stack?",
        "answers": [
            {"text": "Returns NULL", "correct": false},
            {"text": "Throws a \"stack underflow\" exception", "correct": true},
            {"text": "Adds a default value", "correct": false},
            {"text": "Does nothing", "correct": false}
        ]
    },
    {
        "question": "What is the main feature of a queue?",
        "answers": [
            {"text": "Last-In-First-Out (LIFO)", "correct": false},
            {"text": "First-In-First-Out (FIFO)", "correct": true},
            {"text": "Random Access", "correct": false},
            {"text": "Dynamic Priority", "correct": false}
        ]
    },
    {
        "question": "In a queue, where is the new element inserted?",
        "answers": [
            {"text": "At the front", "correct": false},
            {"text": "At the rear", "correct": true},
            {"text": "In the middle", "correct": false},
            {"text": "At a random position", "correct": false}
        ]
    },
    {
        "question": "What is a circular queue?",
        "answers": [
            {"text": "A queue with a circular data structure", "correct": false},
            {"text": "A queue that overwrites its elements", "correct": false},
            {"text": "A queue where the end connects back to the start", "correct": true},
            {"text": "A queue implemented using linked lists", "correct": false}
        ]
    },
    {
        "question": "What condition signifies that a circular queue is full?",
        "answers": [
            {"text": "front == rear", "correct": false},
            {"text": "(rear + 1) % capacity == front", "correct": true},
            {"text": "rear == capacity - 1", "correct": false},
            {"text": "front == capacity - 1", "correct": false}
        ]
    },
    {
        "question": "Which operation is used to remove an element from a queue?",
        "answers": [
            {"text": "Enqueue", "correct": false},
            {"text": "Pop", "correct": false},
            {"text": "Dequeue", "correct": true},
            {"text": "Remove", "correct": false}
        ]
    },
    {
        "question": "In a stack, what does the Top operation do?",
        "answers": [
            {"text": "Adds a new element", "correct": false},
            {"text": "Removes the topmost element", "correct": false},
            {"text": "Returns the topmost element without removing it", "correct": true},
            {"text": "Checks if the stack is empty", "correct": false}
        ]
    },
    {
        "question": "What is a potential issue with a linear queue implemented using arrays?",
        "answers": [
            {"text": "Unlimited capacity", "correct": false},
            {"text": "Memory underutilization due to shifting of elements", "correct": true},
            {"text": "Difficulty in element insertion", "correct": false},
            {"text": "Complexity in deletion", "correct": false}
        ]
    },
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const backBtn = document.getElementById("back-btn"); // Back button

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    // Reset question index and score
    currentQuestionIndex = 0;
    score = 0;

    // Reset all user answers only when restarting the quiz
    questions.forEach(question => {
        question.userAnswer = null; 
    });

    // Reset UI elements
    nextBtn.innerHTML = "Next";
    backBtn.style.display = "none";
    prevBtn.style.display = "none";

    // Start the quiz from the first question
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");

        // Persist user's previous answer during normal navigation
        if (currentQuestion.userAnswer === answer.text) {
            button.classList.add(answer.correct ? "correct" : "incorrect");
        }

        answerBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", (e) => {
            selectAnswer(e, answer.text); 
        });
    });
}

function selectAnswer(e, selectedText) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Save the user's selected answer
    questions[currentQuestionIndex].userAnswer = selectedText;

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Highlight correct answer and disable all buttons
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

function resetState() {
    nextBtn.style.display = "block";
    prevBtn.style.display = currentQuestionIndex > 0 ? "block" : "none";
    backBtn.style.display = "none";

    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function showScore() {
    resetState();

    questionElement.innerHTML = `
        <h2 style="font-size: 36px; font-weight: bold; color: #001e4d; margin-bottom: 15px; text-align: center; margin-top: 100px;">
            Fantastic! You've completed the quiz session! 🎓
        </h2>
        <p style="font-size: 26px; font-weight: bold; color: #333; text-align: center; margin-bottom: 180px;">
            You answered ${score} out of ${questions.length} questions correctly.
        </p>
    `;
    nextBtn.innerHTML = "Take Quiz"; 
    nextBtn.style.display = "block";
    prevBtn.style.display = "none";
    backBtn.style.display = "block";
}

// Handle navigation to the next question
function handleNextButton() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
}

// Handle navigation to the previous question
function handlePrevButton() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

prevBtn.addEventListener("click", handlePrevButton);

nextBtn.addEventListener("click", () => {
    if (nextBtn.innerHTML === "Take Quiz") {
        startQuiz();
    } else {
        handleNextButton(); 
    }
});

backBtn.addEventListener("click", () => {
    window.location.href = "/quizs/quiz_data";
});

startQuiz();