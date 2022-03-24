// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats
}

function appendCat(name) {
    // let newCat = name;
    // let newCats = [cats, ...newCat];
    // return newCats
    let newCats = cats.slice();
    newCats.push(name);
    return newCats
}

function prependCat(name) {
    // let newCats = cats.slice();
    // newCats.unshift(name);
    // return newCats
    let moreCats = [name, ...cats];
    return moreCats
}

function removeLastCat() {
    let booGarfield = cats.slice(0, 2);
    return booGarfield
}

function removeFirstCat() {
    let booMilo = cats.slice(1);
    return booMilo
}