document.getElementById("number")
let counter = 0

setInterval(function() {
  if(counter==65){
    clearInterval;
  }else{
    counter = counter + 1
  number.innerHTML=`${counter}%`
  }
  
},30)