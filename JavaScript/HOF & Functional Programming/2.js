let count = 3;
const delay = 3000;

function printCounter() {
    console.clear();
    console.log(count);
    count--;

    if (count === 0) {
        clearInterval(counterInterval);
        RandomNum();
    }
}

const counterInterval = setInterval(printCounter, 1000);

function RandomNum() {
    console.log(Math.floor(Math.random() * 100));
}
