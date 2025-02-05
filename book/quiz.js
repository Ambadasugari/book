const questionAndChoices = {
    1: {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Rome"]
    },
    2: {
        question: "Which planet is closest to the sun?",
        choices: ["Earth", "Venus", "Mars", "Mercury"]
    },
    3: {
        question: "What is one of the Seven Wonders of the World?",
        choices: ["Great Wall of China", "Taj Mahal", "Pyramids of Giza", "Colosseum"]
    },
    4: {
        question: "What is the largest animal on Earth?",
        choices: ["Elephant", "Blue Whale", "Giraffe", "Shark"]
    },
    5: {
        question: "What is the tallest mountain in the world?",
        choices: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"]
    },
    6: {
        question: "What is the longest river in the world?",
        choices: ["Amazon", "Nile River", "Yangtze", "Mississippi"]
    },
    7: {
        question: "Who wrote 'Hamlet'?",
        choices: ["Shakespeare", "Chaucer", "Hemingway", "Dickens"]
    },
    8: {
        question: "Who discovered gravity?",
        choices: ["Einstein", "Newton", "Galileo", "Hawking"]
    },
    9: {
        question: "Which gas do humans need to breathe?",
        choices: ["Hydrogen", "Nitrogen", "Oxygen", "Carbon"]
    },
    10: {
        question: "Which is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"]
    }
};

const questionAndAnswer = {
    1: { question: "What is the capital of France?", answer: "Paris" },
    2: { question: "Which planet is closest to the sun?", answer: "Mercury" },
    3: { question: "What is one of the Seven Wonders of the World?", answer: "Pyramids of Giza" },
    4: { question: "What is the largest animal on Earth?", answer: "Blue Whale" },
    5: { question: "What is the tallest mountain in the world?", answer: "Mount Everest" },
    6: { question: "What is the longest river in the world?", answer: "Nile River" },
    7: { question: "Who wrote 'Hamlet'?", answer: "Shakespeare" },
    8: { question: "Who discovered gravity?", answer: "Newton" },
    9: { question: "Which gas do humans need to breathe?", answer: "Oxygen" },
    10: { question: "Which is the largest ocean on Earth?", answer: "Pacific Ocean" }
};

const m1 = document.getElementById("main");

for (let i = 1; i <= 10; i++) {
    m1.innerHTML = "";
    const d1 = document.createElement("div");
    d1.className = "d1";
    const p1 = document.createElement("p");
    p1.textContent = questionAndChoices[i].question;
    const p2 = document.createElement("p");
    p2.className = "p2";
    const b1 = document.createElement("button");
    b1.textContent = questionAndChoices[i].choices[0];
    b1.addEventListener("click", (function(index) {
        return function() {
            if (b1.textContent === questionAndAnswer[index].answer) {
                console.log("Correct");
                b1.style.backgroundColor = "green";
            } else {
                console.log("Incorrect");
                b1.style.backgroundColor = "red";
            }
        };
    })(i));

    const b2 = document.createElement("button");
    b2.textContent = questionAndChoices[i].choices[1];
    b2.addEventListener("click", (function(index) {
        return function() {
            if (b2.textContent === questionAndAnswer[index].answer) {
                console.log("Correct");
                b2.style.backgroundColor = "green";
            } else {
                console.log("Incorrect");
                b2.style.backgroundColor = "red";
            }
        };
    })(i));

    const b3 = document.createElement("button");
    b3.textContent = questionAndChoices[i].choices[2];
    b3.addEventListener("click", (function(index) {
        return function() {
            if (b3.textContent === questionAndAnswer[index].answer) {
                console.log("Correct");
                b3.style.backgroundColor = "green";
            } else {
                console.log("Incorrect");
                b3.style.backgroundColor = "red";
            }
        };
    })(i));

    const b4 = document.createElement("button");
    b4.textContent = questionAndChoices[i].choices[3];
    b4.addEventListener("click", (function(index) {
        return function() {
            if (b4.textContent === questionAndAnswer[index].answer) {
                console.log("Correct");
                b4.style.backgroundColor = "green";
            } else {
                console.log("Incorrect");
                b4.style.backgroundColor = "red";
            }
        };
    })(i));
    p2.appendChild(b1);
    p2.appendChild(b2);
    p2.appendChild(b3);
    p2.appendChild(b4);
    d1.appendChild(p1);
    d1.appendChild(p2);
    m1.appendChild(d1);
}