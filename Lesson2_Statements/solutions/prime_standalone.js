function isPrime(n) {
    if(n <= 0) return false;

    var factors = 0;
    for(var i = 1; i <= n / 2; i++) {
        if((n % i) === 0) {
            factors++;
        }

    }
    return (factors === 1);
}

for(var i = 0; i < 1000; i++) {
    if(isPrime(i)) {
        console.log(i);
    }
}