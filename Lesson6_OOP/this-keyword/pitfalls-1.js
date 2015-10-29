// 1. Pitfalls with `this`

var a = 42;

var foo = {
    a: 5,
    bar: function() {
        console.log(this.a);
    }
};

var f = foo.bar;
f();
// foo.bar();
