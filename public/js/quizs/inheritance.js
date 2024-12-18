const questions = [
    {
        "question": "What does the term 'inheritance' in C++ represent?",
        "answers": [
            {"text": "Creating a new class from scratch", "correct": false},
            {"text": "Expressing a subtype relationship between abstract data types", "correct": true},
            {"text": "Overloading operators for a class", "correct": false},
            {"text": "Encapsulation of data and methods", "correct": false}
        ]
    },
    {
        "question": "Which of the following best describes the IS-A relationship?",
        "answers": [
            {"text": "A relationship between objects and their methods", "correct": false},
            {"text": "A type of encapsulation in C++", "correct": false},
            {"text": "A relationship where one type is a specialized form of another", "correct": true},
            {"text": "A method of operator overloading", "correct": false}
        ]
    },
    {
        "question": "In C++, what happens to private members of a base class during inheritance?",
        "answers": [
            {"text": "They are inherited as public members", "correct": false},
            {"text": "They are inherited as private members", "correct": false},
            {"text": "They are not inherited", "correct": true},
            {"text": "They are inherited as protected members", "correct": false}
        ]
    },
    {
        "question": "Which of the following correctly demonstrates public inheritance in C++?",
        "answers": [
            {"text": "class Derived { };", "correct": false},
            {"text": "class Derived : private Base { };", "correct": false},
            {"text": "class Derived : public Base { };", "correct": true},
            {"text": "class Derived : protected Base { };", "correct": false}
        ]
    },
    {
        "question": "What is the main advantage of postfix notation?",
        "answers": [
            {"text": "It simplifies the use of parentheses", "correct": true},
            {"text": "It allows random access to elements", "correct": false},
            {"text": "It ensures higher precedence for addition", "correct": false},
            {"text": "It is used only for integers", "correct": false}
        ]
    },
    {
        "question": "Which algorithm converts infix notation to postfix notation?",
        "answers": [
            {"text": "Use of parentheses, operator precedence, and then removing parentheses", "correct": true},
            {"text": "Direct evaluation of the expression", "correct": false},
            {"text": "Performing addition before multiplication", "correct": false},
            {"text": "Replacing operators with corresponding ASCII values", "correct": false}
        ]
    },
    {
        "question": "In the expression A+B*C, which operation is performed first according to operator precedence?",
        "answers": [
            {"text": "Addition", "correct": false},
            {"text": "Multiplication", "correct": true},
            {"text": "Subtraction", "correct": false},
            {"text": "Division", "correct": false}
        ]
    },
    {
        "question": "What is a deque (double-ended queue)?",
        "answers": [
            {"text": "A queue that supports insertion at both ends", "correct": true},
            {"text": "A circular queue that overwrites old elements", "correct": false},
            {"text": "A priority queue with added operations", "correct": false},
            {"text": "A type of stack", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of the Top() function in a Stack?",
        "answers": [
            {"text": "It adds a new element to the stack", "correct": false},
            {"text": "It removes the top element from the stack", "correct": false},
            {"text": "It retrieves the top element without removing it", "correct": true},
            {"text": "It checks if the stack is full", "correct": false}
        ]
    },
    {
        "question": "What condition indicates that a queue implemented with an array is empty?",
        "answers": [
            {"text": "front == rear", "correct": true},
            {"text": "rear == 0", "correct": false},
            {"text": "front == capacity - 1", "correct": false},
            {"text": "rear == capacity - 1", "correct": false}
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