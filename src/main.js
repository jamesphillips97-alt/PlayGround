import { Game } from './game.js';

const canvas = document.getElementById('game');
const game = new Game(canvas);

window.__game = game;
document.body.dataset.state = 'boot';

game.init().catch((err) => {
  console.error('[GRAND THEFT BLOCK] fatal', err);
  window.__gameError = String(err && err.stack ? err.stack : err);
  const label = document.getElementById('loader-text');
  if (label) label.textContent = 'FAILED TO START — CHECK THE CONSOLE';
});

// Expose a tiny debug surface for the harness / curious players.
window.__gtb = {
  get seed() { return game.seed; },
  get state() { return game.state; },
  get ready() { return window.__gameReady === true; },
  get player() { return game.player; },
  get world() { return game.world; },
};
