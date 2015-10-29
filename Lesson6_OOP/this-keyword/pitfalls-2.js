// 2. Pitfalls with `this`

var a = 42;

var bar = function() {
    var a = 5;
    console.log(this.a);
};

bar();
