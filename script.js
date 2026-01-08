/* ===== INTERNET TECHNOLOGY EXPLANATIONS ===== */

function showDNS() {
  document.getElementById("internetOutput").innerText =
    "DNS (Domain Name System) converts website names like www.google.com into IP addresses so computers can locate servers.";
}

function showBroadband() {
  document.getElementById("internetOutput").innerText =
    "Broadband is a high-speed internet connection such as fiber or cable that allows fast data transfer.";
}

function showPacket() {
  document.getElementById("internetOutput").innerText =
    "When you open a website, data packets travel from your browser to routers, then to the server, and back.";
}

/* ===== CLOUD COMPUTING ===== */

function showCloud() {
  document.getElementById("cloudOutput").innerText =
    "Cloud storage saves data on remote servers accessed through the internet, unlike traditional local storage.";
}

function showClientServer() {
  document.getElementById("cloudOutput").innerText =
    "The client is your browser, while the server is a cloud computer that processes requests and sends responses.";
}

/* ===== DATA TRANSMISSION ===== */

function showDuplex() {
  document.getElementById("dataOutput").innerText =
    "Full-duplex communication allows sending and receiving data at the same time, like video calls.";
}

function showErrorCheck() {
  document.getElementById("dataOutput").innerText =
    "Error checking methods like checksums ensure data is not corrupted during transmission.";
}

/* ===== ERROR CHECKING SIMULATION ===== */

function sendData() {
  let data = document.getElementById("dataInput").value;

  if (data === "") {
    alert("Error: No data entered!");
  } else {
    alert("Data sent successfully with no errors!");
  }
}

/* ===== MINI-GAME: MULTI QUESTION TRIVIA ===== */

let questions = [
  {
    q: "What does DNS do?",
    a: ["Stores files", "Translates domain names", "Blocks viruses"],
    correct: 1
  },
  {
    q: "Which is an example of cloud storage?",
    a: ["USB drive", "Hard disk", "Google Drive"],
    correct: 2
  },
  {
    q: "What type of transmission allows two-way communication?",
    a: ["Simplex", "Half-duplex", "Full-duplex"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerText =
    questions[currentQuestion].q;

  document.getElementById("a1").innerText = questions[currentQuestion].a[0];
  document.getElementById("a2").innerText = questions[currentQuestion].a[1];
  document.getElementById("a3").innerText = questions[currentQuestion].a[2];
}

function answerQuestion(choice) {
  if (choice === questions[currentQuestion].correct) {
    score++;
    document.getElementById("gameFeedback").innerText = "✅ Correct!";
  } else {
    document.getElementById("gameFeedback").innerText = "❌ Incorrect!";
  }

  document.getElementById("score").innerText = score;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText =
      "Game Over! Final Score: " + score;
  }
}

loadQuestion();
