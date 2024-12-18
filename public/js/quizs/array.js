const questions = [
    {
        "question": "What is the primary advantage of using a sparse matrix representation?",
        "answers": [
            {"text": "Simplifies computation", "correct": false},
            {"text": "Saves memory by only storing non-zero elements", "correct": true},
            {"text": "Improves computational complexity", "correct": false},
            {"text": "Eliminates the need for row and column indices", "correct": false}
        ]
    },
    {
        "question": "Which of the following is a valid operation on sparse matrices?",
        "answers": [
            {"text": "Exponentiation", "correct": false},
            {"text": "Creation, addition, multiplication, transpose", "correct": true},
            {"text": "Scalar division", "correct": false},
            {"text": "Sorting", "correct": false}
        ]
    },
    {
        "question": "In the row-major order of a multidimensional array, how is the address of an element calculated?",
        "answers": [
            {"text": "α + i × u2", "correct": false},
            {"text": "α + i × u2 × u3 + j × u3 + k", "correct": true},
            {"text": "α + i × j × k", "correct": false},
            {"text": "α + u2 + u3", "correct": false}
        ]
    },
    {
        "question": "Which data structure is used to store a sparse matrix in an efficient manner?",
        "answers": [
            {"text": "Linked List", "correct": false},
            {"text": "2D Array", "correct": false},
            {"text": "Triplet format (row, col, value)", "correct": true},
            {"text": "Hash Table", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of the Fast Transpose algorithm for sparse matrices?",
        "answers": [
            {"text": "O(rows + columns)", "correct": false},
            {"text": "O(terms + columns)", "correct": true},
            {"text": "O(rows × columns)", "correct": false},
            {"text": "O(columns^2)", "correct": false}
        ]
    },
    {
        "question": "Which of the following describes a diagonal matrix?",
        "answers": [
            {"text": "Only elements on the main diagonal are non-zero", "correct": true},
            {"text": "It has equal values in all rows", "correct": false},
            {"text": "It is a triangular matrix", "correct": false},
            {"text": "It has zero values in the diagonal", "correct": false}
        ]
    },
    {
        "question": "How is a lower triangular matrix stored in memory using a row-major scheme?",
        "answers": [
            {"text": "All elements are stored sequentially", "correct": false},
            {"text": "Only non-zero elements are stored with calculated indices", "correct": true},
            {"text": "Columns are stored contiguously", "correct": false},
            {"text": "Rows are stored in ascending order", "correct": false}
        ]
    },
    {
        "question": "What operation is commonly used to optimize the transpose of a sparse matrix?",
        "answers": [
            {"text": "Sorting the matrix elements", "correct": false},
            {"text": "Calculating row size and row start arrays", "correct": true},
            {"text": "Using linked lists for storage", "correct": false},
            {"text": "Multiplying non-zero elements by -1", "correct": false}
        ]
    },
    {
        "question": "What is a key difference between struct and class in C++?",
        "answers": [
            {"text": "struct cannot have member functions", "correct": false},
            {"text": "struct defaults to public members, class defaults to private", "correct": true},
            {"text": "class cannot have static members", "correct": false},
            {"text": "struct cannot be used for data encapsulation", "correct": false}
        ]
    },
    {
        "question": "What does the following formula calculate in a multidimensional array? A[i1][i2]...[in] = α + i1 × (u2 × u3 × ... × un) + i2 × (u3 × ... × un) + ... + in",
        "answers": [
            {"text": "Array index", "correct": false},
            {"text": "Element address in memory", "correct": true},
            {"text": "Array size", "correct": false},
            {"text": "Total non-zero elements", "correct": false}
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