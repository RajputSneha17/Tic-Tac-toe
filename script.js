let boxes = document.querySelectorAll(".box");
let pera = document.querySelector("p");
let resetButton = document.querySelector("button");
let current = 'fa-solid fa-xmark';
let gameActive = true;

startGame();

function startGame() {
    boxes.forEach(box => {
        box.innerHTML = '';
        box.style.backgroundColor = '';
    });
    
    gameActive = true;
    current = 'fa-solid fa-xmark';
    
    for (let box of boxes) {
        box.addEventListener('click', function() {
            if (!box.innerHTML && gameActive) {
                let newIcon = document.createElement('i');
                
                if (current === 'fa-solid fa-xmark') {
                    newIcon.className = 'fa-regular fa-circle';
                    current = 'fa-regular fa-circle';
                    box.style.backgroundColor = '#296E85';
                } else {
                    newIcon.className = 'fa-solid fa-xmark';
                    current = 'fa-solid fa-xmark';
                    box.style.backgroundColor = '#0E86D4';
                }
                
                box.appendChild(newIcon);
                checkWinner();
            }
        });
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (boxes[a].innerHTML && boxes[a].innerHTML === boxes[b].innerHTML && boxes[a].innerHTML === boxes[c].innerHTML) {
            pera.innerHTML = 'You win!';
            gameActive = false;
            return;
        }
    }

    const allBoxesFilled = Array.from(boxes).every(box => box.innerHTML);
    if (allBoxesFilled) {
        pera.innerHTML = 'Game over! It\'s a draw!';
        gameActive = false;
    }
}

resetButton.addEventListener('click', resetGame);

function resetGame() {
    startGame();
}
