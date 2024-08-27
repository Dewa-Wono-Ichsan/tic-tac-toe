function board(){

    let field = []
    const empty = ''
    for (let index = 0; index < 9; index++) {
        field.push(empty)
        
    }
    let symbolO = 'O'
    let symbolX = 'X'
    return{field, empty, symbolO, symbolX}
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

    return{start, player1, player2, turn}
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

        playerInput.boardGame.addEventListener('click', inputPlayer)
    }

    return startInt()

}

start()

function inputPlayer(event){

    function symbol1(position){
        return input.start.splice(position-1, 1, input.player1.symbol)
    }
    function symbol2(position){
        return input.start.splice(position-1, 1, input.player2.symbol)
    }

    const scan1 = input.start.filter(sign1Detect).length
    function sign1Detect(sign){
        return sign === input.player1.symbol        
    }
    const scan2 = input.start.filter(sign2Detect).length
    function sign2Detect(sign){
        return sign === input.player2.symbol        
    }

    if(input.turn === 'player1'){

        if(scan1 === 0 && scan2 === 0){

            switch (event.target.id){
                case 'box-1':
                    symbol1(1)
                    break;
                case 'box-2':
                    symbol1(2)
                    break;
                case 'box-3':
                    symbol1(3)
                    break;
                case 'box-4':
                    symbol1(4)
                    break;
                case 'box-5':
                    symbol1(5)
                    break;
                case 'box-6':
                    symbol1(6)
                    break;
                case 'box-7':
                    symbol1(7)
                    break;
                case 'box-8':
                    symbol1(8)
                    break;
                case 'box-9':
                    symbol1(9)
                    break;
                default:
                    console.log('not set')
                    break;
            }
        }else if(scan1 > scan2){
            switch (event.target.id){
                case 'box-1':
                    if(input.start.at(0) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(0) === board().empty){
                        
                        symbol2(1)
                    }
                    break;
                case 'box-2':
                    if(input.start.at(1) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(1) === board().empty){
                        
                        symbol2(2)
                    }
                    break;
                case 'box-3':
                    if(input.start.at(2) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(2) === board().empty){
                        
                        symbol2(3)
                    }
                    break;
                case 'box-4':
                    if(input.start.at(3) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(3) === board().empty){
                        
                        symbol2(4)
                    }
                    break;
                case 'box-5':
                    if(input.start.at(4) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(4) === board().empty){
                        
                        symbol2(5)
                    }
                    break;
                case 'box-6':
                    if(input.start.at(5) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(5) === board().empty){
                        
                        symbol2(6)
                    }
                    break;
                case 'box-7':
                    if(input.start.at(6) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(6) === board().empty){
                        
                        symbol2(7)
                    }
                    break;
                case 'box-8':
                    if(input.start.at(7) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(7) === board().empty){
                        
                        symbol2(8)
                    }
                    break;
                case 'box-9':
                    if(input.start.at(8) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(8) === board().empty){
                        
                        symbol2(9)
                    }
                    break;
                default:
                    break;
            }
        }else if(scan1 === scan2){
            switch (event.target.id){
                case 'box-1':
                    if(input.start.at(0) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(0) === board().empty){
                        
                        symbol1(1)
                    }
                    break;
                case 'box-2':
                    if(input.start.at(1) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(1) === board().empty){
                        
                        symbol1(2)
                    }
                    break;
                case 'box-3':
                    if(input.start.at(2) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(2) === board().empty){
                        
                        symbol1(3)
                    }
                    break;
                case 'box-4':
                    if(input.start.at(3) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(3) === board().empty){
                        
                        symbol1(4)
                    }
                    break;
                case 'box-5':
                    if(input.start.at(4) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(4) === board().empty){
                        
                        symbol1(5)
                    }
                    break;
                case 'box-6':
                    if(input.start.at(5) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(5) === board().empty){
                        
                        symbol1(6)
                    }
                    break;
                case 'box-7':
                    if(input.start.at(6) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(6) === board().empty){
                        
                        symbol1(7)
                    }
                    break;
                case 'box-8':
                    if(input.start.at(7) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(7) === board().empty){
                        
                        symbol1(8)
                    }
                    break;
                case 'box-9':
                    if(input.start.at(8) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(8) === board().empty){
                        
                        symbol1(9)
                    }
                    break;
            
                default:
                    break;
            }
        }else{
            console.error('not set');
        }


    }else if(input.turn === 'player2'){

        if(scan1 === 0 && scan2 === 0){

            switch (event.target.id){
                case 'box-1':
                    symbol2(1)
                    break;
                case 'box-2':
                    symbol2(2)
                    break;
                case 'box-3':
                    symbol2(3)
                    break;
                case 'box-4':
                    symbol2(4)
                    break;
                case 'box-5':
                    symbol2(5)
                    break;
                case 'box-6':
                    symbol2(6)
                    break;
                case 'box-7':
                    symbol2(7)
                    break;
                case 'box-8':
                    symbol2(8)
                    break;
                case 'box-9':
                    symbol2(9)
                    break;
                default:
                    console.log('not set')
                    break;
            }
        }else if(scan1 < scan2){
            switch (event.target.id){
                case 'box-1':
                    if(input.start.at(0) !== board().empty){
                        
                        alert(`choose another box`)
                    }else if(input.start.at(0) === board().empty){
                        
                        symbol1(1)
                    }
                    break;
                case 'box-2':
                    if(input.start.at(1) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(1) === board().empty){
                        
                        symbol1(2)
                    }
                    break;
                case 'box-3':
                    if(input.start.at(2) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(2) === board().empty){
                        
                        symbol1(3)
                    }
                    break;
                case 'box-4':
                    if(input.start.at(3) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(3) === board().empty){
                        
                        symbol1(4)
                    }
                    break;
                case 'box-5':
                    if(input.start.at(4) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(4) === board().empty){
                        
                        symbol1(5)
                    }
                    break;
                case 'box-6':
                    if(input.start.at(5) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(5) === board().empty){
                        
                        symbol1(6)
                    }
                    break;
                case 'box-7':
                    if(input.start.at(6) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(6) === board().empty){
                        
                        symbol1(7)
                    }
                    break;
                case 'box-8':
                    if(input.start.at(7) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(7) === board().empty){
                        
                        symbol1(8)
                    }
                    break;
                case 'box-9':
                    if(input.start.at(8) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(8) === board().empty){
                        
                        symbol1(9)
                    }
                    break;
                default:
                    console.error('not set');
                    break;
            }
        }else if(scan1 === scan2){
            switch (event.target.id){
                case 'box-1':
                    if(input.start.at(0) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(0) === board().empty){
                        
                        symbol2(1)
                    }
                    break;
                case 'box-2':
                    if(input.start.at(1) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(1) === board().empty){
                        
                        symbol2(2)
                    }
                    break;
                case 'box-3':
                    if(input.start.at(2) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(2) === board().empty){
                        
                        symbol2(3)
                    }
                    break;
                case 'box-4':
                    if(input.start.at(3) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(3) === board().empty){
                        
                        symbol2(4)
                    }
                    break;
                case 'box-5':
                    if(input.start.at(4) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(4) === board().empty){
                        
                        symbol2(5)
                    }
                    break;
                case 'box-6':
                    if(input.start.at(5) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(5) === board().empty){
                        
                        symbol2(6)
                    }
                    break;
                case 'box-7':
                    if(input.start.at(6) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(6) === board().empty){
                        
                        symbol2(7)
                    }
                    break;
                case 'box-8':
                    if(input.start.at(7) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(7) === board().empty){
                        
                        symbol2(8)
                    }
                    break;
                case 'box-9':
                    if(input.start.at(8) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(8) === board().empty){
                        
                        symbol2(9)
                    }
                    break;
                default:
                    console.error('not set');
                    break;
            }
        }else{
            console.error('not set')
        }

    }else{
        console.error('not set');
    }
}