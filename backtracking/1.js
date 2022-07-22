var board = null
function isSafe(i, j, boardSize){
    for(let m = 0; m < boardSize; m++){
        if(board[i][m] == 1 || board[m][j] == 1) return false
        if(i - m >= 0 && j - m >= 0 && board[i - m][j - m] == 1) return false
        if(i - m >= 0 && j + m < boardSize && board[i - m][j + m] == 1) return false
    }
    return true
}
function nQueens(row, boardSize){
    // console.log(board)
    //Base Condition
    if(row >= boardSize) return true
    //Conditional Recursive Call
    for(let col = 0; col < boardSize; col++){
        if(isSafe(row, col, boardSize)){
            board[row][col] = 1
            if(nQueens(row + 1, boardSize)) return true
            board[row][col] = 0
        }
    }
    return false
}
function driver(boardSize){
    //initialize board
    board = Array(boardSize).fill().map(() => Array(boardSize).fill(0))
    //initiate recursive functiopn
    nQueens(0, boardSize)
    // isSafe(1, 1, boardSize)
    //show the solution
    console.log(board)
}
driver(8)