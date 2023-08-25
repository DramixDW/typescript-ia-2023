let firstName;
firstName = true;
firstName = 'banane';
// Il me propose les fonctions du type string car je l'ai assigné comme tel 
// au-dessus
firstName.charAt(1)
firstName = 42;
// Typescript ne veut plus nous laisser écrire charAt
// car au dernières nouvelles mon firstName est devenu 
// un nombre
// firstName.charAt()

//on assigne le type booléen à notre variable
let hasMulet: boolean;
// typescript crée une erreur à la transpilation
// si on assigne à notre variable une valeur non
// booléenne
hasMulet = true;
let lastName: string;
let age: number;

// Créer des tableaux

const colors: string[] = ['mauve'];
const note: Array<number> = [42];

const tableauBizarre: Array<number | boolean> = [42, false];

//Les tuples
//tableau avec un nombre fixe d'éléments

const monTuple: [string, number] = ['banane', 42]
//comme les éléments sont typés par index
//il peut savoir quel élément à accès à quel
//fonction/propriétés
monTuple[0].charAt(2)
monTuple[1].toString();

const myCharacter: {
    nickname: string,
    level: number,
    // le ? rend la propriété optionnel
    isSick?: boolean
} = {
    level: 42,
    nickname: 'Dramix',
}

// les enums

enum Roles {
    USER = 'user',
    ADMIN = 'admin',
    SUPERADMIN = 'superadmin'
}

let userRole: Roles = Roles.ADMIN;

if (userRole === Roles.ADMIN) {
    console.log("c'est un admin !");
}

// any

let maVariable: any;
// Il ne renvoie pas d'erreur à cause du any
// on lui dit de tout accepter
// maVariable.push('abbérant');

//unknown

//Avec le unknown, il nous demande
// de vérifier le type avant de faire quoique ce soit
let maVariableInconnu: unknown;

if (Array.isArray(maVariableInconnu)) {
    maVariableInconnu.push('dsf')
}

if (typeof maVariableInconnu === 'string') {
    maVariableInconnu.charAt(45);
}


// Les functions

//On type notre function en disant qu'elle ne renvoie rien
function banane(): void {
    console.log('banane');
}

function add(nbr1: number, nbr2: number) {
    return nbr1 + nbr2
}

let result = add(42, 42);

function maFunctionACallBack(arg1: string, callback: (arg: boolean) => number) {
    console.log(arg1);
    return callback(true);
}

// Typescript check strictement la valeur du retour
// de ma callback
// Mais si les arguments ne sont pas présent, il n'y a pas d'erreur
// de compilation
maFunctionACallBack('otter', () => {
    return 2;
})

function optionalArgs(argMandatory: string, argOptional?: string) {
    return argMandatory + argOptional;
}

optionalArgs('banane')
optionalArgs('banane', 'pomme')
// optionalArgs('banane', 3) PAS OK

// un argument spread doit forcément être un tableau
function mergeElements(...args: string[]) {
    return args;
}

mergeElements('banane', 'pomme', 'orange');

interface Player {
    name: string,
    level: number,
    isAlive: boolean
}

interface PremiumPlayer {
    name: string,
    level: number,
    note: string,
}

const player: PremiumPlayer = {
    name: 'Dramix',
    level: 42,
    note: 'Loutre',
}

function levelUp(player: Player) {
    player.level = player.level +1;
}

levelUp(player as unknown as Player);

let fakeNumber: number = '42000' as unknown as number;

function age2Glace(age: string | number) {
    //On peut toExpotential parce qu'arrivé à ce point-là
    // on lui dit qui doit le considérer comme un nombre
    return (age as number).toExponential()
}

//types littéraux
function save(mode: "edit" | "create" | "delete") {
    return mode;
}

save('delete');
