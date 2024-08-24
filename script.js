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

    const symbol = {
        
        'player_1': {
    
            'box_1': input.input1(0),
            'box_2': input.input1(1),
            'box_3': input.input1(2),
            'box_4': input.input1(3),
            'box_5': input.input1(4),
            'box_6': input.input1(5),
            'box_7': input.input1(6),
            'box_8': input.input1(7),
            'box_9': input.input1(8),
        },
        'player_2': {
    
            'box_1': input.input2(0),
            'box_2': input.input2(1),
            'box_3': input.input2(2),
            'box_4': input.input2(3),
            'box_5': input.input2(4),
            'box_6': input.input2(5),
            'box_7': input.input2(6),
            'box_8': input.input2(7),
            'box_9': input.input2(8),
        },
    }

    if(input.turn === 'player1'){

        switch (event.target.id){
            case 'box-1':
                symbol.player_1.box_1
                break;
            case 'box-2':
                symbol.player_1.box_2
                break;
            case 'box-3':
                symbol.player_1.box_3
                break;
            case 'box-4':
                symbol.player_1.box_4
                break;
            case 'box-5':
                symbol.player_1.box_5
                break;
            case 'box-6':
                symbol.player_1.box_6
                break;
            case 'box-7':
                symbol.player_1.box_7
                break;
            case 'box-8':
                symbol.player_1.box_8
                break;
            case 'box-9':
                symbol.player_1.box_9
                break;
            default:
                console.log('not set')
                break;
        }

    }else if(input.turn === 'player2'){

        switch (event.target.id){
            case 'box-1':
                symbol.player_2.box_1
                break;
            case 'box-2':
                symbol.player_2.box_2
                break;
            case 'box-3':
                symbol.player_2.box_3
                break;
            case 'box-4':
                symbol.player_2.box_4
                break;
            case 'box-5':
                symbol.player_2.box_5
                break;
            case 'box-6':
                symbol.player_2.box_6
                break;
            case 'box-7':
                symbol.player_2.box_7
                break;
            case 'box-8':
                symbol.player_2.box_8
                break;
            case 'box-9':
                symbol.player_2.box_9
                break;
            default:
                console.log('not set')
                break;
        }
    }
}