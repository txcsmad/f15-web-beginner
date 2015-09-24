var list = document.getElementById("primes");

for(var i = 2; i < 1000; i++) {
    
    var factors = 0;
    
    for(var n = 1; n <= i / 2; n++) {
        if(!(i % n)) factors++;
    }

    if(factors === 1) {
        console.log(i);

        var li = document.createElement('li');
        li.innerHTML = i;
        list.appendChild(li);
    }
}