const body = document.getElementById('body');
const emoji = document.getElementById('emoji');
const greetbutton = document.getElementById("greetbutton");
const dicerollbtn = document.getElementById("dicerollbtn");
const coinbtn = document.getElementById("coinbtn");
const dicevalue = document.getElementById('dicevalue');
let diceimage = document.getElementById('dice');
let coinimage = document.getElementById('coin');
const coinvalue = document.getElementById("coinvalue");
const youpressed = document.getElementById('youpressed');
greetbutton.addEventListener('click', greet);
document.getElementById('themeswitcherbtn').addEventListener('click' , changetheme)
dicerollbtn.addEventListener('click', rolldice);
coinbtn.addEventListener('click', flipcoin);
document.getElementById('hoverbtn').addEventListener("mouseover", hover);
document.getElementById('clickbtn').addEventListener("click", click);
document.getElementById('dblclickbtn').addEventListener("dblclick", dblclick);
document.getElementById('outbtn').addEventListener("mouseout", out);
document.addEventListener("keydown", pressedkey);
document.getElementById('mousemover').addEventListener('mousemove', coordinates);
document.getElementById('pizzaorderbtn').addEventListener('click', orderpizza);
document.getElementById('notesbtn').addEventListener('click', addnote);
function greet() {
  let username = document.getElementById("username").value
document.getElementById("usernameresult").textContent = "Hello " + username + "! 👋";
document.getElementById("usernameresult2").textContent = "Welcome to your dashboard";
document.getElementById("username").value = "";
};
function rolldice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  dicevalue.textContent = dice
  if (dicevalue.textContent === "1") {
  diceimage.src = "https://upload.wikimedia.org/wikipedia/commons/0/09/Dice-1.svg"
  }
  else if (dicevalue.textContent === "2") {
  diceimage.src = "https://upload.wikimedia.org/wikipedia/commons/3/34/Dice-2.svg"
  }
  else if (dicevalue.textContent === "3") {
  diceimage.src = "https://upload.wikimedia.org/wikipedia/commons/c/ca/Dice-3.svg"
  }
  else if (dicevalue.textContent === "4") {
  diceimage.src = "https://upload.wikimedia.org/wikipedia/commons/1/16/Dice-4.svg"
  }
  else if (dicevalue.textContent === "5") {
  diceimage.src = "https://upload.wikimedia.org/wikipedia/commons/d/dc/Dice-5.svg"
  }
  else {
  diceimage.src = "https://upload.wikimedia.org/wikipedia/commons/1/14/Dice-6.svg"
  };
  document.getElementById('statscountdice').textContent++;
}
function flipcoin() {
let coin = Math.floor(Math.random() * 2) + 1;
if (coin === 1) {
  coinimage.src = "heads.png";
  coinvalue.textContent = "Heads"
}
else {
  coinimage.src = "tails.png";
  coinvalue.textContent = "Tails"
};
document.getElementById('statscountcoin').textContent++;
}
function hover() {
emoji.textContent = "😍";
}
function click() {
emoji.textContent = "😜";
}
function dblclick() {
emoji.textContent = "😎";
}
function out() {
emoji.textContent = "😴";
}
function pressedkey(event) {
youpressed.textContent = event.key
}
function coordinates(event) {
document.getElementById('xmouse').textContent = event.offsetX
document.getElementById('ymouse').textContent = event.offsetY
}
function orderpizza() {
let pizzaname = document.getElementById("pizzaname").value;
const selectedsize = document.querySelector('input[name="pizza"]:checked');
const checked = document.getElementById('extracheese').checked;
const drink = document.getElementById('drink').value
document.getElementById("summaryname").textContent = " " + pizzaname;
document.getElementById('summarypizzasize').textContent = " " + selectedsize.value;
if (checked) {
  document.getElementById('summaryextracheese').textContent = " Yes"
}
else {
  document.getElementById('summaryextracheese').textContent = " No"
};
document.getElementById('summarydrink').textContent = " " + drink;
document.getElementById('statscountpizza').textContent++;
}
function addnote() {
  if (document.getElementById('notesinput').value.trim() == "") {
  }
  else {
  document.getElementById('notesullist').innerHTML += "<li>" + document.getElementById('notesinput').value + "</li>";
  document.getElementById('notes').style.height =
  (document.getElementById('notes').offsetHeight  + 14) + "px";
  document.getElementById('notesinput').value = "";
  document.getElementById('statscountnote').textContent++;
  }
 }
 function changetheme() {
  if (body.style.backgroundColor == "black") {
   lightmode();
  document.getElementById('currentmode').textContent = "Light"
    }
    else {
 darkmode();
 document.getElementById('currentmode').textContent = "Dark"
 }
 }
 function darkmode() {
  body.style.backgroundColor ="black";
  document.getElementById('welcomeuser').classList.add("darkwelcomeuser");
  document.getElementById('welcomeh2').style.color = "white";
  document.getElementById('usernameresult').style.color = "white";
  document.getElementById('usernameresult2').style.color = "white";
  document.getElementById('username').style.backgroundColor = "#0F172A";
  document.getElementById('username').style.color = "white";
  document.getElementById('themeswitcher').classList.add("darkthemeswitcher");
  document.getElementById('currentmode').style.backgroundColor = "#27272A";
  document.getElementById('diceroller').classList.add("darkdiceroller");
  document.getElementById('dicevalue').style.color = "white";
  document.getElementById('coinflipper').classList.add("darkcoinflipper");
document.getElementById('coinflipperh2').style.color = "#E9D5FF";
document.getElementById('coinvalue').style.color = "white";
document.getElementById('usernameresult2').style.color = "white";
document.getElementById('username').style.backgroundColor = "#0F172A";
document.getElementById('emojizone').classList.add("darkemojizone");
document.getElementById('emojizoneh2').style.color = "#FCA5A5";
document.getElementById('keyboardtester').classList.add("darkkeyboardtester");
document.getElementById('keyboardtesterh2').style.color = "white";
document.getElementById('keyboardtesterp').style.color = "white";
document.getElementById('keyboardtesterh3').style.color = "white";
document.getElementById('youpressed').style.color = "white";
  document.getElementById('mousetracker').classList.add("darkmousetracker");
  document.getElementById('mousetesterh2').style.color = "white";
document.getElementById('mousetesterp').style.color = "white";
  document.getElementById('pizzaorder').classList.add("darkpizzaorder");
  document.getElementById('pizzasummary').classList.add("darkpizzasummary");
  document.getElementById('pizzaorderh2').style.color = "white";
  document.getElementById('pizzanamelabel').style.color = "white";
  document.getElementById('pizzasizedivlabel').style.color = "white";
  document.getElementById('pizzasizesmalllabel').style.color = "white";
  document.getElementById('pizzasizemediumlabel').style.color = "white";
  document.getElementById('pizzasizebiglabel').style.color = "white";
  document.getElementById('extracheeselabel').style.color = "white";
  document.getElementById('extracheeselabel').style.color = "white";
  document.getElementById('extracheeselabel2').style.color = "white";
  document.getElementById('drinklabel').style.color = "white";
  document.getElementById('ordersummaryh2').style.color = "#FCA5A5";
  document.getElementById('notes').classList.add("darknotes");
  document.getElementById('notesh2').style.color = "white";
  document.getElementById('notesullist').style.color = "white";
  document.getElementById('dashboardstats').classList.add("darkdashboardstats");
 }
 function lightmode() {
  body.style.backgroundColor = "white";
  document.getElementById('welcomeuser').classList.remove("darkwelcomeuser");
  document.getElementById('welcomeh2').style.color = "black";
  document.getElementById('usernameresult').style.color = "black";
  document.getElementById('usernameresult2').style.color = "black";
  document.getElementById('username').style.backgroundColor = "white";
  document.getElementById('themeswitcher').classList.remove("darkthemeswitcher");
  document.getElementById('currentmode').style.backgroundColor = "#F9F1DC";
  document.getElementById('diceroller').classList.remove("darkdiceroller");
  document.getElementById('dicevalue').style.color = "black";
  document.getElementById('coinflipper').classList.remove("darkcoinflipper");
  document.getElementById('coinflipperh2').style.color = "#6B21A8";
  document.getElementById('coinvalue').style.color = "black";
  document.getElementById('emojizone').classList.remove("darkemojizone");
  document.getElementById('emojizoneh2').style.color = "#991B1B";
  document.getElementById('keyboardtester').classList.remove("darkkeyboardtester");
  document.getElementById('keyboardtesterh2').style.color = "black";
  document.getElementById('keyboardtesterp').style.color = "black";
  document.getElementById('youpressed').style.color = "black";
  document.getElementById('keyboardtesterh3').style.color = "black";
  document.getElementById('mousetracker').classList.remove("darkmousetracker");
  document.getElementById('mousetesterh2').style.color = "black";
  document.getElementById('mousetesterp').style.color = "black";
  document.getElementById('pizzaorder').classList.remove("darkpizzaorder");
  document.getElementById('pizzasummary').classList.remove("darkpizzasummary");
  document.getElementById('pizzaorderh2').style.color = "black";
  document.getElementById('pizzanamelabel').style.color = "black";
  document.getElementById('pizzasizedivlabel').style.color = "black";
  document.getElementById('pizzasizesmalllabel').style.color = "black";
  document.getElementById('pizzasizemediumlabel').style.color = "black";
  document.getElementById('pizzasizebiglabel').style.color = "black";
  document.getElementById('extracheeselabel').style.color = "black";
  document.getElementById('extracheeselabel').style.color = "black";
  document.getElementById('extracheeselabel2').style.color = "black";
  document.getElementById('drinklabel').style.color = "black";
  document.getElementById('ordersummaryh2').style.color = "#991B1B";
  document.getElementById('notes').classList.remove("darknotes");
  document.getElementById('notesh2').style.color = "black";
  document.getElementById('notesullist').style.color = "black";
  document.getElementById('dashboardstats').classList.remove("darkdashboardstats");
 }