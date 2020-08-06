class NewAge {
    constructor() {
    this.firstArray = ["Aquarius", "Astrological age", "Harmonic Convergence", "Horoscope", "Zodiac", "path", "way", "journey", "experience"];     
    this.secondArray = ["forgiveness", "unity", "enlighten", "peace", "healing", "inspire", "nourish", "rejoice", "Grace", "joy", "listen", "surrender", "eternal", "profound", "challenge", "meditate", "praise", "embrace", "change", "truth", "gratitude", "hope", "transform", "compassion", "love", "humility", "strength", "courage", "faith",];
    this.thirdArray = ["Aura", "Bandha", "Chakra", "chi", "Ego", "karma", "mindfulness", "nirvana", "oneness", "tandra", "affirmation", "alturism", "animism", "channeling", "congnition", "consciousness", "energy", "existentialism", "higher self", "incarnation", "infinity", "initiation", "manifesting", "predestination", "spirituality"];
    this.fourthArray = ["sometimes", "often", "potentially", "occasionally", "frequently", "repeatedly", "oftentimes", "recurrently"]
}
   
  returnNewAgeBs() {
    var word1 = this.firstArray[Math.floor(Math.random() * this.firstArray.length)];
    var word2 = this.secondArray[Math.floor(Math.random() * this.secondArray.length)];
    var word3 = this.thirdArray[Math.floor(Math.random() * this.thirdArray.length)];
    var word4 = this.fourthArray[Math.floor(Math.random() * this.fourthArray.length)];
    return `The ${word1} of ${word2} is ${word4} ${word3}`;
    }
}

module.exports = NewAge;

