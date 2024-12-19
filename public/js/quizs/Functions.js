const questions = [
  
    {
        "question": "What is a function?",
        "answers": [
            {"text": "A mapping where every input has a unique output.", "correct": true},
            {"text": "A relation with no outputs.", "correct": false},
            {"text": "A relation where multiple inputs map to one output.", "correct": false},
            {"text": "A set of ordered pairs with identical values.", "correct": false}
        ]
    },
    {
        "question": "What is the domain of a function?",
        "answers": [
            {"text": "The set of possible outputs of a function.", "correct": false},
            {"text": "The range of a function.", "correct": false},
            {"text": "The set of inputs of a function.", "correct": true},
            {"text": "A subset of the codomain.", "correct": false}
        ]
    },
    {
        "question": "What is an identity function IdX?",
        "answers": [
            {"text": "A function that outputs x+1 for every x∈X.", "correct": false},
            {"text": "A function with no inputs or outputs.", "correct": false},
            {"text": "A function that swaps inputs and outputs.", "correct": false},
            {"text": "A function that maps each x∈X to itself.", "correct": true}
        ]
    },
    {
        "question": "What defines a 1-to-1 (injective) function?",
        "answers": [
            {"text": "Each input maps to exactly one output, and no two inputs have the same output.", "correct": true},
            {"text": "Each output maps to exactly one input.", "correct": false},
            {"text": "Each input has multiple outputs.", "correct": false},
            {"text": "Every output in the codomain is mapped to.", "correct": false}
        ]
    },
    {
        "question": "What is the property of an onto (surjective) function?",
        "answers": [
            {"text": "Every output in the codomain is mapped to by at least one input.", "correct": true},
            {"text": "Each input maps to a unique output.", "correct": false},
            {"text": "The function has no outputs.", "correct": false},
            {"text": "The function is undefined for some inputs.", "correct": false}
        ]
    },
    {
        "question": "Which of the following is a bijective function?",
        "answers": [
            {"text": "A function that is neither injective nor surjective.", "correct": false},
            {"text": "A function that is both injective and surjective.", "correct": true},
            {"text": "A function where inputs are undefined.", "correct": false},
            {"text": "A function with repeated outputs.", "correct": false}
        ]
    },
    {
        "question": "What is the composition of two functions F and G?",
        "answers": [
            {"text": "F∪G.", "correct": false},
            {"text": "F∩G.", "correct": false},
            {"text": "(G∘F)(x)=G(F(x)).", "correct": true},
            {"text": "F(x)+G(x).", "correct": false}
        ]
    },
    {
        "question": "What is the inverse function F^−1of a function F?",
        "answers": [
            {"text": "A function that swaps the roles of the domain and codomain.", "correct": true},
            {"text": "A function that outputs the square root of x.", "correct": false},
            {"text": "A function with no domain.", "correct": false},
            {"text": "A function that maps each output back to the same input.", "correct": false}
        ]
    },
    {
        "question": "What is a partial function?",
        "answers": [
            {"text": "A function with multiple codomains.", "correct": false},
            {"text": "A function where inputs have undefined outputs.", "correct": false},
            {"text": "A function defined on a subset of the domain.", "correct": true},
            {"text": "A function that outputs only 0s and 1s.", "correct": false}
        ]
    },
    {
        "question": "What is the Pigeonhole Principle?",
        "answers": [
            {"text": "If 𝑚 items are placed in n containers with m>n, then at least one container has more than one item", "correct": true},
            {"text": "A principle stating all functions are injective.", "correct": false},
            {"text": "A principle to define partial functions.", "correct": false},
            {"text": "A principle that limits codomain values.", "correct": false}
        ]
    },
    {
        "question": "Which of the following represents a well-formed bijection?",
        "answers": [
            {"text": "F(x)=2x where F:R→R.", "correct": false},
            {"text": "F(x)=x^2 where F:[0,∞)→[0,∞).", "correct": false},
            {"text": "F(x)=x+1 where F:Z→Z.", "correct": true},
            {"text": "F(x)=1 for all x.", "correct": false}
        ]
    },
    {
        "question": "Which property must a function F:X→Y satisfy to have an inverse F^−1?",
        "answers": [
            {"text": "It must be surjective.", "correct": false},
            {"text": "It must be bijective.", "correct": true},
            {"text": "It must be injective.", "correct": false},
            {"text": "It must have a restricted domain.", "correct": false}
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