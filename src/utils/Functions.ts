export const checkWinner = (player: number, computer: number) => {
    if (player === 0 && computer === 1) return 'Computer'
    else if (player === 1 && computer === 2) return 'Computer'
    else if (player === 2 && computer === 0) return 'Computer'
    else if (player === 2 && computer === 1) return 'Player'
    else if (player === 1 && computer === 0) return 'Player'
    else if (player === 0 && computer === 2) return 'Player'
    else return 'Tie!'
}
