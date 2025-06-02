import Character from './Character.js';

// Define non-mutable constants as defaults
const SCALE_FACTOR = 25; // 1/nth of the height of the canvas
const STEP_FACTOR = 100; // 1/nth, or N steps up and across the canvas
const ANIMATION_RATE = 1; // 1/nth of the frame rate
const INIT_POSITION = { x: 0, y: 0 };

// Movement Sound Effects System
class MovementSoundManager {
    constructor() {
        // Initialize audio context for procedural sounds
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.lastFootstepTime = 0;
        this.footstepInterval = 300; // ms between footsteps
        this.isLeftFoot = true;
        
        // Initialize Minecraft beginning music as ambient background music
        this.minecraftMusic = null;
        this.initMinecraftMusic();
        this.isMusicPlaying = false;
        this.ambientMusicStarted = false;
        
        // Start ambient music immediately
        this.startAmbientMusic();
        
        // Surface type mapping for potential future use (keeping for compatibility)
        this.surfaces = {
            'default': { pitch: 1, volume: 0.15, character: 'soft' },
            'grass': { pitch: 0.8, volume: 0.12, character: 'soft' },
            'stone': { pitch: 1.3, volume: 0.2, character: 'hard' },
            'wood': { pitch: 1.1, volume: 0.18, character: 'hollow' },
            'metal': { pitch: 1.5, volume: 0.25, character: 'metallic' },
            'carpet': { pitch: 0.6, volume: 0.08, character: 'muffled' },
            'sand': { pitch: 0.7, volume: 0.1, character: 'soft' }
        };
    }
    
    // Initialize Minecraft beginning music
    initMinecraftMusic() {
        try {
            // You can replace this path with any relaxing ambient music file
            // Consider ambient tracks, nature sounds, or peaceful instrumental music
            this.ambientMusic = new Audio('/assets/audio/ambient-relaxing.mp3');
            this.ambientMusic.loop = true; // Loop the music continuously
            this.ambientMusic.volume = 0.15; // Very low volume for ambient atmosphere
            this.ambientMusic.preload = 'auto';
            
            // Add event listeners for audio state management
            this.ambientMusic.addEventListener('loadeddata', () => {
                console.log('Ambient music loaded');
                if (!this.ambientMusicStarted) {
                    this.startAmbientMusic();
                }
            });
            
            this.ambientMusic.addEventListener('error', (e) => {
                console.log('Ambient music file not found. Using generated ambient sounds.');
                this.createAmbientSoundscape();
            });
            
        } catch (error) {
            console.log('Ambient music file not found. Add ambient-relaxing.mp3 to assets/audio directory.');
            // Fallback: create relaxing ambient soundscape
            this.createAmbientSoundscape();
        }
    }
    
    // Start ambient background music
    startAmbientMusic() {
        if (!window.gameAudioEnabled || this.ambientMusicStarted) return;
        
        this.ambientMusicStarted = true;
        
        if (this.ambientMusic && this.ambientMusic.readyState >= 2) {
            // If the actual music file is available, play it
            this.ambientMusic.currentTime = 0; // Start from beginning
            this.ambientMusic.play().catch(e => {
                console.log('Could not play ambient music:', e);
                this.playAmbientSoundscape();
            });
            this.isMusicPlaying = true;
        } else {
            // Fallback to generated ambient soundscape
            this.playAmbientSoundscape();
        }
    }
    
    // Stop ambient music (for when audio is disabled)
    stopAmbientMusic() {
        this.ambientMusicStarted = false;
        this.isMusicPlaying = false;
        if (this.ambientMusic && !this.ambientMusic.paused) {
            this.ambientMusic.pause();
        }
        // Stop generated sounds
        if (this.ambientInterval) {
            clearInterval(this.ambientInterval);
            this.ambientInterval = null;
        }
    }
    
    // Create a relaxing ambient soundscape
    createAmbientSoundscape() {
        // This creates ambient sounds using Web Audio API if the actual file isn't available
        this.ambientInterval = null;
        this.activeSounds = [];
    }
    
    // Play relaxing ambient soundscape using Web Audio API
    playAmbientSoundscape() {
        if (!window.gameAudioEnabled || this.isMusicPlaying) return;
        
        this.isMusicPlaying = true;
        
        // Start with gentle background drone
        this.createBackgroundDrone();
        
        // Add periodic gentle tones
        this.ambientInterval = setInterval(() => {
            if (!window.gameAudioEnabled || !this.isMusicPlaying) return;
            
            // Randomly play different ambient elements
            const rand = Math.random();
            if (rand < 0.3) {
                this.playGentleTone();
            } else if (rand < 0.5) {
                this.playWaterDroplet();
            } else if (rand < 0.7) {
                this.playWindSound();
            } else if (rand < 0.85) {
                this.playChimeSound();
            }
        }, 3000 + Math.random() * 5000); // Random intervals between 3-8 seconds
    }
    
    // Create a continuous background drone
    createBackgroundDrone() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Create two oscillators for a richer drone
        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);
        
        // Low frequency drone
        osc1.frequency.setValueAtTime(55, this.audioContext.currentTime); // A1
        osc2.frequency.setValueAtTime(82.41, this.audioContext.currentTime); // E2
        
        osc1.type = 'sine';
        osc2.type = 'sine';
        
        // Low-pass filter for warmth
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, this.audioContext.currentTime);
        filter.Q.setValueAtTime(0.5, this.audioContext.currentTime);
        
        // Very low volume for background
        gain.gain.setValueAtTime(0.02, this.audioContext.currentTime);
        
        osc1.start(this.audioContext.currentTime);
        osc2.start(this.audioContext.currentTime);
        
        // Store reference to stop later if needed
        this.backgroundDrone = { osc1, osc2, gain };
    }
    
    // Play gentle melodic tones
    playGentleTone() {
        // Pentatonic scale frequencies for peaceful melodies
        const frequencies = [261.63, 293.66, 349.23, 392.00, 440.00, 523.25]; // C major pentatonic
        const freq = frequencies[Math.floor(Math.random() * frequencies.length)];
        
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);
        
        osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);
        osc.type = 'sine';
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, this.audioContext.currentTime);
        
        const duration = 2 + Math.random() * 3; // 2-5 seconds
        
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.03, this.audioContext.currentTime + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
        
        osc.start(this.audioContext.currentTime);
        osc.stop(this.audioContext.currentTime + duration);
    }
    
    // Create water droplet sounds
    playWaterDroplet() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        
        osc.frequency.setValueAtTime(800 + Math.random() * 400, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 0.1);
        osc.type = 'sine';
        
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.015, this.audioContext.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.3);
        
        osc.start(this.audioContext.currentTime);
        osc.stop(this.audioContext.currentTime + 0.3);
    }
    
    // Create gentle wind sounds
    playWindSound() {
        const bufferSize = this.audioContext.sampleRate * 2; // 2 seconds
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        // Generate pink noise for wind
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
            b6 = white * 0.115926;
        }
        
        const source = this.audioContext.createBufferSource();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        source.buffer = buffer;
        source.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(300, this.audioContext.currentTime);
        
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.008, this.audioContext.currentTime + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 2);
        
        source.start(this.audioContext.currentTime);
    }
    
    // Create gentle chime sounds
    playChimeSound() {
        // Multiple frequencies for rich chime
        const baseFreq = 523.25 + Math.random() * 200; // C5 + variation
        const harmonics = [1, 2.4, 4.1]; // Bell-like harmonics
        
        harmonics.forEach((harmonic, index) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(this.audioContext.destination);
            
            osc.frequency.setValueAtTime(baseFreq * harmonic, this.audioContext.currentTime);
            osc.type = 'sine';
            
            const volume = 0.01 / (index + 1); // Decreasing volume for harmonics
            const duration = 3 + Math.random() * 2;
            
            gain.gain.setValueAtTime(0, this.audioContext.currentTime);
            gain.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
            
            osc.start(this.audioContext.currentTime + index * 0.05);
            osc.stop(this.audioContext.currentTime + duration);
        });
    }
    
    // Method to handle audio toggle changes
    handleAudioToggle(enabled) {
        if (enabled && !this.ambientMusicStarted) {
            this.startAmbientMusic();
        } else if (!enabled && this.ambientMusicStarted) {
            this.stopAmbientMusic();
        }
    }
    
    createFootstepSound(surface = 'default', isLeftFoot = true) {
        // This method is kept for compatibility but no longer plays footstep sounds
        // Ambient music is handled separately and continuously
    }
    
    // Updated movement sound methods - now just ensure ambient music is playing
    playMovementSound(direction, surface = 'default') {
        // Ambient music plays continuously, no action needed for movement
        if (!this.ambientMusicStarted && window.gameAudioEnabled) {
            this.startAmbientMusic();
        }
    }
    
    // No longer starts music on movement - music is always ambient
    playStartMovementSound() {
        // Ambient music plays continuously, no action needed for movement start
        if (!this.ambientMusicStarted && window.gameAudioEnabled) {
            this.startAmbientMusic();
        }
    }
    
    // No longer stops music on movement stop - music continues as ambient
    playStopMovementSound() {
        // Ambient music continues playing, no action needed for movement stop
    }
}


class Player extends Character {
    /**
     * The constructor method is called when a new Player object is created.
     * 
     * @param {Object|null} data - The sprite data for the object. If null, a default red square is used.
     */
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.keypress = data?.keypress || {up: 87, left: 65, down: 83, right: 68};
        this.pressedKeys = {}; // active keys array
        this.bindMovementKeyListners();
        this.gravity = data.GRAVITY || false;
        this.acceleration = 0.001;
        this.time = 0;
        this.moved = false;
        this.wasMoving = false; // Track previous movement state
        
        // Initialize movement sound manager
        this.soundManager = new MovementSoundManager();
        this.currentSurface = this.detectSurface(); // Detect initial surface
    }

    /**
     * Binds key event listeners to handle object movement.
     * 
     * This method binds keydown and keyup event listeners to handle object movement.
     * The .bind(this) method ensures that 'this' refers to the object object.
     */
    bindMovementKeyListners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleKeyDown({ keyCode }) {
        // capture the pressed key in the active keys array
        this.pressedKeys[keyCode] = true;
        // set the velocity and direction based on the newly pressed key
        this.updateVelocityAndDirection();
    }

    /**
     * Handles key up events to stop the player's velocity.
     * 
     * This method stops the player's velocity based on the key released.
     * 
     * @param {Object} event - The keyup event object.
     */
    handleKeyUp({ keyCode }) {
        // remove the lifted key from the active keys array
        if (keyCode in this.pressedKeys) {
            delete this.pressedKeys[keyCode];
        }
        // adjust the velocity and direction based on the remaining keys
        this.updateVelocityAndDirection();
    }

    /**
     * Detect the surface type based on game environment or level
     * This can be expanded to detect different surfaces based on level/location
     */
    detectSurface() {
        // Basic surface detection - can be enhanced based on game level
        const currentLevel = this.gameEnv?.currentLevel || 'unknown';
        
        // Map levels to surface types
        const levelSurfaceMap = {
            'desert': 'sand',
            'casino': 'carpet',
            'office': 'carpet',
            'bank': 'stone',
            'airport': 'stone',
            'wallstreet': 'stone',
            'default': 'default'
        };
        
        return levelSurfaceMap[currentLevel] || 'default';
    }

    /**
     * Update the player's velocity and direction based on the pressed keys.
     */
    updateVelocityAndDirection() {
        this.velocity.x = 0;
        this.velocity.y = 0;
        
        // Store previous movement state
        const wasMovingBefore = this.moved;

        // Multi-key movements (diagonals: upLeft, upRight, downLeft, downRight)
        if (this.pressedKeys[this.keypress.up] && this.pressedKeys[this.keypress.left]) {
            this.velocity.y -= this.yVelocity;
            this.velocity.x -= this.xVelocity;
            this.direction = 'upLeft';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.up] && this.pressedKeys[this.keypress.right]) {
            this.velocity.y -= this.yVelocity;
            this.velocity.x += this.xVelocity;
            this.direction = 'upRight';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.down] && this.pressedKeys[this.keypress.left]) {
            this.velocity.y += this.yVelocity;
            this.velocity.x -= this.xVelocity;
            this.direction = 'downLeft';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.down] && this.pressedKeys[this.keypress.right]) {
            this.velocity.y += this.yVelocity;
            this.velocity.x += this.xVelocity;
            this.direction = 'downRight';
            this.moved = true;
        // Single key movements (left, right, up, down) 
        } else if (this.pressedKeys[this.keypress.up]) {
            this.velocity.y -= this.yVelocity;
            this.direction = 'up';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.left]) {
            this.velocity.x -= this.xVelocity;
            this.direction = 'left';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.down]) {
            this.velocity.y += this.yVelocity;
            this.direction = 'down';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.right]) {
            this.velocity.x += this.xVelocity;
            this.direction = 'right';
            this.moved = true;
        } else{
            this.moved = false;
        }
        
        // Handle movement sound effects
        this.handleMovementSounds(wasMovingBefore);
    }
    
    /**
     * Handle movement sound effects based on movement state changes
     */
    handleMovementSounds(wasMovingBefore) {
        // Update current surface based on environment
        this.currentSurface = this.detectSurface();
        
        // Starting to move
        if (this.moved && !wasMovingBefore) {
            this.soundManager.playStartMovementSound();
            this.wasMoving = true;
        }
        // Continuing to move
        else if (this.moved && wasMovingBefore) {
            this.soundManager.playMovementSound(this.direction, this.currentSurface);
        }
        // Stopping movement
        else if (!this.moved && wasMovingBefore) {
            this.soundManager.playStopMovementSound();
            this.wasMoving = false;
        }
    }

    update() {
        super.update();
        if(!this.moved){
            if (this.gravity) {
                    this.time += 1;
                    this.velocity.y += 0.5 + this.acceleration * this.time;
                }
            }
        else{
            this.time = 0;
        }
        }
        
    /**
     * Overrides the reaction to the collision to handle
     *  - clearing the pressed keys array
     *  - stopping the player's velocity
     *  - updating the player's direction   
     * @param {*} other - The object that the player is colliding with
     */
    handleCollisionReaction(other) {    
        // Play collision sound effect
        this.playCollisionSound(other);
        
        this.pressedKeys = {};
        this.updateVelocityAndDirection();
        super.handleCollisionReaction(other);
    }
    
    /**
     * Play collision sound effect based on the object collided with
     */
    playCollisionSound(other) {
        if (!window.gameAudioEnabled) return;
        
        try {
            const now = this.soundManager.audioContext.currentTime;
            
            // Create collision sound
            const osc = this.soundManager.audioContext.createOscillator();
            const gain = this.soundManager.audioContext.createGain();
            const filter = this.soundManager.audioContext.createBiquadFilter();
            
            osc.connect(filter);
            filter.connect(gain);
            gain.connect(this.soundManager.audioContext.destination);
            
            // Different sounds based on collision type
            let frequency = 150;
            let volume = 0.1;
            
            if (other && other.constructor.name) {
                const objectType = other.constructor.name.toLowerCase();
                if (objectType.includes('wall') || objectType.includes('barrier')) {
                    frequency = 200; // Higher pitch for walls
                    volume = 0.15;
                } else if (objectType.includes('npc') || objectType.includes('character')) {
                    frequency = 300; // Even higher for characters
                    volume = 0.08; // Softer for characters
                } else if (objectType.includes('platform')) {
                    frequency = 120; // Lower for platforms
                    volume = 0.12;
                }
            }
            
            osc.frequency.setValueAtTime(frequency, now);
            osc.type = 'triangle';
            
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(600, now);
            
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(volume, now + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
            
            osc.start(now);
            osc.stop(now + 0.1);
        } catch (e) {
            console.log("Collision sound error:", e);
        }
    }
}

export default Player;