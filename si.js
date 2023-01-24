x=0;
y=4;
draw_rect="";
draw_circle="";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
document.getElementById("status").innerHTML="el texto dibuja porti di una palabra...";
recognition.start();




}
recognition.onresult=function(hola){console.log()  




}