let player;

let isGameStillOn = true;

function startGame() {
  
  const startDiv = document.getElementById('start');
  const gameboard = document.getElementById('grid');
  
  startDiv.style.setProperty('display', 'none');
  gameboard.style.setProperty('opacity', '1');
  
  player = document.getElementById('player').value;

}

document.getElementById('grid').addEventListener('click', (e) => {
  let id = e.target.id;
  
  if(e.target.innerHTML === '') {
    e.target.innerHTML = 'X'
    updateObj(id, player);
    if(isGameStillOn === true) {
      checkWinner()
      computersTurn()
    } 
  }
  
})

let squares = {
  'a': '',
  'b': '',
  'c': '',
  'd': '',
  'e': '',
  'f': '',
  'g': '',
  'h': '',
  'i': '',
}

function updateObj(id, whoMadeMove) {
  if(whoMadeMove === player) {
    squares[id] = 'x';
  } else {
    squares[id] = 'o';
  }
  
  checkWinner();
}

function computersTurn() {
  let emptyBoxes = []
  
  let keys = Object.keys(squares);
  
  keys.forEach((key) => {
    if(squares[key] === '') {
      emptyBoxes.push(key);
    }
  })
  
  const move = emptyBoxes[Math.floor(Math.random()*emptyBoxes.length)]
  
  function computersMove(move) {
    document.getElementById(move).innerHTML = 'O'
    
    updateObj(move, 'computer')
  }
  
  computersMove(move) 
}

function clearBoard() {
  document.getElementById('a').innerHTML = ''
  document.getElementById('b').innerHTML = ''
  document.getElementById('c').innerHTML = ''
  document.getElementById('d').innerHTML = ''
  document.getElementById('e').innerHTML = ''
  document.getElementById('f').innerHTML = ''
  document.getElementById('g').innerHTML = ''
  document.getElementById('h').innerHTML = ''
  document.getElementById('i').innerHTML = ''
  
  document.getElementById('results').style.opacity = '0'
  document.getElementById('results').style.zIndex = '1'
  
  document.getElementById('grid').style.opacity = '0'
  
  squares = {
    'a': '',
    'b': '',
    'c': '',
    'd': '',
    'e': '',
    'f': '',
    'g': '',
    'h': '',
    'i': '',
  }
  
  player = '';
  
  document.getElementById('start').style.display = 'flex';
  
  isGameStillOn = true;
  
  document.getElementById('player').value = ''
}

function checkWinner() {
  /* winning combinations 
     1, 2, 3
     4, 5, 6
     7, 8, 9
     1, 5, 9
     7, 5, 3
     1, 4, 7
     2, 5, 8
     3, 6, 9 
  */
  
  let results = document.getElementById('results')
  let grid = document.getElementById('grid')
  let p = document.getElementById('winner')
  
  function displayResults(winner) {
    results.style.opacity = '1'
    grid.style.opacity = '.2'
    p.innerHTML = winner + ' wins!';
    results.style.zIndex = '3'
  }
  
  if(squares.a === 'x' && squares.b === 'x' && squares.c === 'x') {
    displayResults(player)
    isGameStillOn = false
  } else if(squares.d === 'x' && squares.e === 'x' && squares.f === 'x') {
    displayResults(player)
    isGameStillOn = false
  } else if(squares.g === 'x' && squares.h === 'x' && squares.i === 'x') {
    displayResults(player)
    isGameStillOn = false
  } else if(squares.a === 'x' && squares.e === 'x' && squares.i === 'x') {
    displayResults(player)
    isGameStillOn = false
  } else if(squares.g === 'x' && squares.e === 'x' && squares.c == 'x') {
    displayResults(player)
    isGameStillOn = false
  } else if(squares.a === 'x' && squares.d === 'x' && squares.g === 'x') {
    displayResults(player)
    isGameStillOn = false
  } else if(squares.b === 'x' && squares.e === 'x' && squares.h === 'x') {
    displayResults(player)
    isGameStillOn = false
  } else if(squares.c === 'x' && squares.f === 'x' && squares.i === 'x') {
    displayResults(player)
    isGameStillOn = false
  }
  
  if(squares.a === 'o' && squares.b  === 'o' && squares.c === 'o') {
    displayResults('computer')
  } else if(squares.d === 'o' && squares.e === 'o' && squares.f === 'o') {
    displayResults('computer')
  } else if(squares.g === 'o' && squares.h === 'o' && squares.i === 'o') {
    displayResults('computer')
  } else if(squares.a === 'o' && squares.e === 'o' && squares.i === 'o') {
    displayResults('computer')
  } else if(squares.g === 'o' && squares.e === 'o' && squares.c === 'o') {
    displayResults('computer')
  } else if(squares.a === 'o' && squares.d === 'o' && squares.g === 'o') {
    displayResults('computer')
  } else if(squares.b === 'o' && squares.e === 'o' && squares.h === 'o') {
    displayResults('computer')
  } else if(squares.c === 'o' && squares.f === 'o' && squares.i === 'o') {
    displayResults('computer')
  } 
  
}
