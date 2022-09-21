// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = kitten => {
    cats.push(kitten)
}

const destructivelyPrependCat = kitten => {
    cats.unshift(kitten)
}

const destructivelyRemoveLastCat = () => {
    cats.pop()
}

const destructivelyRemoveFirstCat = () => {
    cats.shift()
}

const appendCat = kitten => {
    const newCats = [...cats]
    newCats.push(kitten)
    return newCats
}

const prependCat = kitten => {
    const newCats = [...cats]
    newCats.unshift(kitten)
    return newCats
}

const removeLastCat = () => {
    const newCats = [...cats]
    newCats.pop()
    return newCats
}

const removeFirstCat = () => {
    const newCats = [...cats]
    newCats.shift()
    return newCats
}