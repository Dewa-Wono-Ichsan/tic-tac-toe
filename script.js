function board(){

    let field = []
    for (let index = 0; index < 9; index++) {
        field.push('')
        
    }
    let symbolO = 'O'
    let symbolX = 'X'
    return{field, symbolO, symbolX}
}

function player(name,symbol){

    return{name, symbol}
}


function match(){
    function decide(){
    
        let chance = Math.random()
    
        if(chance <= 0.5){
            return board().symbolX
        } else if(chance > 0.5){
            return board().symbolO
        }
    }
    
    let player1 = player('Dewa', decide())
    let player2

    if(player1.symbol === board().symbolX){

        player2 = player('Jack', board().symbolO)
    
    } else if(player1.symbol === board().symbolO){

        player2 = player('Jack', board().symbolX)

    }

    return {player1, player2}
}

const input = (function(){
    const start = board().field
    const input1 = () => start.splice(parseInt(prompt(`enter your position ${match().player1.name}, you get ${match().player1.symbol}`)), 1, match().player1.symbol)
    const input2 = () => start.splice(parseInt(prompt(`enter your position ${match().player2.name}, you get ${match().player2.symbol}`)), 1 ,match().player2.symbol)

    return{start, input1, input2}
})()


function decide(){

    let chance = Math.random()
    if(chance <= 0.5){
        return 'player1'
    } else if(chance > 0.5){
        return 'player2'
    }
}

function turn(player){
    const board = input.start

    if(player === 'player1'){
            
        input.input1()
        input.input2()
        return board
    }else if(player === 'player2'){
            
        input.input2()
        input.input1()
        return board
    }
}

console.table(turn(decide()))