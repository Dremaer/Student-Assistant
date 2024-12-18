const questions = [
    {
        "question": "What type of control structure is if in C?",
        "answers": [
            {"text": "Looping control structure", "correct": false},
            {"text": "Conditional control structure", "correct": true},
            {"text": "Function control structure", "correct": false},
            {"text": "Input/output control structure", "correct": false}
        ]
    },
    {
        "question": "What happens when the else block is not specified in an if condition?",
        "answers": [
            {"text": "Nothing happens if the condition is false", "correct": true},
            {"text": "Program crashes", "correct": false},
            {"text": "An error occurs during compilation", "correct": false},
            {"text": "The program skips the statement", "correct": false}
        ]
    },
    {
        "question": "How many times will the following loop run?<br><br>for(int i = 1; i <= 5; i++) {<br>&nbsp;&nbsp;&nbsp;    printf(\"%d \", i);<br>}",
        "answers": [
            {"text": "4 times", "correct": false},
            {"text": "5 times", "correct": true},
            {"text": "6 times", "correct": false},
            {"text": "Infinite", "correct": false}
        ]
    },
    {
        "question": "Which statement is used to terminate a switch case?",
        "answers": [
            {"text": "end", "correct": false},
            {"text": "exit", "correct": false},
            {"text": "break", "correct": true},
            {"text": "return", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of the default keyword in a switch statement?",
        "answers": [
            {"text": "Acts as a fallback when no case matches", "correct": true},
            {"text": "Stops the program execution", "correct": false},
            {"text": "Declares a variable", "correct": false},
            {"text": "Skips all other cases", "correct": false}
        ]
    },
    {
        "question": "Which loop ensures the body of the loop executes at least once?",
        "answers": [
            {"text": "for loop", "correct": false},
            {"text": "while loop", "correct": false},
            {"text": "do-while loop", "correct": true},
            {"text": "Infinite loop", "correct": false}
        ]
    },
    {
        "question": "What does the continue statement do in a loop?",
        "answers": [
            {"text": "Exits the loop immediately", "correct": false},
            {"text": "Skips the current iteration and continues the next iteration", "correct": true},
            {"text": "Restarts the program", "correct": false},
            {"text": "Executes all statements after the loop", "correct": false}
        ]
    },
    {
        "question": "What is the output of the following program?<br><br>int i = 1;<br>while(i <= 3) {<br>&nbsp;&nbsp;&nbsp;  printf(\"%d \", i++);<br>}",
        "answers": [
            {"text": "1 2 3", "correct": true},
            {"text": "1 2", "correct": false},
            {"text": "1 2 3 4", "correct": false},
            {"text": "Infinite loop", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of the break statement in a loop?",
        "answers": [
            {"text": "Skips to the next iteration", "correct": false},
            {"text": "Exits the loop entirely", "correct": true},
            {"text": "Restarts the loop", "correct": false},
            {"text": "Jumps to a specific line in the program", "correct": false}
        ]
    },
    {
        "question": "What does the following code output?<br><br>for(int i = 1; i <= 3; i++) {<br>&nbsp;&nbsp;&nbsp;  for(char ch = 'A'; ch <= 'C'; ch++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  printf(\"%c \", ch);<br>&nbsp;&nbsp;&nbsp;    }<br>&nbsp;&nbsp;&nbsp;    printf(\"\\n\");<br>}",
        "answers": [
            {"text": "A B C printed once", "correct": false},
            {"text": "A B C A B C A B C", "correct": false},
            {"text": "A B C three times in separate lines", "correct": true},
            {"text": "Infinite output of A B C", "correct": false}
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
    window.location.href = "/quizs/quiz_c";
});

startQuiz();