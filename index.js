window.onload=function(){
for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML=this.textContent;
    makeSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);

  });
}
document.addEventListener("keypress",function(e){
    makeSound(e.key);
    addAnimation(e.key);
});
function makeSound(e){
  switch (e) {
    case "w":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "l":
    var kick=new Audio("kick-bass.mp3");
    kick.play();
      break;

  }
}
function addAnimation(e){
  var activeButton=document.querySelector("."+e);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
}
