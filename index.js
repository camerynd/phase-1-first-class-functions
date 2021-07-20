function receivesAFunction(beepBoop) {
    beepBoop()
}
function returnsANamedFunction() {
    const add = (num1, num2) => num1 + num2
    return add
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log('say something')
    }
}