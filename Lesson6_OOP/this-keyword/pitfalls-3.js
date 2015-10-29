// Pitfalls with `this` in functions

var obj = {
    a: 5,
    arr: [1,2,3,4,5],
    bar: function() {
        this.arr.forEach(function() {
            console.log('the value of a is: ' + this.a);
        });
    }
};

obj.bar();

// Solve by doing `var self = this;` outside the function
// and using `self.a` inside.
// -OR-
// pass `this` as the second argument to the forEach function
