interface User {
    flag?: boolean,
    role: string,
    name: string,
}

interface Bot {
    flag?: boolean,
    commands: string[],
    description: string,
}

function removeFlag<T extends { flag?: boolean}>(object: { flag?: boolean}): T {
    delete object.flag;
    return object as T;
}

const user: User = {
    role: 'admin',
    name: 'Jhon Doe',
    flag: true,
}

const bot: Bot = {
    commands: ["ls"],
    description: 'wolololo',
}

let anyObject = removeFlag<Bot>(bot);
let anyUser = removeFlag<User>(user);

function botFunction(bot: Bot) {
    return bot;
}

botFunction(anyObject)