let text = document.getElementById("text");

text.addEventListener("mouseover",function(){
  document.querySelector('h4').innerHTML += 'MouseOver<br>';
});

text.addEventListener("mouseout",function(){
  document.querySelector('h4').innerHTML += '*MouseOut<br>';
});