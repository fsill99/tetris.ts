import "../css/style.css";
import { Tetrominoes, Settings, State } from "./models";

document.addEventListener("DOMContentLoaded", () => {
  // html elements
  const grid = document.querySelector<HTMLElement>(".grid");
  const scoreDisplay = document.querySelector<HTMLElement>("#score");
  const startButton = document.querySelector<HTMLElement>("#start-button");
  let squares = Array.from(document.querySelectorAll<HTMLElement>(".grid div"));
  const diplaySquares = document.querySelectorAll<HTMLElement>(
    ".mini-grid div"
  );

  let nextRandom = 0;

  let timerId: NodeJS.Timeout | null = null;
  const settings = new Settings();
  const state = new State();
  const tetrominoes = new Tetrominoes(settings.width);

  let randomTetromino = Math.floor(Math.random() * tetrominoes.list.length);
  state.current = tetrominoes.list[randomTetromino].getPositions()[
    state.currentRotation
  ];

  // drawing
  function draw() {
    state.current.forEach((index) => {
      squares[state.currentPosition + index].classList.add("tetromino");
      squares[state.currentPosition + index].style.backgroundColor =
        tetrominoes.list[randomTetromino].color;
    });
  }

  function undraw() {
    state.current.forEach((index) => {
      squares[state.currentPosition + index].classList.remove("tetromino");
      squares[state.currentPosition + index].style.backgroundColor = "";
    });
  }

  // moviment
  function control(e: KeyboardEvent) {
    if (e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) {
      rotate();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 40) {
      moveDown();
    }
  }

  document.addEventListener("keyup", control);

  function moveDown() {
    undraw();
    // currentPosition += settings.width;
    state.incrementPosition(settings.width);
    draw();
    freeze();
  }

  function freeze() {
    if (
      state.current.some((index) =>
        squares[
          state.currentPosition + index + settings.width
        ].classList.contains("taken")
      )
    ) {
      state.current.forEach((index) =>
        squares[state.currentPosition + index].classList.add("taken")
      );

      randomTetromino = nextRandom;
      nextRandom = Math.floor(Math.random() * tetrominoes.list.length);
      state.current = tetrominoes.list[randomTetromino].getPositions()[
        state.currentRotation
      ];
      state.currentPosition = 4;
      draw();
      displayShapes();
      addScore();
      gameOver();
    }
  }

  function moveLeft() {
    undraw();
    const isAtLeftEdge = state.current.some(
      (index) => (state.currentPosition + index) % settings.width === 0
    );

    if (!isAtLeftEdge) {
      state.incrementPosition(-1);
    }

    if (
      state.current.some((index) =>
        squares[state.currentPosition + index].classList.contains("taken")
      )
    ) {
      state.incrementPosition();
    }

    draw();
  }

  function moveRight() {
    undraw();
    const isAtRightEdge = state.current.some(
      (index) =>
        (state.currentPosition + index) % settings.width === settings.width - 1
    );

    if (!isAtRightEdge) {
      state.incrementPosition();
    }

    if (
      state.current.some((index) =>
        squares[state.currentPosition + index].classList.contains("taken")
      )
    ) {
      state.incrementPosition(-1);
    }

    draw();
  }

  function rotate() {
    undraw();
    state.incrementRotation();
    if (state.currentRotation === state.current.length) {
      state.currentRotation = 0;
    }

    state.current = tetrominoes.list[randomTetromino].getPositions()[
      state.currentRotation
    ];
    draw();
  }

  // display next tetromino
  function displayShapes() {
    diplaySquares.forEach((square) => {
      square.style.backgroundColor = "";
      square.classList.remove("tetromino");
    });

    tetrominoes.list[nextRandom]
      .getPositions(settings.displayWidth)[0]
      .forEach((index) => {
        diplaySquares[settings.displayIndex + index].classList.add("tetromino");
        diplaySquares[settings.displayIndex + index].style.backgroundColor =
          tetrominoes.list[nextRandom].color;
      });
  }

  // start/pause button
  startButton!.addEventListener("click", () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
      startButton!.innerHTML = "start";
    } else {
      startButton!.innerHTML = "pause";
      draw();
      timerId = setInterval(moveDown, settings.msInterval);
      nextRandom = Math.floor(Math.random() * tetrominoes.list.length);
      displayShapes();
    }
  });

  // score
  function addScore() {
    for (let i = 0; i < 199; i += settings.width) {
      const row = [
        i,
        i + 1,
        i + 2,
        i + 3,
        i + 4,
        i + 5,
        i + 6,
        i + 7,
        i + 8,
        i + 9,
      ];

      if (row.every((index) => squares[index].classList.contains("taken"))) {
        state.incrementScore();
        scoreDisplay!.innerHTML = state.score.toString();
        row.forEach((index) => {
          squares[index].classList.remove("taken");
          squares[index].classList.remove("tetromino");
          squares[index].style.backgroundColor = "";
        });

        const squaresRevoved = squares.splice(i, settings.width);
        squares = squaresRevoved.concat(squares);
        squares.forEach((cell) => grid!.appendChild(cell));
      }
    }
  }

  // game over
  function gameOver() {
    if (
      state.current.some((index) =>
        squares[state.currentPosition + index].classList.contains("taken")
      )
    ) {
      scoreDisplay!.innerHTML = "end";
      clearInterval(timerId!);
      alert(`GAME OVER \n score:${state.score}`);
    }
  }
});
