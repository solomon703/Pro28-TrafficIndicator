let message = document.getElementById("message");
let stop1  = document.getElementById("stop");
let wait1 = document.getElementById("wait");
let went = document.getElementById("go");
function stop(){
  stop1.style.backgroundColor = "red";
  wait1.style.backgroundColor = "#fff";
  went.style.backgroundColor = "#fff";
  message.textContent = "Stop.";
}
function wait(){
  wait1.style.backgroundColor = "yellow";
  went.style.backgroundColor = "#fff";
  stop1.style.backgroundColor = "#fff";
  message.textContent = "Wait...";
}
function go(){
  went.style.backgroundColor = "green";
  stop1.style.backgroundColor = "#fff";
  wait1.style.backgroundColor = "#fff";
  message.textContent = "Go!";
}