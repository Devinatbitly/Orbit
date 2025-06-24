// Orbit Puzzle Solutions
// Format: { left: 'WORD1', right: 'WORD2', answer: 'SOLUTION', leftMissing: number, rightMissing: number }

const ORBIT_PUZZLES = [
    { left: 'GHOST', right: 'ARTSY', answer: 'START', leftMissing: 2, rightMissing: 3 },
    { left: 'GREAT', right: 'ENDED', answer: 'EATEN', leftMissing: 3, rightMissing: 2 },
    { left: 'NACHO', right: 'SERVE', answer: 'CHOSE', leftMissing: 3, rightMissing: 2 },
    { left: 'GOLEM', right: 'URGED', answer: 'LEMUR', leftMissing: 3, rightMissing: 2 },
    { left: 'DEALT', right: 'ERASE', answer: 'ALTER', leftMissing: 3, rightMissing: 2 },
    { left: 'STARE', right: 'ACHED', answer: 'REACH', leftMissing: 2, rightMissing: 3 },
    { left: 'AHEAD', right: 'OPTED', answer: 'ADOPT', leftMissing: 2, rightMissing: 3 },
    { left: 'KNEAD', right: 'ULTRA', answer: 'ADULT', leftMissing: 2, rightMissing: 3 },
    { left: 'DECAF', right: 'TERSE', answer: 'AFTER', leftMissing: 2, rightMissing: 3 },
    { left: 'EQUAL', right: 'BUMPY', answer: 'ALBUM', leftMissing: 2, rightMissing: 3 },
    { left: 'FINAL', right: 'LOWLY', answer: 'ALLOW', leftMissing: 2, rightMissing: 3 },
    { left: 'BEACH', right: 'KINGS', answer: 'CHING', leftMissing: 2, rightMissing: 3 },
    { left: 'CLOCK', right: 'EARLY', answer: 'CLEAR', leftMissing: 2, rightMissing: 3 },
    { left: 'PRIDE', right: 'EVENS', answer: 'RAVEN', leftMissing: 2, rightMissing: 3 },
    { left: 'SLEEP', right: 'FORTH', answer: 'PROOF', leftMissing: 2, rightMissing: 3 },
    { left: 'TRADE', right: 'OWNER', answer: 'DRONE', leftMissing: 2, rightMissing: 3 },
    { left: 'SHARK', right: 'PLAID', answer: 'RAPID', leftMissing: 2, rightMissing: 3 },
    { left: 'GRAIN', right: 'DEPTH', answer: 'AIDED', leftMissing: 2, rightMissing: 3 },
    { left: 'FLAME', right: 'SPORT', answer: 'ABORT', leftMissing: 2, rightMissing: 3 },
    { left: 'CROWD', right: 'WHILE', answer: 'OWLHE', leftMissing: 2, rightMissing: 3 }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ORBIT_PUZZLES;
}