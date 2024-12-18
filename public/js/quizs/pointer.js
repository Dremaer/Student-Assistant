const questions = [
    {
        "question": "What is a pointer in C?",
        "answers": [
            {"text": "A variable that stores a memory address", "correct": true},
            {"text": "A function that manipulates arrays", "correct": false},
            {"text": "A constant value", "correct": false},
            {"text": "A keyword to allocate memory", "correct": false}
        ]
    },
    {
        "question": "What does the & operator do in C?",
        "answers": [
            {"text": "Dereferences a pointer", "correct": false},
            {"text": "Returns the address of a variable", "correct": true},
            {"text": "Performs logical AND operation", "correct": false},
            {"text": "Increments a pointer value", "correct": false}
        ]
    },
    {
        "question": "What is the output of the following code?<br><br>int num = 10, *ptr;<br>ptr = &num ; <br>printf(\"%d\", *ptr);",
        "answers": [
            {"text": "10", "correct": true},
            {"text": "Address of `num`", "correct": false},
            {"text": "Compilation error", "correct": false},
            {"text": "Undefined behavior", "correct": false}
        ]
    },
    {
        "question": "How many bytes does a pointer variable typically occupy on a 32-bit system?",
        "answers": [
            {"text": "2 bytes", "correct": false},
            {"text": "4 bytes", "correct": true},
            {"text": "8 bytes", "correct": false},
            {"text": "Depends on the data type", "correct": false}
        ]
    },
    {
        "question": "What does the * operator do when used with a pointer?",
        "answers": [
            {"text": "Multiplies two variables", "correct": false},
            {"text": "Declares a pointer variable", "correct": false},
            {"text": "Dereferences a pointer to access the value at the memory address", "correct": true},
            {"text": "Allocates memory dynamically", "correct": false}
        ]
    },
    {
        "question": "Which statement is TRUE about arrays and pointers?",
        "answers": [
            {"text": "The array name points to the first element of the array", "correct": true},
            {"text": "An array can only be accessed using indices", "correct": false},
            {"text": "Pointers cannot access arrays", "correct": false},
            {"text": "The size of a pointer depends on the array size", "correct": false}
        ]
    },
    {
        "question": "What happens when you increment a pointer variable?",
        "answers": [
            {"text": "It adds 1 to the value stored in the pointer", "correct": false},
            {"text": "It points to the next memory address of its data type", "correct": true},
            {"text": "It moves to the previous address", "correct": false},
            {"text": "It throws an error", "correct": false}
        ]
    },
    {
        "question": "What is passed to a function when you pass an array as an argument?",
        "answers": [
            {"text": "A copy of the entire array", "correct": false},
            {"text": "The starting address of the array", "correct": true},
            {"text": "The size of the array", "correct": false},
            {"text": "Only the first element of the array", "correct": false}
        ]
    },
    {
        "question": "What is the difference between call by value and call by reference?",
        "answers": [
            {"text": "Call by value passes a copy of the variable, call by reference passes the memory address", "correct": true},
            {"text": "Call by value passes the memory address, call by reference passes the value", "correct": false},
            {"text": "Both pass the same values", "correct": false},
            {"text": "There is no difference", "correct": false}
        ]
    },
    {
        "question": "What is the output of this code?<br><br>void swap(int *a, int *b) {<br>&nbsp;&nbsp;&nbsp;   int temp = *a;<br>&nbsp;&nbsp;&nbsp; *a = *b;<br>&nbsp;&nbsp;&nbsp; *b = temp;<br>}<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;  int x = 5, y = 10;<br>&nbsp;&nbsp;&nbsp;  swap(&x, &y);<br>&nbsp;&nbsp;&nbsp;  printf(\"%d %d\", x, y);<br>&nbsp;&nbsp;&nbsp;  return 0;<br>}",
        "answers": [
            {"text": "5 10", "correct": false},
            {"text": "10 5", "correct": true},
            {"text": "0 0", "correct": false},
            {"text": "Compilation error", "correct": false}
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