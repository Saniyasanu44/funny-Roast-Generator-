const roasts = [
  "Bro, even Google can’t find your logic 😂",
  "You have more excuses than a politician!",
  "Your brain’s loading… please wait ⏳",
  "You're like a cloud. When you disappear, it’s a beautiful day ☀️",
  "I’d agree with you, but then we’d both be wrong 😜",
  "Somewhere out there, a tree is working hard to produce oxygen for you… you should apologize to it 🌳",
  "Your secrets are safe with me. I never even listen 😏",
  "You're proof that even WiFi signals have more strength than your confidence 💀",
  "Did you fall from heaven? Because it looks like you landed on your brain 🤕",
  "Keep talking, maybe someday you’ll say something smart 😬",
  "Tumhara logic toh Windows XP jaisa outdated hai 💻",
  "Tere ideas dekh ke ChatGPT bhi soch me pad gaya 🤖",
  "You’re not stupid, you’re just having bad luck thinking 😅",
  "Kya karu main, mar jaaun? Ya tera lecture sunu? 😩",
  "Even mirrors refuse to reflect you sometimes 😂",
  "Your vibe is like buffering WiFi — irritating and useless 📶",
  "Are you a test paper? Because everyone avoids you till the last moment 📚",
  "Kuch log itne slow hote hain… buffering bhi unse fast lagta hai 🔁",
  "Tera sense of humor toh lockdown me hi reh gaya 😜",
  "You're like a mosquito — annoying but somehow still alive 🦟",
  "Agar overconfidence ka award hota na, tu lifetime winner hota 🏆",
  "Tu WhatsApp group ka woh member hai jo kabhi reply nahi karta 😑",
  "You’re the human version of a typo ✍️",
  "Your brain called — it needs a software update 🔧",
  "Tera attitude toh Amazon cart jaisa hai, sabko dikhata hai par kuch kharidta nahi 😏",
  "Tumhe dekh ke lagta hai common sense bhi ek luxury item hai 💸",
  "You’re proof that evolution sometimes takes a coffee break ☕",
  "Tere jaisa banda agar GPS hota na, toh sab log lost ho jaate 😂",
  "You’re the kind of person autocorrect gives up on 😩",
  "Tu toh Google Assistant ko bhi confuse kar de 🤯",
  "Tere jokes sun ke Siri ne bhi phone bandh kar diya 📱",
  "You're like expired Maggi — nobody wants you but you’re still around 🍜",
  "Tu khud ko hero samajhta hai, par movie ka naam ‘Flop Returns’ hai 🎬",
  "You talk like a YouTube ad — unwanted and too long ⏰",
  "Acha sun, tu effort karta reh, result shayad next janam me mile 😆",
  "Even AI couldn’t generate a worse idea than yours 🤖💀"
];

function generateRoast() {
  const input = document.getElementById("userInput").value.trim();
  const roastBox = document.getElementById("roastBox");

  if (input === "") {
    roastBox.innerHTML = "Type something first, genius 😏";
    return;
  }

  const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
  roastBox.innerHTML = `<b>${input}</b>, ${randomRoast}`;
}

function shareRoast() {
  const roast = document.getElementById("roastBox").innerText;
  if (!roast) {
    alert("First generate a roast before sharing 😜");
    return;
  }
  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(roast + " 😂🔥 Check out Funny Roast Generator!")}`;
  window.open(whatsappURL, "_blank");
}


