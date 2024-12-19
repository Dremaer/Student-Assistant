const questions = [
  
    {
        "question": "What is a proposition in formal logic?",
        "answers": [
            {"text": "A question that requires interpretation.", "correct": false},
            {"text": "A statement that can be true or false.", "correct": true},
            {"text": "A conditional statement.", "correct": false},
            {"text": "A mathematical formula.", "correct": false}
        ]
    },
    {
        "question": "What does p∧q represent?",
        "answers": [
            {"text": "p and q are both true.", "correct": true},
            {"text": "p or q is true.", "correct": false},
            {"text": "p implies q.", "correct": false},
            {"text": "p is not true.", "correct": false}
        ]
    },

    {
        "question": "What is the meaning of p⇒q?",
        "answers": [
            {"text": "p if and only if q.", "correct": false},
            {"text": "If p is true, then q is true.", "correct": true},
            {"text": "p or q.", "correct": false},
            {"text": "p and q are both false.", "correct": false}
        ]
    },

    {
        "question": "What is a truth table used for?",
        "answers": [
            {"text": "To determine the probability of events.", "correct": false},
            {"text": "To calculate the cardinality of a set.", "correct": false},
            {"text": "To simplify mathematical equations.", "correct": false},
            {"text": "To show the truth values of logical expressions.", "correct": true}
        ]
    },

    {
        "question": "Which of the following represents the negation of 𝑝?",
        "answers": [
            {"text": "p∨q", "correct": false},
            {"text": "∼p", "correct": true},
            {"text": "p∧q", "correct": false},
            {"text": "p⇒q", "correct": false}
        ]
    },

    {
        "question": "What does (p∨q)∧∼(p∧q) mean in words?",
        "answers": [
            {"text": "p and q are both true.", "correct": false},
            {"text": "p implies q.", "correct": false},
            {"text": "Both p and q are false.", "correct": false},
            {"text": "Either q, but not both.", "correct": true}
        ]
    },

    {
        "question": "Which of the following is an example of a well-formed formula (WFF)?",
        "answers": [
            {"text": "p⇒(q∧r)", "correct": true},
            {"text": "p⇒", "correct": false},
            {"text": "∼(pq)", "correct": false},
            {"text": "pqr∧", "correct": false}
        ]
    },

    {
        "question": "What is the definition of a tautology?",
        "answers": [
            {"text": "A formula that is true for at least one interpretation.", "correct": false},
            {"text": "A formula that is false in all interpretations.", "correct": false},
            {"text": "A formula that has no meaning.", "correct": false},
            {"text": "A formula that is true in all possible interpretations.", "correct": true}
        ]
    },
    {
        "question": "What does the quantifier ∀x(P(x)) represent?",
        "answers": [
            {"text": "There exists at least one P(x) is true.", "correct": false},
            {"text": "P(x) is true for all x.", "correct": true},
            {"text": "P(x) is false for some x.", "correct": false},
            {"text": "P(x) implies x is unique.", "correct": false}
        ]
    },
    {
        "question": "What is the negation of ∀x(P(x))?",
        "answers": [
            {"text": "∀x(∼P(x))", "correct": false},
            {"text": "∃x(P(x)).", "correct": false},
            {"text": "∼P(x)∧P(x)", "correct": false},
            {"text": "∼∀x(P(x))=∃x(∼P(x)).", "correct": true}
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
    window.location.href = "/quizs/quizs_Discrete_Math";
});

startQuiz();