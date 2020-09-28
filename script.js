window.onload = () => {
    document.querySelector('#btn').addEventListener('click', () => {
        document.querySelector('#the-excuse').innerHTML = excuseGenerator();
    });
    document.querySelector('#second-btn').addEventListener('click', () => {
        document.querySelector('#the-name').innerHTML = secondExcuseGenerator();
    });
    document.querySelector('#third-btn').addEventListener('click', () => {
        document.querySelector('#the-number').innerHTML = secondExcuseGenerator();
    });
}

let excuseGenerator = () => {

    //? Arrays
    let firstWord = ['A ', 'A random '];
    let adjective = ['skinny ', 'crazy ', 'high ', 'nasty '];
    let noun = ['dog ', 'old man ', 'hippy ', 'driver '];
    let action = ['stole my ', 'broke my ', 'destroyed my ', ' damaged my '];
    let possession = ['bike ', 'drivers licence ', 'car ', 'USB ', 'homework '];
    let where = ['at the supermarket ', 'at the mall ', 'at the gas station ', ];


    let firstWord1 = Math.floor((Math.random() * firstWord.length));
    let adjective2 = Math.floor((Math.random() * adjective.length));
    let noun3 = Math.floor((Math.random() * noun.length));
    let action4 = Math.floor((Math.random() * action.length));
    let possession5 = Math.floor((Math.random() * possession.length));
    let where6 = Math.floor((Math.random() * where.length));

    // return firstWord[firstWord1] + ' ' + adjective[adjective2] + ' ' + noun[noun3] + ' ' + action[action4] + ' ' + possession[possession5] + ' ' + where[where6];
    return `${firstWord[firstWord1]}
    ${adjective[adjective2]}
    ${noun[noun3]}
    ${action[action4]}
    ${where[where6]}`
};

let secondExcuseGenerator = () => {

    //? Arrays
    let firstName = ['John ', 'James ', 'Julian ', 'Adam ', 'Alex '];
    let lastName = ['Smith ', 'Garcia ', ' Doe ', 'Diaz '];

    let firstName1 = Math.floor((Math.random() * firstWord.length));
    let lastName2 = Math.floor((Math.random() * adjective.length));


    return firstName[firstName1] + ' ' + lastName[lastName2];
};

let thirdExcuseGenerator = () => {

    let number = Math.floor((Math.random() * 10) + 1);

    return number;
}