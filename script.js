/* ================= INTERNET TECHNOLOGY ================= */
function showDNS() {
  document.getElementById("internetOutput").innerText =
    "🌐 DNS translates website names like 'example.com' into IP addresses so computers can locate servers.";
  toggleFun('funInternet');
}

function showBroadband() {
  document.getElementById("internetOutput").innerText =
    "⚡ Broadband is a high-speed internet connection (fiber, cable, or DSL) for fast downloads and streaming.";
  toggleFun('funInternet');
}

function showPacket() {
  document.getElementById("internetOutput").innerText =
    "📦 Data travels in packets through routers to the server. Each packet may take a different route!";
  toggleFun('funInternet');
}

/* ================= CLOUD COMPUTING ================= */
function showCloud() {
  document.getElementById("cloudOutput").innerText =
    "☁️ Cloud storage saves your data on remote servers, accessible from any device.";
  toggleFun('funCloud');
}

function showClientServer() {
  document.getElementById("cloudOutput").innerText =
    "🖥️ Client vs Server: Your device requests info (client), server responds with data/services.";
  toggleFun('funCloud');
}

/* ================= DATA TRANSMISSION ================= */
function showDuplex() {
  document.getElementById("dataOutput").innerText =
    "🔄 Full-duplex allows simultaneous sending and receiving; half-duplex only one direction at a time.";
  toggleFun('funData');
}

function showErrorCheck() {
  document.getElementById("dataOutput").innerText =
    "✅ Error checking (like checksums) ensures data isn’t corrupted during transmission.";
  toggleFun('funData');
}

/* ================= MINI-GAME ================= */
let questions = [
  { q: "What does DNS do?", a:["Stores files","Translates domain names","Blocks viruses"], correct:1 },
  { q: "Which is cloud storage?", a:["USB","Hard disk","Google Drive"], correct:2 },
  { q: "Which transmission allows two-way communication?", a:["Simplex","Half-duplex","Full-duplex"], correct:2 },
  { q: "What is broadband?", a:["A slow connection","A high-speed internet connection","A type of server"], correct:1 },
  { q: "What ensures data isn't corrupted?", a:["Error checking","Routers","Firewalls"], correct:0 }
];

let current = 0, score = 0;

function loadQuestion() {
  if(current<questions.length){
    document.getElementById("question").innerText = questions[current].q;
    document.getElementById("btn1").innerText = questions[current].a[0];
    document.getElementById("btn2").innerText = questions[current].a[1];
    document.getElementById("btn3").innerText = questions[current].a[2];
    document.getElementById("gameFeedback").innerText = "";
  }
}

function answerQuestion(choice){
  if(current>=questions.length) return;

  if(choice === questions[current].correct){
    score++;
    document.getElementById("gameFeedback").innerText = "✅ Correct!";
    document.getElementById("gameFeedback").style.color = "#28a745";
  } else {
    document.getElementById("gameFeedback").innerText = 
      `❌ Incorrect! Correct: ${questions[current].a[questions[current].correct]}`;
    document.getElementById("gameFeedback").style.color = "#dc3545";
  }

  document.getElementById("score").innerText = score;
  current++;

  setTimeout(loadQuestion,1000);

  if(current===questions.length){
    setTimeout(()=>{
      document.getElementById("question").innerText =
        `🎉 Game Over! Final Score: ${score}/${questions.length}`;
      document.getElementById("btn1").innerText="";
      document.getElementById("btn2").innerText="";
      document.getElementById("btn3").innerText="";
      document.getElementById("gameFeedback").innerText="Refresh the page to play again!";
    },1200);
  }
}

/* ================= FUN FACT POPUPS ================= */
function toggleFun(id){
  const fact = document.getElementById(id);
  fact.classList.add('show');
  setTimeout(()=>{fact.classList.remove('show');},4000);
}

// Load first trivia question on page load
loadQuestion();
