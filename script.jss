const title = document.getElementById("title");
const text = document.getElementById("text");

const topics = {
dns: "DNS (Domain Name System) is like the phonebook of the internet. People use easy names like google.com, but computers use number addresses called IP addresses. When you type a website name, your device asks a DNS server for the correct IP address. After that, your browser can connect to the correct server and load the website. Without DNS, users would have to remember long and difficult numbers instead of simple names.",

packet: "When data is sent over the internet, it is not sent as one big piece. It is split into many small parts called packets. These packets travel through different routers across the internet and may take different paths. When they reach the destination, they are put back together in the correct order. If some packets are lost, they can be sent again, which helps make the internet more reliable.",

broadband: "Broadband means a fast internet connection that is always available. Common types of broadband include fiber, cable, DSL, and 5G. Different types have different speeds and stability, but all of them are much faster than old dial-up internet. Broadband is important because modern websites, videos, games, and cloud services need fast and stable connections to work properly.",

cloud: "Cloud computing means using powerful computers on the internet, called servers, to store data and run applications. Instead of keeping everything only on your own device, the cloud lets you access your files and services from many different devices. Examples include online storage, email, and websites. Cloud services are useful because they can serve many users at the same time and can grow when more people use them.",

storage: "Local storage means saving files on your own device, such as a hard drive or a USB stick. Cloud storage means saving files on servers on the internet. Local storage works without internet, but it is harder to share and can be lost if the device breaks. Cloud storage is easier to share and can be accessed from anywhere, but it needs an internet connection and good security.",

modes: "There are three main types of data transmission. Simplex means data only travels in one direction, such as TV broadcasting. Half-duplex means data can travel both ways, but not at the same time, such as walkie-talkies. Full-duplex means data travels both ways at the same time, such as phone calls and most internet connections. Most modern networks use full-duplex because it is faster and more efficient.",

error: "Error checking is used to make sure data is not changed while it is being sent over a network. The sender calculates a special check value from the message and sends it with the data. The receiver calculates the check value again and compares it with the one sent. If the values are different, the system knows the data was damaged or changed during transmission. Real networks use stronger methods, but this example shows the main idea."
};

document.querySelectorAll("nav button").forEach(btn => {
btn.addEventListener("click", () => {
const key = btn.dataset.topic;
title.textContent = btn.textContent;
text.textContent = topics[key];
});
});

// DNS demo
const dnsMap = {
"example.com": "93.184.216.34",
"google.com": "142.250.190.14"
};

document.getElementById("lookup").addEventListener("click", () => {
const d = document.getElementById("domain").value.trim().toLowerCase();
if (!d) return;
const ip = dnsMap[d] || "192.0.2." + Math.floor(Math.random() * 200);
document.getElementById("dnsResult").textContent = d + " → " + ip;
});

// Error checking demo
let last = null;

function checksum(msg) {
let s = 0;
for (let c of msg) s += c.charCodeAt(0);
return s % 256;
}

document.getElementById("send").addEventListener("click", () => {
const msg = document.getElementById("message").value;
if (!msg) return;

const c = checksum(msg);
last = { msg, c };

document.getElementById("status").textContent =
"Message sent successfully. Check value = " + c;
});

document.getElementById("tamper").addEventListener("click", () => {
if (!last) return;

const bad = last.msg + "!";
const c2 = checksum(bad);

if (c2 !== last.c) {
alert("ERROR DETECTED: The message was changed.");
document.getElementById("status").textContent =
"Error found! The data was changed during transfer.";
}
});
