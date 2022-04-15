// counter 01
let counter = document.querySelector(".counter");  
let count = 1;
setInterval(() => {
    if (count <= 980) {
        counter.innerText = count;
        count++;
    }
}, 1);

// counter 02
let counter2 = document.querySelector(".counter2");
let count2 = 1;
setInterval(() => {
    if (count2 <= 965) {
        counter2.innerText = count2;
        count2++;
    }
}, 1);

// counter 03
let counter3 = document.querySelector(".counter3");
let count3 = 1;
setInterval(() => {
    if (count3 <= 1000) {
        counter3.innerText = count3;
        count3++;
    }
}, 1);