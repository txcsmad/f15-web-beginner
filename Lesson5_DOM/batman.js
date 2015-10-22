function select(id) {
    return document.getElementById(id);
}

function create(type) {
    return document.createType(type);
}

var masses = [
    {
        id: "sidekicks",
        mass: 70
    },
    {
        id: "robots",
        mass: 120
    },
    {
        id: "boosters",
        mass: 91000
    }
];

function getSum() {
    var result = 0;
    for(var i = 0; i < masses.length; i++) {
        result += (select(masses[i].id).value * masses[i].mass);
    }
    return result;
}

masses.forEach(function(mass) {
    select(mass.id).addEventListener("keyup", function() {
        select("weight").innerHTML = getSum();
    });
});
