const questions = [
    {
        "question": "What is a stream in C?",
        "answers": [
            {"text": "A variable used to store data", "correct": false},
            {"text": "A sequence of bytes flowing between a program and a file", "correct": true},
            {"text": "A built-in data structure for arrays", "correct": false},
            {"text": "A network communication channel", "correct": false}
        ]
    },
    {
        "question": "Which function is used to open a file in C?",
        "answers": [
            {"text": "fclose()", "correct": false},
            {"text": "fopen()", "correct": true},
            {"text": "open()", "correct": false},
            {"text": "fprintf()", "correct": false}
        ]
    },
    {
        "question": "What does the fopen() function return if it fails to open a file?",
        "answers": [
            {"text": "0", "correct": false},
            {"text": "NULL", "correct": true},
            {"text": "EOF", "correct": false},
            {"text": "-1", "correct": false}
        ]
    },
    {
        "question": "Which of the following is a valid mode for fopen()?",
        "answers": [
            {"text": "\"w+\"", "correct": true},
            {"text": "\"rtb\"", "correct": false},
            {"text": "\"close\"", "correct": false},
            {"text": "\"reopen\"", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of the fclose() function?",
        "answers": [
            {"text": "To read data from a file", "correct": false},
            {"text": "To write data to a file", "correct": false},
            {"text": "To close a file and free associated resources", "correct": true},
            {"text": "To delete a file", "correct": false}
        ]
    },
    {
        "question": "What does the fgetc() function do?",
        "answers": [
            {"text": "Writes a single character to a file", "correct": false},
            {"text": "Reads a single character from a file", "correct": true},
            {"text": "Moves the file pointer to the end of the file", "correct": false},
            {"text": "Deletes a character from a file", "correct": false}
        ]
    },
    {
        "question": "What is the correct function to write a string to a file?",
        "answers": [
            {"text": "fgets()", "correct": false},
            {"text": "fprintf()", "correct": false},
            {"text": "fputs()", "correct": true},
            {"text": "fread()", "correct": false}
        ]
    },
    {
        "question": "What happens when fseek() is used with SEEK_SET?",
        "answers": [
            {"text": "The file pointer moves to the end of the file", "correct": false},
            {"text": "The file pointer moves to a position relative to the current location", "correct": false},
            {"text": "The file pointer moves to the beginning of the file", "correct": true},
            {"text": "The file pointer remains unchanged", "correct": false}
        ]
    },
    {
        "question": "What is the difference between text and binary file modes in C?",
        "answers": [
            {"text": "Text files use ASCII format; binary files store raw data", "correct": true},
            {"text": "Binary files are faster to read/write", "correct": false},
            {"text": "Text files cannot be opened with fopen()", "correct": false},
            {"text": "There is no difference between them", "correct": false}
        ]
    },
    {
        "question": "What does the fread() function do?",
        "answers": [
            {"text": "Writes data to a binary file", "correct": false},
            {"text": "Reads data from a file into a buffer", "correct": true},
            {"text": "Renames a file", "correct": false},
            {"text": "Deletes a file", "correct": false}
        ]
    },
    {
        "question": "What function is used to determine the end of a file?",
        "answers": [
            {"text": "feof()", "correct": true},
            {"text": "ferror()", "correct": false},
            {"text": "fclose()", "correct": false},
            {"text": "remove()", "correct": false}
        ]
    },
    {
        "question": "What does the ftell() function return?",
        "answers": [
            {"text": "The size of the file", "correct": false},
            {"text": "The current position of the file pointer", "correct": true},
            {"text": "The total number of lines in the file", "correct": false},
            {"text": "NULL if an error occurs", "correct": false}
        ]
    },
    {
        "question": "Which function renames a file in C?",
        "answers": [
            {"text": "remove()", "correct": false},
            {"text": "fclose()", "correct": false},
            {"text": "rename()", "correct": true},
            {"text": "fopen()", "correct": false}
        ]
    },
    {
        "question": "How do you delete a file in C?",
        "answers": [
            {"text": "Using fclose()", "correct": false},
            {"text": "Using remove()", "correct": true},
            {"text": "Using delete()", "correct": false},
            {"text": "Using fseek()", "correct": false}
        ]
    },
    {
        "question": "What happens if fwrite() writes fewer objects than requested?",
        "answers": [
            {"text": "It returns NULL", "correct": false},
            {"text": "It terminates the program", "correct": false},
            {"text": "It returns the number of objects successfully written", "correct": true},
            {"text": "It raises an error message", "correct": false}
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