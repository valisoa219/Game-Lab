const board = document.querySelectorAll('.cell');
const resetBtn = document.getElementById('reset');
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

function handleClick(e) {
  const index = e.target.getAttribute('data-index');
  if (gameState[index] !== '') return;
  gameState[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

board.forEach(cell => cell.addEventListener('click', handleClick));

resetBtn.addEventListener('click', () => {
  gameState = ['', '', '', '', '', '', '', '', ''];
  board.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
});
