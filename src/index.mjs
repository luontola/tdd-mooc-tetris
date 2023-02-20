import { Board } from "./Board.mjs";

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
  const cellWidth = canvasWidth / game.board.width();
  const cellHeight = canvasHeight / game.board.height();

  drawBackground(ctx, canvasWidth, canvasHeight);
  drawText(ctx, {
    text: "Hello world",
    x: 100,
    y: 300,
    font: "30px sans-serif",
  });
}

function initGame() {
  const canvas = document.getElementById("game");

  const board = new Board(10, 20);
  const game = {
    board,
  };

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
    } else if (event.key === "z") {
    } else if (event.key === "x") {
    } else if (event.code === "ArrowUp") {
    } else if (event.code === "ArrowDown") {
    } else if (event.code === "ArrowLeft") {
    } else if (event.code === "ArrowRight") {
    } else {
      return;
    }
    event.preventDefault(); // prevent game keys from scrolling the window
  });

  const render = (timestamp) => {
    renderGame(game, canvas, timestamp);
    window.requestAnimationFrame(render);
  };
  window.requestAnimationFrame(render);
}

initGame();
