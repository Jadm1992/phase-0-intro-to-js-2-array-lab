// Write your solution here!

const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
    cats.push(`Ralph`)
}
function destructivelyPrependCat(name) {
    cats.unshift(`Bob`)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
const coolercat = [...cats, "Broom"];
function appendCat(Broom){
    cats.slice("Broom")
    return coolercat
}
const prependCat = (name) => {
    let newArray1 = [...cats];
    newArray1.unshift(name);
    return newArray1 }

const removeLastCat = (name) => {
    let newArray2 = [...cats]
    newArray2.pop(name)
    return newArray2 }

    const removeFirstCat = (name) => {
        let newArray3 = [...cats]
        newArray3.shift(name)
        return newArray3
    }