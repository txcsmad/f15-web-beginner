for(var i = 1; i <= 10; i++)
    console.log(i);

function select(id) {
    return document.getElementById(id);
}

function create(type) {
    return document.createElement(type);
}

select("surprise").addEventListener("click", function() {
    alert("You are the 100,000th visitor!");
    alert("You win " + select("prize").value + "!");
});
