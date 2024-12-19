const questions = [
    {
        "question": "What is the main purpose of the `use` function in Kotlin?",
        "answers": [
            {"text": "To handle exceptions automatically.", "correct": false},
            {"text": "To close resources automatically when the block is exited.", "correct": true},
            {"text": "To replace the `try-catch` block entirely.", "correct": false},
            {"text": "To enable multi-threaded operations.", "correct": false}
        ]
    },
    {
        "question": "Which class in Kotlin is used for reading bytes from a file?",
        "answers": [
            {"text": "Reader", "correct": false},
            {"text": "FileInputStream", "correct": true},
            {"text": "FileReader", "correct": false},
            {"text": "InputStreamReader", "correct": false}
        ]
    },
    {
        "question": "What does the `filter` function do in Kotlin collections?",
        "answers": [
            {"text": "Removes duplicates from a collection.", "correct": false},
            {"text": "Returns a new collection containing elements that satisfy a given condition.", "correct": true},
            {"text": "Modifies the original collection to include only elements that match a condition.", "correct": false},
            {"text": "Converts a collection into a map.", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of `sortedSetOf` in Kotlin?",
        "answers": [
            {"text": "Creates a set with elements sorted by insertion order.", "correct": false},
            {"text": "Creates a set with elements sorted naturally or by a custom comparator.", "correct": true},
            {"text": "Creates a set that allows duplicate elements.", "correct": false},
            {"text": "Creates a mutable set that supports reverse order sorting.", "correct": false}
        ]
    },
    {
        "question": "Which function is used to iterate over each element and index in a list?",
        "answers": [
            {"text": "forEach", "correct": false},
            {"text": "forEachIndexed", "correct": true},
            {"text": "map", "correct": false},
            {"text": "filterIndexed", "correct": false}
        ]
    },
    {
        "question": "What does the following code do?<br><br>val arr = arrayOf(0, 1, 4, 9, 16, 25)<br>println(arr.slice(2..4))<br>",
        "answers": [
            {"text": "Prints elements at indices 2, 3, and 4.", "correct": true},
            {"text": "Slices the array into subarrays of size 2.", "correct": false},
            {"text": "Modifies the original array to contain elements from indices 2 to 4.", "correct": false},
            {"text": "Throws an error because slicing is not allowed.", "correct": false}
        ]
    },
    {
        "question": "What is the main difference between `map` and `flatMap` in Kotlin?",
        "answers": [
            {"text": "`map` returns a flattened collection, while `flatMap` preserves nesting.", "correct": false},
            {"text": "`map` applies a transformation function to each element, while `flatMap` transforms and flattens nested collections.", "correct": true},
            {"text": "`flatMap` is faster but less flexible than `map`.", "correct": false},
            {"text": "They are interchangeable and produce the same result.", "correct": false}
        ]
    },
    {
        "question": "What does the `reduce` function do in Kotlin?",
        "answers": [
            {"text": "Combines all elements of a collection into a single value by applying a lambda function.", "correct": true},
            {"text": "Filters elements in a collection based on a condition.", "correct": false},
            {"text": "Sorts elements in a collection in descending order.", "correct": false},
            {"text": "Removes duplicate elements from a collection.", "correct": false}
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
    window.location.href = "/quizs/quiz_oop";
});

startQuiz();