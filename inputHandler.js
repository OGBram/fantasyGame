export function setupInputListeners(game) {
    const keys = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false,
        ' ': false // Spacebar single space character
    };

    document.addEventListener('keydown', (e) => {
        if (e.key in keys) {
            keys[e.key] = true;
            if (e.key === ' ' && !game.player.isAttacking) { // Check for single space
                handleAttackAction(game);
            }
        }
        updatePlayerDirection(game, keys);
    });

    document.addEventListener('keyup', (e) => {
        if (e.key in keys) {
            keys[e.key] = false;
            if (e.key === ' ') { // Check for single space
                game.player.isAttacking = false; 
            }
        }
        updatePlayerDirection(game, keys);
    });
}

function updatePlayerDirection(game, keys) {
    game.player.dx = (keys.ArrowLeft ? -game.player.speed : 0) + (keys.ArrowRight ? game.player.speed : 0);
    game.player.dy = (keys.ArrowUp ? -game.player.speed : 0) + (keys.ArrowDown ? game.player.speed : 0);
}

function handleAttackAction(game) {
    if (!game.player.isAttacking) {
        game.player.isAttacking = true;
        console.log("Player attacks!");
    }
}
