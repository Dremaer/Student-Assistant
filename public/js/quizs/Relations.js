const questions = [
  
    {
        "question": "What is a relation R in set theory?",
        "answers": [
            {"text": "A subset of the Cartesian product of two sets.", "correct": true},
            {"text": "A function that maps elements of a set.", "correct": false},
            {"text": "A set of ordered pairs with no repetition.", "correct": false},
            {"text": "A formula that relates two variables.", "correct": false}
        ]
    },
    {
        "question": "What does R^−1 represent for a relation R?",
        "answers": [
            {"text": "The symmetric closure of R.", "correct": false},
            {"text": "The composition of R with itself.", "correct": false},
            {"text": "The transitive closure of 𝑅.", "correct": false},
            {"text": "The inverse of R, where all pairs (x,y) are swapped to (y,x).", "correct": true}
        ]
    },
    {
        "question": "Which of the following is an example of a reflexive relation?",
        "answers": [
            {"text": "R={(x,y)∣x=y} on set X.", "correct": true},
            {"text": "R={(x,y)∣xy}.", "correct": false},
            {"text": "R={(x,y)∣x>y}.", "correct": false},
            {"text": "R=∅.", "correct": false}
        ]
    },
    {
        "question": "What is the symmetric closure of a relation R?",
        "answers": [
            {"text": "R∪R^−1.", "correct": true},
            {"text": "R∩R^−1.", "correct": false},
            {"text": "R∪IdX.", "correct": false},
            {"text": "R⋅R (Composition of 𝑅 with itself).", "correct": false}
        ]
    },
    {
        "question": "What is a transitive relation?",
        "answers": [
            {"text": "If (x,y)∈ R for x=y.", "correct": false},
            {"text": "If (x,x)∈R for all x.", "correct": false},
            {"text": "If (x,y)∈R, then (y,x)∈R.", "correct": false},
            {"text": "If (x,y)∈R and (y,z)∈R, then (x,z)∈R.", "correct": true}
        ]
    },
    {
        "question": "What is the transitive closure 𝑅+ of a relation R?",
        "answers": [
            {"text": "R∪R^−1.", "correct": false},
            {"text": "R∪IdX.", "correct": false},
            {"text": "The smallest relation that contains R and is transitive.", "correct": true},
            {"text": "The inverse of R.", "correct": false}
        ]
    },
    {
        "question": "What is an equivalence relation?",
        "answers": [
            {"text": "A relation that is symmetric and transitive.", "correct": false},
            {"text": "A relation that is reflexive, symmetric, and transitive.", "correct": true},
            {"text": "A relation that is antisymmetric and transitive.", "correct": false},
            {"text": "A relation that is irreflexive and symmetric.", "correct": false}
        ]
    },
    {
        "question": " If R is a relation on set X, what does R∪Id Xrepresent?",
        "answers": [
            {"text": "The reflexive closure of R.", "correct": true},
            {"text": "The symmetric closure of R.", "correct": false},
            {"text": "The transitive closure of R.", "correct": false},
            {"text": "The inverse of R.", "correct": false}
        ]
    },
    {
        "question": "What is a partial order relation?",
        "answers": [
            {"text": "A relation that is reflexive, symmetric, and transitive.", "correct": false},
            {"text": "A relation that is irreflexive and symmetric.", "correct": false},
            {"text": "A relation that is reflexive, antisymmetric, and transitive.", "correct": true},
            {"text": "A relation that is symmetric and transitive.", "correct": false}
        ]
    },
    {
        "question": "What is the total order relation?",
        "answers": [
            {"text": "A relation that is reflexive and symmetric.", "correct": false},
            {"text": "A partial order where all pairs of elements are comparable.", "correct": true},
            {"text": "A relation that is transitive and antisymmetric.", "correct": false},
            {"text": "A relation that is symmetric and transitive.", "correct": false}
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