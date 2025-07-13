// --- Quiz Questions Data ---
const QUIZ_DATA = {
  "science": [
    { question: "What planet is known as the Red Planet?", options: { A: "Earth", B: "Mars", C: "Venus", D: "Jupiter" }, answer: "B" },
    { question: "What is H2O?", options: { A: "Oxygen", B: "Hydrogen", C: "Water", D: "Salt" }, answer: "C" },
    { question: "What gas do plants absorb?", options: { A: "Carbon Dioxide", B: "Oxygen", C: "Nitrogen", D: "Hydrogen" }, answer: "A" },
    { question: "What is the boiling point of water?", options: { A: "90°C", B: "100°C", C: "80°C", D: "120°C" }, answer: "B" },
    { question: "Which organ pumps blood?", options: { A: "Liver", B: "Heart", C: "Kidney", D: "Lungs" }, answer: "B" },
    { question: "What vitamin comes from sunlight?", options: { A: "Vitamin A", B: "Vitamin C", C: "Vitamin D", D: "Vitamin B12" }, answer: "C" },
    { question: "What gas do humans exhale?", options: { A: "Oxygen", B: "Carbon Dioxide", C: "Hydrogen", D: "Helium" }, answer: "B" },
    { question: "Which planet is closest to the Sun?", options: { A: "Venus", B: "Earth", C: "Mars", D: "Mercury" }, answer: "D" },
    { question: "What is the largest planet?", options: { A: "Mars", B: "Jupiter", C: "Saturn", D: "Earth" }, answer: "B" },
    { question: "Which blood cells fight infection?", options: { A: "Red", B: "White", C: "Platelets", D: "Plasma" }, answer: "B" },
    { question: "Which element has atomic number 1?", options: { A: "Oxygen", B: "Helium", C: "Hydrogen", D: "Carbon" }, answer: "C" },
    { question: "What part of the cell contains DNA?", options: { A: "Cytoplasm", B: "Nucleus", C: "Membrane", D: "Mitochondria" }, answer: "B" },
    { question: "How many bones in adult body?", options: { A: "201", B: "206", C: "208", D: "212" }, answer: "B" },
    { question: "Which sense organ helps with balance?", options: { A: "Eyes", B: "Ears", C: "Nose", D: "Tongue" }, answer: "B" },
    { question: "Which gas is needed for burning?", options: { A: "Oxygen", B: "Carbon", C: "Nitrogen", D: "Helium" }, answer: "A" }
  ],
  "history": [
    { question: "Who was the first US President?", options: { A: "Lincoln", B: "Washington", C: "Jefferson", D: "Adams" }, answer: "B" },
    { question: "When did WW2 end?", options: { A: "1945", B: "1946", C: "1939", D: "1950" }, answer: "A" },
    { question: "Where was Gandhi born?", options: { A: "Porbandar", B: "Delhi", C: "Mumbai", D: "Chennai" }, answer: "A" },
    { question: "Who discovered America?", options: { A: "Columbus", B: "Vasco da Gama", C: "Cook", D: "Magellan" }, answer: "A" },
    { question: "Which war is 'The Great War'?", options: { A: "WW1", B: "WW2", C: "Cold War", D: "Civil War" }, answer: "A" },
    { question: "Who was PM during WW2 in Britain?", options: { A: "Winston Churchill", B: "Margaret Thatcher", C: "Tony Blair", D: "Cameron" }, answer: "A" },
    { question: "India's independence year?", options: { A: "1947", B: "1950", C: "1945", D: "1942" }, answer: "A" },
    { question: "Who wrote Indian Constitution?", options: { A: "Gandhi", B: "Nehru", C: "Ambedkar", D: "Tilak" }, answer: "C" },
    { question: "Who built Taj Mahal?", options: { A: "Akbar", B: "Shah Jahan", C: "Aurangzeb", D: "Babur" }, answer: "B" },
    { question: "Where is pyramids of Giza?", options: { A: "India", B: "China", C: "Egypt", D: "Peru" }, answer: "C" },
    { question: "Mahatma Gandhi's profession?", options: { A: "Doctor", B: "Engineer", C: "Lawyer", D: "Scientist" }, answer: "C" },
    { question: "Who led Salt March?", options: { A: "Nehru", B: "Ambedkar", C: "Gandhi", D: "Bose" }, answer: "C" },
    { question: "Who founded Congress?", options: { A: "Gokhale", B: "W.C. Bonnerjee", C: "Gandhi", D: "Nehru" }, answer: "B" },
    { question: "Battle of Plassey year?", options: { A: "1757", B: "1857", C: "1800", D: "1799" }, answer: "A" },
    { question: "First World War year?", options: { A: "1914-1918", B: "1939-1945", C: "1900-1904", D: "1950-1954" }, answer: "A" }
  ],
  "programming": [
    { question: "What does HTML stand for?", options: { A: "Hyper Trainer Marking Language", B: "Hyper Text Markup Language", C: "Hyper Text Marketing Language", D: "Hyper Tool Markup Language" }, answer: "B" },
    { question: "Which language is primarily used for styling web pages?", options: { A: "HTML", B: "Python", C: "CSS", D: "Java" }, answer: "C" },
    { question: "Which is not a programming language?", options: { A: "Java", B: "Python", C: "HTML", D: "C++" }, answer: "C" },
    { question: "Which keyword is used to define a function in Python?", options: { A: "func", B: "function", C: "def", D: "define" }, answer: "C" },
    { question: "Which symbol is used for comments in Python?", options: { A: "//", B: "--", C: "#", D: "/* */" }, answer: "C" },
    { question: "Which loop repeats a block of code while a condition is true?", options: { A: "for", B: "repeat", C: "until", D: "while" }, answer: "D" },
    { question: "Which company developed JavaScript?", options: { A: "Google", B: "Netscape", C: "Microsoft", D: "Sun" }, answer: "B" },
    { question: "What is used to store multiple values in a single variable in Python?", options: { A: "Integer", B: "List", C: "String", D: "Char" }, answer: "B" },
    { question: "What does JSON stand for?", options: { A: "Java Syntax Object Notation", B: "JavaScript Object Notation", C: "Java Serialized Object Notation", D: "JavaScript Syntax Oriented Notation" }, answer: "B" },
    { question: "Which operator is used for assignment in most languages?", options: { A: "==", B: "=", C: "+=", D: ":=" }, answer: "B" },
    { question: "What is used to terminate statements in JavaScript?", options: { A: "!", B: ".", C: ",", D: ";" }, answer: "D" },
    { question: "Which tag is used to create a link in HTML?", options: { A: "<link>", B: "<href>", C: "<a>", D: "<url>" }, answer: "C" },
    { question: "What is the correct way to start a class in Python?", options: { A: "class MyClass:", B: "MyClass class:", C: "def MyClass:", D: "class = MyClass" }, answer: "A" },
    { question: "Which is not a Python data type?", options: { A: "int", B: "str", C: "char", D: "float" }, answer: "C" },
    { question: "Which Python keyword is used for error handling?", options: { A: "try", B: "check", C: "except", D: "catch" }, answer: "A" }
  ],
  "basic computer programming": [
    { question: "What does CPU stand for?", options: { A: "Central Process Unit", B: "Computer Processing Unit", C: "Central Processing Unit", D: "Computer Program Unit" }, answer: "C" },
    { question: "Which is an input device?", options: { A: "Monitor", B: "Printer", C: "Keyboard", D: "Speaker" }, answer: "C" },
    { question: "Which is the brain of the computer?", options: { A: "RAM", B: "Hard Drive", C: "CPU", D: "Keyboard" }, answer: "C" },
    { question: "What is a byte?", options: { A: "8 bits", B: "4 bits", C: "2 bits", D: "16 bits" }, answer: "A" },
    { question: "Which memory is non-volatile?", options: { A: "RAM", B: "Cache", C: "ROM", D: "Registers" }, answer: "C" },
    { question: "What is used to browse the web?", options: { A: "OS", B: "Browser", C: "Compiler", D: "Editor" }, answer: "B" },
    { question: "Which number system is used in computers?", options: { A: "Decimal", B: "Octal", C: "Binary", D: "Hexadecimal" }, answer: "C" },
    { question: "Which software is used to type documents?", options: { A: "MS Word", B: "Excel", C: "Paint", D: "Chrome" }, answer: "A" },
    { question: "What is the shortcut to copy text?", options: { A: "Ctrl+X", B: "Ctrl+V", C: "Ctrl+C", D: "Ctrl+Z" }, answer: "C" },
    { question: "What does GUI stand for?", options: { A: "Graphical User Interface", B: "Graphical Unix Interface", C: "Graphic Uniform Input", D: "General User Interface" }, answer: "A" },
    { question: "Which key is used to delete?", options: { A: "Backspace", B: "Tab", C: "Shift", D: "Alt" }, answer: "A" },
    { question: "What is software?", options: { A: "Physical parts", B: "Electronic parts", C: "Programs", D: "Wires" }, answer: "C" },
    { question: "Which is an operating system?", options: { A: "Google", B: "Windows", C: "Facebook", D: "Chrome" }, answer: "B" },
    { question: "Which device shows output?", options: { A: "Keyboard", B: "Mouse", C: "Monitor", D: "Scanner" }, answer: "C" },
    { question: "Which stores permanent data?", options: { A: "RAM", B: "Hard Drive", C: "Cache", D: "Registers" }, answer: "B" }
  ]
};

let currentQuestion = 0;
let score = 0;
let selectedTopic = "";
let quizQuestions = [];

function startQuiz() {
  selectedTopic = document.getElementById("topic-select").value;
  quizQuestions = QUIZ_DATA[selectedTopic] || [];
  if (quizQuestions.length === 0) {
    document.getElementById("quiz-box").innerHTML = `<p>No questions available for this topic.</p>`;
    return;
  }
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz-box").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = quizQuestions[currentQuestion];
  let html = `<h2>Question ${currentQuestion + 1}/${quizQuestions.length}</h2>`;
  html += `<p>${q.question}</p>`;
  for (const key in q.options) {
    html += `<button onclick="checkAnswer('${key}')">${key}. ${q.options[key]}</button><br>`;
  }
  document.getElementById("quiz-box").innerHTML = html;
}

function checkAnswer(answer) {
  const correct = quizQuestions[currentQuestion].answer;
  if (answer === correct) score++;
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = `<h2>Quiz Completed</h2><p>Your Score: ${score}/${quizQuestions.length}</p>`;
  }
}
