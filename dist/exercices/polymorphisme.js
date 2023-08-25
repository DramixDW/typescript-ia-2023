"use strict";
/*
*   Créer une fonction makeSwim(), son argument sera un tableau d'animal
*   Si les animaux sont des animaux aquatiques alors, on apelle leur propriété
*   swim().
*   Si pas, on affiche un message pour dire qu'il ne sont pas capables de nager
*   (mot-clé: instanceof)
*/
class AquaticAnimal {
    swim() {
        console.log('je nage');
    }
}
class Pigeon {
    constructor() {
        this.specie = 'pigeon';
    }
}
const pigeon = new Pigeon();
class Shark extends AquaticAnimal {
    constructor() {
        super(...arguments);
        this.specie = 'requin';
    }
}
const shark = new Shark();
function makeSwim(animals) {
    for (const animal of animals) {
        if (animal instanceof AquaticAnimal) {
            animal.swim();
        }
        else {
            console.log(`${animal.specie} ne sait pas nager :/`);
        }
    }
}
makeSwim([pigeon, shark]);
