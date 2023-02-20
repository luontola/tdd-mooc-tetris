import { Board } from "./Board.mjs";
import { ScoringSystem } from "./ScoringSystem.mjs";
import { ShuffleBag } from "./ShuffleBag.mjs";
import { Tetromino } from "./Tetromino.mjs";

function drawBackground(ctx, canvasWidth, canvasHeight) {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function drawText(ctx, { text, x, y, font, textAlign }) {
  ctx.font = font;
  ctx.textAlign = textAlign || "left";
  ctx.fillStyle = "#000000";
  ctx.fillText(text, x, y);
}

const CELL_COLORS = {
  ".": "#ffffff",
  I: "#cc1c19",
  T: "#3a88b2",
  L: "#c85c14",
  J: "#312cc3",
  S: "#921392",
  Z: "#2e9915",
  O: "#9a8016",
};

function drawCell(ctx, { cell, row, column, cellWidth, cellHeight }) {
  ctx.fillStyle = CELL_COLORS[cell];
  const x = cellWidth * column;
  const y = cellHeight * row;
  ctx.fillRect(x, y, cellWidth, cellHeight);
}

function drawScoring(ctx, { score, level, canvasWidth }) {
  const margin = 5;
  const fontSize = 22;
  drawText(ctx, {
    text: `Level ${level}`,
    x: margin,
    y: fontSize + margin,
    font: `${fontSize}px sans-serif`,
  });
  drawText(ctx, {
    text: `Score ${score}`,
    textAlign: "right",
    x: canvasWidth - margin,
    y: fontSize + margin,
    font: `${fontSize}px sans-serif`,
  });
}

function renderGame(game, canvas, timestamp) {
  const ctx = canvas.getContext("2d");
  const canvasWidth = (canvas.width = canvas.clientWidth);
  const canvasHeight = (canvas.height = canvas.clientHeight);
  const cellWidth = canvasWidth / game.columns;
  const cellHeight = canvasHeight / game.rows;

  drawBackground(ctx, canvasWidth, canvasHeight);
  for (let row = 0; row < game.rows; row++) {
    for (let column = 0; column < game.columns; column++) {
      const cell = game.board.cellAt(row, column);
      drawCell(ctx, { cell, row, column, cellWidth, cellHeight });
    }
  }
  drawScoring(ctx, {
    level: game.scoring.level,
    score: game.scoring.score,
    canvasWidth,
  });
}

function progressTime(game, timestamp) {
  if (timestamp >= game.nextTick) {
    if (!game.board.hasFalling()) {
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
    tickDuration: 300,
    nextTick: 0,
  };
  game.board = new Board(game.columns, game.rows);
  game.scoring = new ScoringSystem();
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
    game.scoring.increment(lineCount);
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
