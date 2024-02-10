// DOM
let displayCalculator = document.getElementById('display');
let displayOperator = document.getElementById('displayOperator');

let resetNumber = document.getElementById('reset');
let hapusNumber = document.getElementById('hapus');

let displayNumber;

// date time
let jam = document.getElementById('jam');
let waktu = new Date();
jam.innerText = waktu.getHours()+":"+ waktu.getMinutes();

// function
function angka(displayNumber){
  // conditional Statement
  if (displayCalculator.innerText === "0") {
    displayCalculator.innerText=displayNumber;
  } else {
    displayCalculator.innerText+=displayNumber;
  }
}

function operator(operator){
  displayCalculator.innerText+=operator;
}

resetNumber.addEventListener('click',()=>{
  displayCalculator.innerText="0";
  displayOperator.innerText="";
})

hapusNumber.addEventListener('click',()=>{
  let asli = displayCalculator.innerText;

  if (asli.length > 1) {
    hapus = asli.slice(0, asli.length - 1)
    displayCalculator.innerText = hapus;
  } else {
    displayCalculator.innerText = "0";
  }
})

function hasil(){
    let x = displayCalculator.innerText;
    displayOperator.innerText=x;

    let y= eval(x);

    displayCalculator.innerText=y;
}