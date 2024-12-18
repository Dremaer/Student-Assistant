const questions = [
    {
        "question": "What is a sample space in probability theory?",
        "answers": [
            {"text": "A subset of possible outcomes of an experiment", "correct": false},
            {"text": "The set of all possible outcomes of an experiment", "correct": true},
            {"text": "The outcomes that occur with equal probability", "correct": false},
            {"text": " A set of mutually exclusive events", "correct": false}
        ]
    },
    {
        "question": "What is the probability of the complement of an event A?",
        "answers": [
            {"text": "P(A)", "correct": false},
            {"text": "1-P(A)", "correct": true},
            {"text": "P(A)+1", "correct": false},
            {"text": "1/P(A)", "correct": false}
        ]
    },
    {
        "question": "Which rule is used to find the probability of the intersection of two independent events A and B?",
        "answers": [
            {"text": "Additive Rule", "correct": false},
            {"text": "Multiplication Rule", "correct": true},
            {"text": "Conditional Probability Rule", "correct": false},
            {"text": "Bayes' Rule", "correct": false}
        ]
    },    
    {
        "question": "In the context of Bayes' Rule, what does P(A∣B) represent?",
        "answers": [
            {"text": " The probability of A and B occurring together", "correct": false},
            {"text": "The probability of B given A", "correct": false},
            {"text": "The probability of A given 𝐵", "correct": true},
            {"text": "The sum of the probabilities of A and 𝐵", "correct": false}
        ]
    },    
    {
        "question": "What is the total probability theorem used for?",
        "answers": [
            {"text": "Calculating probabilities of disjoint events", "correct": false},
            {"text": "Determining the probability of a union of events", "correct": false},
            {"text": "Calculating the probability of an event based on its conditional probabilities", "correct": true},
            {"text": "Simplifying dependent events", "correct": false}
        ]
    },    
    {
        "question": "What is the result of applying the additive rule to events A and B?",
        "answers": [
            {"text": "P(A∩B)", "correct": false},
            {"text": "P(A)+P(B)−P(A∩B)", "correct": true},
            {"text": "P(A)+P(B)", "correct": false},
            {"text": "P(A)⋅P(B)", "correct": false}
        ]
    },    
    {
        "question": "What is the significance of the independence of events in probability?",
        "answers": [
            {"text": "It ensures P(A∩B)=P(A)+P(B)", "correct": false},
            {"text": "It ensures P(A∩B)=P(A)⋅P(B)", "correct": true},
            {"text": "It ensures P(A∣B)=P(B∣A)", "correct": false},
            {"text": "It ensures P(A∪B)=P(A)⋅P(B)", "correct": false}
        ]
    },    
    {
        "question": "In a Venn diagram, what does the overlapping region of two sets A and B represent?",
        "answers": [
            {"text": "A∪B", "correct": false},
            {"text": "A∩B", "correct": true},
            {"text": "A∖B", "correct": false},
            {"text": "B∖A", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of conditional probability?",
        "answers": [
            {"text": "To calculate probabilities when two events are independent", "correct": false},
            {"text": "To calculate the probability of an event given another event has occurred", "correct": true},
            {"text": "To find probabilities using the complement rule", "correct": false},
            {"text": "To identify mutually exclusive events", "correct": false}
        ]
    },
    {
        "question": "How is Bayes' Rule expressed mathematically?",
        "answers": [
            {"text": "P(A∣B)= P(A∩B)/P(B)", "correct": false},
            {"text": "P(A∩B)=P(A)+P(B)", "correct": false},
            {"text": "P(A∣B)=P(B∣A)P(B)", "correct": false},
            {"text": "P(A∣B)= P(B∣A)P(A)/P(B)​", "correct": true}
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
    window.location.href = "/quizs/quizs_probability";
});

startQuiz();