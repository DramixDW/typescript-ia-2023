/*
* Créer une variable nom qui n'accept qu'un string.
* Créer une variable speed qui n'accepte que des nombres
* et est initialisé à 25.
* Créer une variable isLoading qui n'accepte que les booléens.
* Créer une variable age qui accepte les number ou les strings.
* une variable animals qui est un tableau de string et on effectue
* un push de la valeur "otter".
* Créer une variable info qui est un tableau contenant des strings
* ou des numbers  ou des booléens.
* une variable member qui ne peut être qu'un objet
*/

let nom: string;
let speed: number = 25;
let isLoading: boolean;
let age2Pierre: number | string;
let animals: string[] = [];
// let animals: Array<string> = []
animals.push('otter');

let info: Array<number | string | boolean>;
const info2: (string | number | boolean)[] = ["string", 42, true];

let member: {};