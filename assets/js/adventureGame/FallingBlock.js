class FallingBlock {
  constructor(gameEnv) {
    this.gameEnv = gameEnv;
    this.position = { x: gameEnv.innerWidth / 2, y: 0 };
    this.velocity = 0;
    this.acceleration = 9.8; // constant acceleration
    this.terminalVelocity = 50;
    this.bounceFactor = 0.5;
    this.respawnDelay = 3000; // 3 seconds
    this.size = 50; // size of the block
    this.isFalling = true;
  }

  update(deltaTime) {
    if (this.isFalling) {
      // Update velocity with acceleration, cap at terminal velocity
      this.velocity += this.acceleration * deltaTime;
      if (this.velocity > this.terminalVelocity) {
        this.velocity = this.terminalVelocity;
      }

      // Update position with velocity
      this.position.y += this.velocity * deltaTime;

      // Check if it hits the bottom
      if (this.position.y + this.size >= this.gameEnv.innerHeight) {
        this.position.y = this.gameEnv.innerHeight - this.size;
        this.velocity = -this.velocity * this.bounceFactor;

        // If the bounce is too small, stop falling and respawn
        if (Math.abs(this.velocity) < 1) {
          this.isFalling = false;
          setTimeout(() => this.respawn(), this.respawnDelay);
        }
      }
    }
  }

  respawn() {
    this.position.y = 0;
    this.velocity = 0;
    this.isFalling = true;
  }

  draw(context) {
    context.fillStyle = 'red';
    context.fillRect(this.position.x, this.position.y, this.size, this.size);
  }
}

export default FallingBlock;
