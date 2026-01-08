/* INTERNET TECHNOLOGY */

function showDNS() {
  document.getElementById("internetOutput").innerText =
    "DNS translates website names into IP addresses so computers can find servers.";
}

function showBroadband() {
  document.getElementById("internetOutput").innerText =
    "Broadband is a high-speed internet connection such as fiber or cable.";
}

function showPacket() {
  document.getElementById("internetOutput").innerText =
    "Data travels in packets from your browser through routers to the server.";
}

/* CLOUD COMPUTING */

function showCloud() {
  document.getElementById("cloudOutput").innerText =
    "Cloud storage saves data on remote servers accessed via the internet.";
}

function showClientServer() {
  document.getElementById("cloudOutput").innerText =
    "The client is your browser; the server is a cloud computer that responds to requests.";
}

/* DATA TRANSMISSION */

function showDuplex() {
  document.getElementById("dataOutput").innerText =
    "Full-duplex communication allows sending and receiving data at the same time.";
}

function showErrorCheck() {
  document.getElementById("dataOutput").innerText =
    "Error checking methods like checksums ensure data is not corrupted.";
}

/* MINI-GAME */

let questions = [
  {
    q: "What does DNS do?",
    a: ["Stores files", "Translates domain names", "Blocks viruses"],
    correct: 1
  },
  {
    q: "Which is cloud storage?",
    a: ["USB", "Hard disk", "Google Drive"],
    correct: 2
  },
  {
    q: "Which transmission allows two-way communication?",
    a: ["Simplex", "Half-duplex", "Full-duplex"],
    correct: 2
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerText = questions[current].q;
  document.getElementById("btn1").innerText = questions[current].a[0];
  document.getElementById("btn2").innerText = questions[current].a[1];
  document.getElementById("btn3").innerText = questions[current].a[2];
}

function answerQuestion(choice) {
  if (choice === questions[current].correct) {
    score++;
    document.getElementById("gameFeedback").innerText = "✅ Correct!";
  } else {
    document.getElementById("gameFeedback").innerText = "❌ Incorrect!";
  }

  document.getElementById("score").innerText = score;
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText =
      "Game Over! Final Score: " + score;
  }
}

loadQuestion();
