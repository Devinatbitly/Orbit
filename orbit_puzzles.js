// Orbit Puzzle Solutions
// Format: { left: 'WORD1', right: 'WORD2', answer: 'SOLUTION', leftMissing: number, rightMissing: number }

const ORBIT_PUZZLES = [
            { left: 'GHOST', right: 'ARTSY', answer: 'START', leftMissing: 2, rightMissing: 3 },
            { left: 'GREAT', right: 'ENDED', answer: 'EATEN', leftMissing: 3, rightMissing: 2 },
            { left: 'NACHO', right: 'SERVE', answer: 'CHOSE', leftMissing: 3, rightMissing: 2 },
            { left: 'GOLEM', right: 'URGED', answer: 'LEMUR', leftMissing: 3, rightMissing: 2 },
            { left: 'DEALT', right: 'ERASE', answer: 'ALTER', leftMissing: 3, rightMissing: 2 },
            { left: 'STARE', right: 'ACHED', answer: 'REACH', leftMissing: 2, rightMissing: 3 },
            { left: 'COMET', right: 'HINGE', answer: 'THING', leftMissing: 1, rightMissing: 4 },
            { left: 'AHEAD', right: 'OPTED', answer: 'ADOPT', leftMissing: 2, rightMissing: 3 },
            { left: 'KNEAD', right: 'ULTRA', answer: 'ADULT', leftMissing: 2, rightMissing: 3 },
            { left: 'DECAF', right: 'TERSE', answer: 'AFTER', leftMissing: 2, rightMissing: 3 },
            { left: 'EQUAL', right: 'BUMPY', answer: 'ALBUM', leftMissing: 2, rightMissing: 3 },
            { left: 'FINAL', right: 'LOWLY', answer: 'ALLOW', leftMissing: 2, rightMissing: 3 },
            { left: 'SWARM', right: 'ORDER', answer: 'ARMOR', leftMissing: 3, rightMissing: 2 },
            { left: 'RANGE', right: 'RIGHT', answer: 'ANGER', leftMissing: 4, rightMissing: 1 },
            { left: 'MARCH', right: 'ARMOR', answer: 'CHARM', leftMissing: 2, rightMissing: 3 },
            { left: 'BLEND', right: 'INGOT', answer: 'DINGO', leftMissing: 1, rightMissing: 4 },
            { left: 'METAL', right: 'ONSET', answer: 'TALON', leftMissing: 3, rightMissing: 2 }

];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ORBIT_PUZZLES;
}
