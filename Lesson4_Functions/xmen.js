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
