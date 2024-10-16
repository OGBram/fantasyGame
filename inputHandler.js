// inputHandler.js
export function setupInputListeners(game) {
    const keys = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false
    };

    document.addEventListener('keydown', (e) => {
        if (e.key in keys) {
            keys[e.key] = true;
        }
        updatePlayerDirection(game, keys);
    });

    document.addEventListener('keyup', (e) => {
        if (e.key in keys) {
            keys[e.key] = false;
        }
        updatePlayerDirection(game, keys);
    });
}

function updatePlayerDirection(game, keys) {
    game.player.dx = (keys.ArrowLeft ? -game.player.speed : 0) + (keys.ArrowRight ? game.player.speed : 0);
    game.player.dy = (keys.ArrowUp ? -game.player.speed : 0) + (keys.ArrowDown ? game.player.speed : 0);
}
