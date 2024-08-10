function board(){

    let field = []
    let symbolO = 'O'
    let symbolX = 'X'
    return{field, symbolO, symbolX}
}

function player(name,symbol){

    return{name, symbol}
}

function decide(){

    let chance = Math.random()

    if(chance <= 0.5){
        return board().symbolX
    } else if(chance > 0.5){
        return board().symbolO
    }
}

function match(){

    let player1 = player('Dewa', decide())
    let player2
    let start = board().field

    if(player1.symbol === board().symbolX){

        player2 = player('Jack', board().symbolO)
    
    } else if(player1.symbol === board().symbolO){

        player2 = player('Jack', board().symbolX)

    }

    return {player1, player2, start}
}