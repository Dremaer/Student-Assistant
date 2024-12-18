const questions = [
  
    {
        "question": "What is the primary advantage of hash tables over binary search trees?",
        "answers": [
            {"text": "They require less memory.", "correct": false},
            {"text": "They have an average search time of O(1).", "correct": true},
            {"text": "They do not require a hash function.", "correct": false},
            {"text": "They can handle ordered data efficiently.", "correct": false}
        ]
    },
    {
        "question": "What is the primary drawback of using a hash table?",
        "answers": [
            {"text": "They are slower than binary search trees.", "correct": false},
            {"text": "They cannot handle duplicate keys.", "correct": false},
            {"text": "They do not support ordered traversal of data.", "correct": true},
            {"text": "They require sorting before insertion.", "correct": false}
        ]
    },
    {
        "question": "Which of the following is a common method to handle collisions in a hash table?",
        "answers": [
            {"text": "Linear probing.", "correct": true},
            {"text": "Sorting all elements.", "correct": false},
            {"text": "Rehashing every key.", "correct": false},
            {"text": "Using a binary search tree.", "correct": false}
        ]
    },
    {
        "question": "What is a hash function used for?",
        "answers": [
            {"text": "Sorting elements in the hash table.", "correct": false},
            {"text": "Determining the location of a key in the table.", "correct": true},
            {"text": "Ensuring the keys are stored in ascending order.", "correct": false},
            {"text": "Replacing duplicate keys with unique ones.", "correct": false}
        ]
    },
    {
        "question": "In a hash table with a size of 13, where h(x)=x mod 13, where will the key 16 be stored?",
        "answers": [
            {"text": "Index 2", "correct": false},
            {"text": "Index 13", "correct": false},
            {"text": "Index 16", "correct": false},
            {"text": "Index 3", "correct": true}
        ]
    },
    {
        "question": "What is the goal of using a prime number for the hash table size?",
        "answers": [
            {"text": "To reduce memory usage.", "correct": false},
            {"text": "To speed up deletion.", "correct": false},
            {"text": "To avoid clustering of hash values.", "correct": true},
            {"text": "To minimize collisions entirely.", "correct": false}
        ]
    },
    {
        "question": "What is the main difference between linear probing and chaining for collision resolution?",
        "answers": [
            {"text": "Chaining uses linked lists, while linear probing stores keys in the table itself.", "correct": true},
            {"text": "Linear probing uses linked lists, while chaining does not.", "correct": false},
            {"text": "Linear probing is faster than chaining in all cases.", "correct": false},
            {"text": "Chaining is used only for ordered data.", "correct": false}
        ]
    },
    {
        "question": "Which hashing method reduces clustering by using a secondary hash function?",
        "answers": [
            {"text": "Linear probing", "correct": false},
            {"text": "Quadratic probing", "correct": false},
            {"text": "Double hashing", "correct": true},
            {"text": "Separate chaining", "correct": false}
        ]
    },
    {
        "question": "Why can’t you simply leave a slot empty after deleting a key in a hash table?",
        "answers": [
            {"text": "It would increase memory usage.", "correct": false},
            {"text": "It would slow down all future insertions.", "correct": false},
            {"text": "It would require rehashing all elements.", "correct": false},
            {"text": "It would prevent finding other keys inserted through collision resolution.", "correct": true}
        ]
    },
    {
        "question": "What is the load factor 𝛼 in a hash table?",
        "answers": [
            {"text": "The ratio of keys stored to table size.", "correct": true},
            {"text": "The ratio of table size to keys stored.", "correct": false},
            {"text": "The number of collisions per key.", "correct": false},
            {"text": "The total number of keys squared.", "correct": false}
        ]
    },
    {
        "question": "What is the average time complexity for searching in a hash table with a low load factor?",
        "answers": [
            {"text": "O(n)", "correct": false},
            {"text": "O(logn)", "correct": false},
            {"text": "O(1)", "correct": true},
            {"text": "O(n^2)", "correct": false}
        ]
    },
    {
        "question": "What is the typical strategy when the load factor 𝛼 exceeds a certain threshold?",
        "answers": [
            {"text": "Halve the table size.", "correct": false},
            {"text": "Double the table size and rehash all elements.", "correct": true},
            {"text": "Delete all elements.", "correct": false},
            {"text": "Change the hash function.", "correct": false}
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