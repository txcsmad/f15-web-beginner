var n = 1234;

if(typeof n === "number") {

    var out = "";
    if(n % 3 === 0)
        out = out + "Fizz";
    if(n % 5 === 0)
        out = out + "Buzz";
    console.log(out ? out : n);

} else {

    console.log(NaN);
}
