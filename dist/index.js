"use strict";
let firstName;
firstName = true;
firstName = 'banane';
// Il me propose les fonctions du type string car je l'ai assigné comme tel 
// au-dessus
firstName.charAt(1);
firstName = 42;
// Typescript ne veut plus nous laisser écrire charAt
// car au dernières nouvelles mon firstName est devenu 
// un nombre
// firstName.charAt()
//on assigne le type booléen à notre variable
let hasMulet;
// typescript crée une erreur à la transpilation
// si on assigne à notre variable une valeur non
// booléenne
hasMulet = true;
let lastName;
let age;
// Créer des tableaux
const colors = ['mauve'];
const note = [42];
const tableauBizarre = [42, false];
//Les tuples
//tableau avec un nombre fixe d'éléments
const monTuple = ['banane', 42];
//comme les éléments sont typés par index
//il peut savoir quel élément à accès à quel
//fonction/propriétés
monTuple[0].charAt(2);
monTuple[1].toString();
const myCharacter = {
    level: 42,
    nickname: 'Dramix',
};
// les enums
var Roles;
(function (Roles) {
    Roles["USER"] = "user";
    Roles["ADMIN"] = "admin";
    Roles["SUPERADMIN"] = "superadmin";
})(Roles || (Roles = {}));
let userRole = Roles.ADMIN;
if (userRole === Roles.ADMIN) {
    console.log("c'est un admin !");
}
// any
let maVariable;
// Il ne renvoie pas d'erreur à cause du any
// on lui dit de tout accepter
// maVariable.push('abbérant');
//unknown
//Avec le unknown, il nous demande
// de vérifier le type avant de faire quoique ce soit
let maVariableInconnu;
if (Array.isArray(maVariableInconnu)) {
    maVariableInconnu.push('dsf');
}
if (typeof maVariableInconnu === 'string') {
    maVariableInconnu.charAt(45);
}
// Les functions
//On type notre function en disant qu'elle ne renvoie rien
function banane() {
    console.log('banane');
}
function add(nbr1, nbr2) {
    return nbr1 + nbr2;
}
let result = add(42, 42);
function maFunctionACallBack(arg1, callback) {
    console.log(arg1);
    return callback(true);
}
// Typescript check strictement la valeur du retour
// de ma callback
// Mais si les arguments ne sont pas présent, il n'y a pas d'erreur
// de compilation
maFunctionACallBack('otter', () => {
    return 2;
});
function optionalArgs(argMandatory, argOptional) {
    return argMandatory + argOptional;
}
optionalArgs('banane');
optionalArgs('banane', 'pomme');
// optionalArgs('banane', 3) PAS OK
// un argument spread doit forcément être un tableau
function mergeElements(...args) {
    return args;
}
mergeElements('banane', 'pomme', 'orange');
const player = {
    name: 'Dramix',
    level: 42,
    note: 'Loutre',
};
function levelUp(player) {
    player.level = player.level + 1;
}
levelUp(player);
let fakeNumber = '42000';
function age2Glace(age) {
    //On peut toExpotential parce qu'arrivé à ce point-là
    // on lui dit qui doit le considérer comme un nombre
    return age.toExponential();
}
//types littéraux
function save(mode) {
    return mode;
}
save('delete');
