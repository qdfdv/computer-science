/* DNS explanation */
function explainDNS() {
  document.getElementById("dnsOutput").innerText =
    "DNS converts a website name into an IP address so the browser can find the server.";
}

/* Cloud explanation */
function explainCloud() {
  document.getElementById("cloudOutput").innerText =
    "Cloud storage saves data on remote servers accessed through the internet.";
}

/* Data transmission explanation */
function explainDuplex() {
  document.getElementById("duplexOutput").innerText =
    "Full-duplex communication allows data to be sent and received at the same time.";
}

/* Error checking simulation */
function sendData() {
  let data = document.getElementById("data").value;

  if (data === "") {
    alert("Transmission Error: No data entered!");
  } else {
    alert("Data transmitted successfully!");
  }
}

/* Mini-game logic */
function checkAnswer(answer) {
  if (answer === "dns") {
    document.getElementById("gameOutput").innerText =
      "✅ Correct! DNS translates domain names into IP addresses.";
  } else {
    document.getElementById("gameOutput").innerText =
      "❌ Incorrect. Try again!";
  }
}
