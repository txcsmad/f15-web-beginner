function select(id) {
    return document.getElementById(id);
}

var components = [
    {
        id: "sidekicks",
        weight: 70
    },
    {
        id: "robots",
        weight: 120
    },
    {
        id: "boosters",
        weight: 91000
    }
];

var weight = select("weight");

function computeWeight() {
    console.log("Computing weights...");
    var result = 0;

    for(var i = 0; i < components.length; i++) {
        var component = select(components[i].id);
        result += component.value.trim() * components[i].weight;
    }

    console.log("Computed result: " + result);

    weight.innerHTML = result;
    console.log("Result set!");
}

components.forEach(function(component) {
    select(component.id).addEventListener("keyup", computeWeight);
});
