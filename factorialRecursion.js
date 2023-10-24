function factorialRecursive(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1);
    }
}

const number = 5;
console.log(factorialRecursive(number)); 