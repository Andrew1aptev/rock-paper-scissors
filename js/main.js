const imageLeft = document.querySelector(".game__image--left");
const imageRight = document.querySelector(".game__image--right");

const btnPaper = document.querySelector(".game__button--paper");
const btnRock = document.querySelector(".game__button--rock");
const btnScissors = document.querySelector(".game__button--scissors");

const userScore = document.querySelector(".game__score--user-number");
const computerScore = document.querySelector(".game__score--computer-number");

const winner = document.querySelector(".game__winner")

// функция должна возвращать одну из строчек
function randomImage() {
    const array = ["game__image--rock", "game__image--paper", "game__image--scissors"];
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomString = array[randomIndex];

    // Удалить все классы изображения
    array.forEach((className) => {
        imageLeft.classList.remove(className);
    });

    // Добавить случайный класс изображения
    imageLeft.classList.add(randomString);
}

btnPaper.addEventListener("click", randomImage);
btnRock.addEventListener("click", randomImage);
btnScissors.addEventListener("click", randomImage);

function checkWinner() {
    const gameClasses = ["game__image--rock", "game__image--paper", "game__image--scissors"];

    for (let i = 0; i < gameClasses.length; i++) {
        if (imageLeft.classList.contains(gameClasses[i]) && imageRight.classList.contains(gameClasses[i])) {
            // Если выборы совпадают, ничего не делаем
            return;
        }
    }
    if (imageLeft.classList.contains("game__image--scissors") && imageRight.classList.contains("game__image--paper") ||
        imageLeft.classList.contains("game__image--paper") && imageRight.classList.contains("game__image--rock") ||
        imageLeft.classList.contains("game__image--rock") && imageRight.classList.contains("game__image--scissors")
    ) {
        computerScore.textContent = Number(computerScore.textContent) + 1;
    } else {
        userScore.textContent = Number(userScore.textContent) + 1;
    }
}
function determineWinner() {
    if (Number(userScore.textContent) > Number(computerScore.textContent)) {
        winner.textContent = "You win!"
    } else if (userScore.textContent === computerScore.textContent) {
        winner.textContent = "Draw!"
    } else {
        winner.textContent = "Computer wins!"
    }
}
btnPaper.addEventListener("click", function () {
    const array = ["game__image--rock", "game__image--paper", "game__image--scissors"];
    array.forEach((className) => {
        imageRight.classList.remove(className);
    });
    imageRight.classList.add("game__image--paper")
    checkWinner();
    determineWinner();
});
btnRock.addEventListener("click", function () {
    const array = ["game__image--rock", "game__image--paper", "game__image--scissors"];
    array.forEach((className) => {
        imageRight.classList.remove(className);
    });
    imageRight.classList.add("game__image--rock")
    checkWinner();
    determineWinner();
});
btnScissors.addEventListener("click", function () {
    const array = ["game__image--rock", "game__image--paper", "game__image--scissors"];
    array.forEach((className) => {
        imageRight.classList.remove(className);
    });
    imageRight.classList.add("game__image--scissors")
    checkWinner();
    determineWinner();
});