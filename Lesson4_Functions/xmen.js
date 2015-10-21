function Cerebro(powers, mutant) {
    mutant.powers.forEach(function(power) {
        if(powers[power])
            powers[powers].push(mutant.name);
        else
            powers[powers] = [mutant.name];
    });
}

var mutantPowers = {};

var mutants = [{ name: "Jean Grey", powers: ["telepathy"] },
               { name: "Wolverine", powers: ["healing", "metal"] },
               { name: "Professor X", powers: ["telepathy"] },
               { name: "Cyclops", powers: ["laser vision"] },
               { name: "Deadpool", powers: ["healing", "strength"] },
               { name: "Colossus", powers: ["strength", "metal"] },
               { name: "Iceman", powers: ["ice"] },
               { name: "Beast", powers: ["strength", "blue" ] }];

mutants.forEach(function(mutant) {
    Cerebro(mutantPowers, mutant);
});

console.log("");
console.log("Starting powers:");
console.log(JSON.stringify(mutantPowers));
console.log("");

var magneto = {
    powers: {}
};

function Magneto(mutant) {
    while(mutant.powers.length > 0) {
        var power = mutant.powers.pop();

        if(!magneto.powers[power])
            magneto.powers[power] = true;
    }
}

mutants.forEach(function(mutant) {
    console.log(Magneto(mutant));
});

var newMutantPowers = {};

mutants.forEach(function(mutant) {
    Cerebro(mutantPowers, mutant);
});

console.log("");
console.log("Ending powers:");
console.log(JSON.stringify(newMutantPowers));
console.log("");
