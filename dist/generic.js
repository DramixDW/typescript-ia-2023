"use strict";
function removeFlag(object) {
    delete object.flag;
    return object;
}
const user = {
    role: 'admin',
    name: 'Jhon Doe',
    flag: true,
};
const bot = {
    commands: ["ls"],
    description: 'wolololo',
};
let anyObject = removeFlag(bot);
let anyUser = removeFlag(user);
function botFunction(bot) {
    return bot;
}
botFunction(anyObject);
