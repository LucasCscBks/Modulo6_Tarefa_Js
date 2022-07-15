const board = document.querySelectorAll('.elemento');
const restart = document.querySelector('#restart');
const show = document.querySelector('#result');
let play = 'X'

function go() {
    for (let i = 0; i < 9; i ++) {
        let cont = 0
        play = 'X'
        board[i].innerHTML = ''
        show.innerHTML = ''
        board[i].addEventListener('click', teste);
        function teste() {
            board[i].innerHTML = play
            board[i].removeEventListener('click', teste);
            cont ++
            // Testando vencedor //
            if (board[0].innerHTML == board[1].innerHTML && board[0].innerHTML == board[2].innerHTML && board[0].innerHTML != '') {
                
                show.innerHTML = `Vencedor Jogador ${play}`
                
            } else if (board[3].innerHTML == board[4].innerHTML && board[3].innerHTML == board[5].innerHTML && board[3].innerHTML != '') {
                
                show.innerHTML = `Vencedor Jogador ${play}`

            } else if (board[6].innerHTML == board[7].innerHTML && board[6].innerHTML == board[8].innerHTML && board[6].innerHTML != '') {
                
                show.innerHTML = `Vencedor Jogador ${play}`

            } else if (board[0].innerHTML == board[3].innerHTML && board[0].innerHTML == board[6].innerHTML && board[0].innerHTML != '') {
                
                show.innerHTML = `Vencedor Jogador ${play}`

            }  else if (board[1].innerHTML == board[4].innerHTML && board[1].innerHTML == board[7].innerHTML && board[1].innerHTML != '') {
                
                show.innerHTML = `Vencedor Jogador ${play}`
                
            } else if (board[2].innerHTML == board[5].innerHTML && board[2].innerHTML == board[8].innerHTML && board[2].innerHTML != '') {
                
                show.innerHTML = `Vencedor Jogador ${play}`
                
            } else if (board[0].innerHTML == board[4].innerHTML && board[0].innerHTML == board[8].innerHTML && board[0].innerHTML != '') {
                
                show.innerHTML = `Vencedor Jogador ${play}`
                
            } else if (board[2].innerHTML == board[4].innerHTML && board[2].innerHTML == board[6].innerHTML && board[2].innerHTML != '') {
                
                show.innerHTML = `Vencedor Jogador ${play}`
                
            } else {
                if (cont == 9) {
                    show.innerHTML = `EMPATE`
                }
                
            }

            if (play == 'X') {
                play = 'O'
            } else if (play == 'O') {
                play = 'X'
            }
        }
    }
    
}
go()
restart.addEventListener('click', go);


