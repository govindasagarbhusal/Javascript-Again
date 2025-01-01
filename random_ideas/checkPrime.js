function isPrime(number) {
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    // Check divisibility up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If divisible, not a prime
        }
    }

    return true; // If no divisors found, it's a prime number
}

// Example usage
const num = 29;
console.log(`${num} is ${isPrime(num) ? "a prime" : "not a prime"} number.`);
