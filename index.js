let btnGolArg = document.getElementById('btnGolArg');
let btnGolFra = document.getElementById('btnGolFra');
let btnReset = document.getElementById('btnReset');

let sumadorGolesArg = document.getElementById('sumadorArg');
let sumadorGolesFra = document.getElementById('sumadorFra');
let sumarGol = 1;

//document.getElementById("sumadorArg").innerText = 0;

btnGolArg.addEventListener("click", function () {
    sumadorGolesArg.innerText = parseInt(sumadorGolesArg.innerText) + sumarGol;
});

btnGolFra.addEventListener("click", function () {
    sumadorGolesFra.innerText = parseInt(sumadorGolesFra.innerText) + sumarGol;
});

btnReset.addEventListener("click", function () {
    document.getElementById("sumadorArg").innerText = 0
    document.getElementById("sumadorFra").innerText = 0
});

let final = 0;

let conflict1 = false;
