class Player {
    constructor() {
        this.yVelocity = 0;
        this.jumpForce = -15; // Adjust this value for a smoother jump
        this.gravity = 0.5; // Adjust this value for a smoother jump
        this.isJumping = false;
        this.isGrounded = false;
        // ...other properties...
    }

    update() {
        // Apply gravity
        if (!this.isGrounded) {
            this.yVelocity += this.gravity;
        }

        // Apply jump force
        if (this.isJumping && this.isGrounded) {
            this.yVelocity = this.jumpForce;
            this.isGrounded = false;
        }

        // Update player position
        this.y += this.yVelocity;

        // Check for collision with the ground
        if (this.y >= groundLevel) { // Assuming groundLevel is defined
            this.y = groundLevel;
            this.yVelocity = 0;
            this.isGrounded = true;
        }

        // Reset jump flag
        this.isJumping = false;

        // ...other update logic...
    }

    jump() {
        if (this.isGrounded) {
            this.isJumping = true;
        }
    }

    // ...other methods...
}

// Example usage
const player = new Player();
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        player.jump();
    }
});

function gameLoop() {
    player.update();
    // ...other game loop logic...
    requestAnimationFrame(gameLoop);
}[]

gameLoop();