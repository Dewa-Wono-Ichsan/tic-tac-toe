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
    function first(){
        let chance = Math.random()
        if(chance <= 0.5){
            return 'player1'
        } else if(chance > 0.5){
            return 'player2'
        }
    }
    const turn = first()
    const input1 = (value) => input.start.splice(value, 1, player1.symbol)
    const input2 = (value) => input.start.splice(value, 1, player2.symbol)

    return{start, player1, player2, turn, input1, input2}
})()

const playerInput = (function(){
     const start = document.querySelector('.start')
     const boardGame = document.querySelector('.container-board')
     
     return{start, boardGame}
})()

function start(){

    function startInt(){

        playerInput.start.addEventListener('click', play)

    }

    function play(){

        playerInput.boardGame.addEventListener('click', inputSymbolPlayer)
    }

    return startInt()

}

start()

function inputSymbolPlayer(event){

    if(input.turn === 'player1'){

        switch (event.target.id){
            case 'box-1':
                input.start.splice(0, 1, input.player1.symbol)
                break;
            case 'box-2':
                input.start.splice(1, 1, input.player1.symbol)
                break;
            case 'box-3':
                input.start.splice(2, 1, input.player1.symbol)
                break;
            case 'box-4':
                input.start.splice(3, 1, input.player1.symbol)
                break;
            case 'box-5':
                input.start.splice(4, 1, input.player1.symbol)
                break;
            case 'box-6':
                input.start.splice(5, 1, input.player1.symbol)
                break;
            case 'box-7':
                input.start.splice(6, 1, input.player1.symbol)
                break;
            case 'box-8':
                input.start.splice(7, 1, input.player1.symbol)
                break;
            case 'box-9':
                input.start.splice(8, 1, input.player1.symbol)
                break;
            default:
                console.log('not set')
                break;
        }

    }else if(input.turn === 'player2'){

        switch (event.target.id){
            case 'box-1':
                input.start.splice(0, 1, input.player2.symbol)
                break;
            case 'box-2':
                input.start.splice(1, 1, input.player2.symbol)
                break;
            case 'box-3':
                input.start.splice(2, 1, input.player2.symbol)
                break;
            case 'box-4':
                input.start.splice(3, 1, input.player2.symbol)
                break;
            case 'box-5':
                input.start.splice(4, 1, input.player2.symbol)
                break;
            case 'box-6':
                input.start.splice(5, 1, input.player2.symbol)
                break;
            case 'box-7':
                input.start.splice(6, 1, input.player2.symbol)
                break;
            case 'box-8':
                input.start.splice(7, 1, input.player2.symbol)
                break;
            case 'box-9':
                input.start.splice(8, 1, input.player2.symbol)
                break;
            default:
                console.log('not set')
                break;
        }
    }
}