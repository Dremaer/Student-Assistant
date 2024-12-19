const questions = [
  
    {
        "question": "What is the time complexity of Bubble Sort in the worst case?",
        "answers": [
            {"text": "O(n)", "correct": false},
            {"text": "𝑂(𝑛log𝑛)", "correct": false},
            {"text": "O(n^2)", "correct": true},
            {"text": "O(1)", "correct": false}
        ]
    },
    {
        "question": "Which of the following is NOT a characteristic of Insertion Sort?",
        "answers": [
            {"text": "It is a stable sorting algorithm.", "correct": false},
            {"text": "It works well for small input sizes.", "correct": false},
            {"text": "Its worst-case time complexity is 𝑂(𝑛^2).", "correct": false},
            {"text": "It cannot sort data in place", "correct": true}
        ]
    },
    {
        "question": "What is the main principle behind Merge Sort?",
        "answers": [
            {"text": "Dividing the problem into two equal halves and combining results.", "correct": true},
            {"text": "Repeatedly swapping adjacent elements.", "correct": false},
            {"text": "Partitioning around a pivot.", "correct": false},
            {"text": "Counting the occurrences of elements.", "correct": false}
        ]
    },
    {
        "question": "What is the advantage of Quick Sort over Bubble Sort?",
        "answers": [
            {"text": "Quick Sort is always stable.", "correct": false},
            {"text": "Quick Sort has a better average-case time complexity.", "correct": true},
            {"text": "Bubble Sort uses less memory.", "correct": false},
            {"text": "Bubble Sort avoids recursion.", "correct": false}
        ]
    },
    {
        "question": "Which sorting algorithm uses a binary heap?",
        "answers": [
            {"text": "Quick Sort", "correct": false},
            {"text": "Merge Sort", "correct": false},
            {"text": "Heap Sort", "correct": true},
            {"text": "Counting Sort", "correct": false}
        ]
    },
    {
        "question": "What is the space complexity of Merge Sort?",
        "answers": [
            {"text": "O(1)", "correct": false},
            {"text": "O(logn)", "correct": false},
            {"text": "O(n)", "correct": true},
            {"text": "O(n^2)", "correct": false}
        ]
    },
    {
        "question": "Which of the following algorithms does NOT guarantee a stable sort?",
        "answers": [
            {"text": "Merge Sort", "correct": false},
            {"text": "Radix Sort", "correct": false},
            {"text": "Bubble Sort", "correct": false},
            {"text": "Quick Sort", "correct": true}
        ]
    },
    {
        "question": "What is the best-case time complexity of Quick Sort?",
        "answers": [
            {"text": "O(n)", "correct": false},
            {"text": "O(n^2)", "correct": false},
            {"text": "O(nlogn)", "correct": true},
            {"text": "O(logn)", "correct": false}
        ]
    },
    {
        "question": "Which sorting algorithm is most suitable when the input is nearly sorted?",
        "answers": [
            {"text": "Bubble Sort", "correct": false},
            {"text": "Merge Sort", "correct": false},
            {"text": "Insertion Sort", "correct": true},
            {"text": "Quick Sort", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of Bucket Sort in the best case?",
        "answers": [
            {"text": "O(n)", "correct": true},
            {"text": "O(nlogn)", "correct": false},
            {"text": "O(n^2)", "correct": false},
            {"text": "O(logn)", "correct": false}
        ]
    },
    {
        "question": "What is the primary difference between stable and unstable sorting algorithms?",
        "answers": [
            {"text": "Stable algorithms do not change the relative order of equal keys.", "correct": true},
            {"text": "Stable algorithms use less memory.", "correct": false},
            {"text": "Unstable algorithms are faster in all cases.", "correct": false},
            {"text": "Unstable algorithms are always recursive.", "correct": false}
        ]
    },
    {
        "question": "Which sorting algorithm is designed specifically for small ranges of integer values?",
        "answers": [
            {"text": "Radix Sort", "correct": false},
            {"text": "Heap Sort", "correct": false},
            {"text": "Merge Sort", "correct": false},
            {"text": "Counting Sort", "correct": true}
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
    window.location.href = "/quizs/quizs_ALgorithm_Analysis_Design";
});

startQuiz();