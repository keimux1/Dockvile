const form = document.getElementById("form");
const id_num = document.getElementById("id_num");
const password = document.getElementById("password");

// e=>{} is the same as function(e){}
form.addEventListener("submit", e=>{
  e.preventDefault();

  valdidateInput();
});

// const valdidateInput = () =>{} is same as writing const validateInput =function(){}
const valdidateInput = () =>{
const id_numValue = id_num.value.trim();
const passwordValue = password.value.trim();
}