import { Board } from "./Board.mjs";
import { ScoringSystem } from "./ScoringSystem.mjs";
import { ShuffleBag } from "./ShuffleBag.mjs";
import { Tetromino } from "./Tetromino.mjs";

function drawBackground(ctx, canvasWidth, canvasHeight) {
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function drawText(ctx, { text, x, y, font }) {
  ctx.font = font;
  ctx.fillStyle = "#000000";
  ctx.fillText(text, x, y);
}

function renderGame(game, canvas, timestamp) {
  const ctx = canvas.getContext("2d");
  const canvasWidth = (canvas.width = canvas.clientWidth);
  const canvasHeight = (canvas.height = canvas.clientHeight);
  const cellWidth = canvasWidth / game.columns;
  const cellHeight = canvasHeight / game.rows;

  drawBackground(ctx, canvasWidth, canvasHeight);
  drawText(ctx, {
    text: "Hello world",
    x: 100,
    y: 300,
    font: "30px sans-serif",
  });
}

function progressTime(game, timestamp) {
  if (timestamp >= game.nextTick) {
    if (game.board.hasFalling()) {
      game.board.drop(game.tetrominoes.draw());
    } else {
      game.board.tick();
    }
    game.nextTick = timestamp + game.tickDuration;
  }
}

function initGame() {
  const canvas = document.getElementById("game");

  const game = {
    columns: 10,
    rows: 20,
    tickDuration: 100,
    nextTick: 0,
  };
  game.board = new Board(game.columns, game.rows);
  game.score = new ScoringSystem();
  game.tetrominoes = new ShuffleBag();
  game.tetrominoes.add(Tetromino.I_SHAPE, 1);
  game.tetrominoes.add(Tetromino.T_SHAPE, 1);
  game.tetrominoes.add(Tetromino.L_SHAPE, 1);
  game.tetrominoes.add(Tetromino.J_SHAPE, 1);
  game.tetrominoes.add(Tetromino.T_SHAPE, 1);
  game.tetrominoes.add(Tetromino.S_SHAPE, 1);
  game.tetrominoes.add(Tetromino.Z_SHAPE, 1);
  game.tetrominoes.add(Tetromino.O_SHAPE, 1);
  game.board.onClearLine = (lineCount) => {
    game.score.increment(lineCount);
  };

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      for (let i = 0; i < game.rows; i++) {
        game.board.moveDown();
      }
    } else if (event.key === "z") {
      game.board.rotateLeft();
    } else if (event.key === "x") {
      game.board.rotateRight();
    } else if (event.code === "ArrowUp") {
      game.board.rotateRight();
    } else if (event.code === "ArrowDown") {
      game.board.moveDown();
    } else if (event.code === "ArrowLeft") {
      game.board.moveLeft();
    } else if (event.code === "ArrowRight") {
      game.board.moveRight();
    } else {
      return;
    }
    event.preventDefault(); // prevent game keys from scrolling the window
  });

  const render = (timestamp) => {
    progressTime(game, timestamp);
    renderGame(game, canvas, timestamp);
    window.requestAnimationFrame(render);
  };
  window.requestAnimationFrame(render);
}

initGame();
