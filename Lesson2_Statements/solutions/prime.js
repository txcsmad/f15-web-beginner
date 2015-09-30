var list = document.getElementById('primes');

for(var n = 0; n < 1000; n++) {

    var factors = 0;
    for(var i = 1; i <= n / 2; i++) {
        if(n % i === 0) {
            factors++;
        }
    }

    if(factors === 1) {
        var li = document.createElement('li');
        li.innerHTML = n;
        list.appendChild(li);
    }
}