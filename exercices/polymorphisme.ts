/*
*   Créer une fonction makeSwim(), son argument sera un tableau d'animal
*   Si les animaux sont des animaux aquatiques alors, on apelle leur propriété
*   swim().
*   Si pas, on affiche un message pour dire qu'il ne sont pas capables de nager
*   (mot-clé: instanceof)
*/

interface Animal {
    specie: string;
}

abstract class AquaticAnimal implements Animal {
    abstract specie: string;
    swim() {
        console.log('je nage');
    }
}

class Pigeon implements Animal {
    specie: string = 'pigeon';
}
const pigeon = new Pigeon();

class Shark extends AquaticAnimal {
    specie: string = 'requin';
}
const shark = new Shark();

function makeSwim(animals: Animal[]) {
    for (const animal of animals) {
       if (animal instanceof AquaticAnimal) {
            animal.swim();
       } else {
            console.log(`${animal.specie} ne sait pas nager :/`)
       } 
    }
}

makeSwim([pigeon, shark]);