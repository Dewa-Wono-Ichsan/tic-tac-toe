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
    const {player1, player2} = match()
    const input1 = () => start.splice(parseInt(prompt(`enter your position ${player1.name}, your symbol is ${player1.symbol}`)), 1, player1.symbol)
    const input2 = () => start.splice(parseInt(prompt(`enter your position ${player2.name}, your symbol is ${player2.symbol}`)), 1, player2.symbol)

    return{start, player1, player2, input1, input2}
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

        for (let index = 0; index < 4; index++) {
            
            input.input2()
            input.input1()
        }
        return board
    }else if(player === 'player2'){
            
        input.input2()
        for (let index = 0; index < 4; index++) {
            
            input.input1()
            input.input2()            
        }
        return board
    }
}

// console.table(turn(decide()))

const boardGame = document.querySelector('.container-board')
boardGame.addEventListener('click', inputSymbolPlayer)

function inputSymbolPlayer(event){
    
    switch (event.target.id) {
        case 'box-1':
            console.log('1')
            break;
        case 'box-2':
            console.log('2')
            break;
        case 'box-3':
            console.log('3')
            break;
        case 'box-4':
            console.log('4')
            break;
        case 'box-5':
            console.log('5')
            break;
        case 'box-6':
            console.log('6')
            break;
        case 'box-7':
            console.log('7')
            break;
        case 'box-8':
            console.log('8')
            break;
        case 'box-9':
            console.log('9')
            break;
        default:
            console.log('not set')
            break;
    }
}