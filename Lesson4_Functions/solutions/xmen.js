function hasPowers(mutant) {
    return mutant.powers && Array.isArray(mutant.powers);
}

function Cerebro(powers, mutant) {
    if(!hasPowers(mutant)) return;

    /* For loop version
    for(var i = 0; i < mutant.powers.length; i++) {
        if(!powers[power])
            powers[power] = [mutant];
        else
            powers[power].push(mutant);
    }
    */

    //forEach version
    mutant.powers.forEach(function(power) {
        if(!powers[power])
            powers[power] = [mutant.name];
        else
            powers[power].push(mutant.name);
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

var Magneto = (function() {
    var magneto = {
        name: "Magneto",
        powers: {
            "magnetism": true
        }
    };
    return function(mutant) {
        if(hasPowers(mutant)) {
            while(mutant.powers.length > 0) {
                var power = mutant.powers.pop();

                if(!magneto.powers[power])
                    magneto.powers[power] = true;
            }
        }

        return JSON.stringify(magneto.powers);
    };
})();

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
