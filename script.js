function board(){
    let field = []
    let symbolO = 'O'
    let symbolX = 'X'
    return{field, symbolO, symbolX}
}

function player(name,symbol){

    return{name, symbol}
}

function match(){

    let start = board().field
    return {start}
}

console.log(player('John', board().symbolX));
console.log(player('Jack', board().symbolO));
console.log(match().start);