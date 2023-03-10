var countA = 0;
var countB = 0;
var countC = 0;

var countElementA = document.querySelector(".likeTextA_class")
console.log(countElementA);

var countElementB = document.querySelector(".likeTextB_class")
console.log(countElementB);

var countElementC = document.querySelector(".likeTextC_class")
console.log(countElementC);

function add1_1() {
    countA++;
    countElementA.innerText = countA + " like(s) "
    console.log(countA)
}

function add1_2() {
    countB++;
    countElementB.innerText = countB + " like(s) "
    console.log(countB)
}

function add1_3() {
    countC++;
    countElementC.innerText = countC + " like(s) "
    console.log(countC)
}