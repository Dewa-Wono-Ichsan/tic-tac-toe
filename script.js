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
    const input1 = () => {
        let num = parseInt(prompt(`Enter your choice ${player1.name} for symbol ${player1.symbol}`))
        start.splice(num, 1, player1.symbol)
    }
    const input2 = () => {
        let num = parseInt(prompt(`Enter your choice ${player2.name} for symbol ${player2.symbol}`))
        start.splice(num, 1, player2.symbol)
    }

    return{start, player1, player2, input1, input2}
})()

function turn(){

    function decide(){

        let chance = Math.random()
        if(chance <= 0.5){
            return 'player1'
        } else if(chance > 0.5){
            return 'player2'
        }
    }

    let play = decide()

    const board = input.start

    if(play === 'player1'){
            
        input.input1()

        for (let index = 0; index < 4; index++) {
            
            input.input2()
            input.input1()
        }
        return board
    }else if(play === 'player2'){
            
        input.input2()
        for (let index = 0; index < 4; index++) {
            
            input.input1()
            input.input2()            
        }
        return board
    }
}

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