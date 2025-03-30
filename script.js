function isPrime(numb) {
    if (numb < 2) return false; // 0 and 1 are not prime
    for (let i = 2; i <= Math.sqrt(numb); i++) {
        if (numb % i === 0) {
            return false; // If divisible, not prime
        }
    }
    return true; // If no divisors found, it's prime
}

// Test cases
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(2));  // true
console.log(isPrime(1));  // false
console.log(isPrime(0));  // false
console.log(isPrime(29)); // true
