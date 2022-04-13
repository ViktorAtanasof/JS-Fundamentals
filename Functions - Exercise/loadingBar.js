function loadingBar(num) {
    let loadingBarProgress = "";
    let arr = [".", ".", ".", ".", ".", ".", ".", ".", ".", ".",];
    let shiftedArr;
    for (let i = 0; i < num; i++) {
        if (i % 10 === 0) {
            shiftedArr = arr.shift();
            loadingBarProgress += "%";
        }
    }
    arr.unshift(loadingBarProgress);
    if (num === 100) {
        console.log(`${num}% Complete!`);
    } else {
        console.log(`${num}% [${arr.join("")}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
