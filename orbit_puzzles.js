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
            { left: 'METAL', right: 'ONSET', answer: 'TALON', leftMissing: 3, rightMissing: 2 },
            { left: 'AGAIN', right: 'TROOP', answer: 'INTRO', leftMissing: 2, rightMissing: 3 },
            { left: 'SINCH', right: 'ORDER', answer: 'CHORD', leftMissing: 2, rightMissing: 3 },
            { left: 'TEACH', right: 'ESSAY', answer: 'CHESS', leftMissing: 2, rightMissing: 3 },
            { left: 'BEGAN', right: 'GLEAM', answer: 'ANGLE', leftMissing: 2, rightMissing: 3 },
            { left: 'CAUSE', right: 'VENUE', answer: 'SEVEN', leftMissing: 2, rightMissing: 3 },
            { left: 'HENNA', right: 'STYLE', answer: 'NASTY', leftMissing: 2, rightMissing: 3 },
            { left: 'BLEND', right: 'INGOT', answer: 'DINGO', leftMissing: 1, rightMissing: 4 },
            { left: 'CHINA', right: 'VALID', answer: 'NAVAL', leftMissing: 2, rightMissing: 3 },
            { left: 'CLEAR', right: 'GUESS', answer: 'ARGUE', leftMissing: 2, rightMissing: 3 },
            { left: 'CLOTH', right: 'ANKLE', answer: 'THANK', leftMissing: 2, rightMissing: 3 },
            { left: 'COAST', right: 'OUTER', answer: 'STOUT', leftMissing: 2, rightMissing: 3 },
            { left: 'BEAST', right: 'RAPID', answer: 'STRAP', leftMissing: 2, rightMissing: 3 },
            { left: 'BLAST', right: 'UNTIL', answer: 'STUNT', leftMissing: 2, rightMissing: 3 },
            { left: 'CREST', right: 'AGENT', answer: 'STAGE', leftMissing: 2, rightMissing: 3 },
            { left: 'BENCH', right: 'AMPLE', answer: 'CHAMP', leftMissing: 2, rightMissing: 3 },


];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ORBIT_PUZZLES;
}
