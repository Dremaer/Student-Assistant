const questions = [
  
    {
        "question": "How do you prove that set A is a proper subset of set B?",
        "answers": [
            {"text": "Show that all elements of A are in 𝐵 and A=B.", "correct": false},
            {"text": "Show that A⊆B and 𝐴≠𝐵.", "correct": true},
            {"text": "Show that A∩B=A.", "correct": false},
            {"text": "Show that A∪B=B.", "correct": false}
        ]
    },
    {
        "question": "What is the formula for the cardinality of ∣A∪B∣?",
        "answers": [
            {"text": "∣A∣+∣B∣", "correct": false},
            {"text": "∣A∣+∣B∣−∣A∩B∣", "correct": true},
            {"text": "∣A∣⋅∣B∣", "correct": false},
            {"text": "∣A∣−∣B∣", "correct": false}
        ]
    },
    {
        "question": "Which of the following is true according to De Morgan's Laws?",
        "answers": [
            {"text": "(A ∪ B)^c = A^c ∩ B^c", "correct": true},
            {"text": "(A∩B)^c = A^c ∪ B.", "correct": false},
            {"text": "(A-B)^c = A∪B^c.", "correct": false},
            {"text": "(A∪B)^c=A^c∪B.", "correct": false}
        ]
    },
    {
        "question": "What is the power set P(A) of a set A?",
        "answers": [
            {"text": "The set of all proper subsets of 𝐴.", "correct": false},
            {"text": "The union of all elements of A.", "correct": false},
            {"text": "The intersection of all elements of A.", "correct": false},
            {"text": "The set of all subsets of A.", "correct": true}
        ]
    },
    {
        "question": "What is the condition for two sets A and 𝐵 to be disjoint?",
        "answers": [
            {"text": "A∩B=A", "correct": false},
            {"text": "A∩B={}", "correct": true},
            {"text": "A∩B=A", "correct": false},
            {"text": "A∩B=B", "correct": false}
        ]
    },
    {
        "question": "What does A⊖B represent in set operations?",
        "answers": [
            {"text": "A∩B.", "correct": false},
            {"text": "(A−B)∪(B−A).", "correct": true},
            {"text": "A∪B.", "correct": false},
            {"text": "A⊂B.", "correct": false}
        ]
    },
    {
        "question": "What must be shown in the base case of mathematical induction?",
        "answers": [
            {"text": "Prove that the statement is true for n=k.", "correct": false},
            {"text": "Prove that the statement is true for n = n0.", "correct": true},
            {"text": "Prove that the statement is true for n = k+1", "correct": false},
            {"text": "Prove that the statement is false for n = n0", "correct": false}
        ]
    },
    {
        "question": "Which set operation law is valid?",
        "answers": [
            {"text": "A∩(B∪C)=(A∩B)∪(A∩C)", "correct": true},
            {"text": "A∪(B∩C)=(A∪B)∩(A∪C).", "correct": false},
            {"text": "A∩A={}.", "correct": false},
            {"text": "A∪{}={}.", "correct": false}
        ]
    },
    {
        "question": "How do you disprove a statement using a counterexample?",
        "answers": [
            {"text": "Prove the statement is true for all cases.", "correct": false},
            {"text": "Prove the contrapositive of the statement.", "correct": false},
            {"text": "Prove that two sets are equal.", "correct": false},
            {"text": "Find a specific case where the statement is false.", "correct": true}
        ]
    },
    {
        "question": "What does A∩B represent in set theory?",
        "answers": [
            {"text": "The set of elements in A or B.", "correct": false},
            {"text": "The set of elements in A but not in B.", "correct": false},
            {"text": "The set of elements in both A and B.", "correct": true},
            {"text": "The union of all elements in 𝐴 and B.", "correct": false}
        ]
    },
    {
        "question": "",
        "answers": [
            {"text": "", "correct": true},
            {"text": "", "correct": false},
            {"text": "", "correct": false},
            {"text": "", "correct": false}
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
    window.location.href = "/quizs/quizs_ml";
});

startQuiz();