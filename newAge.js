(function(exports) {
    class NewAge {
        constructor() {
            this.firstArray = ["Aquarius", "Astrological age", "Harmonic Convergence", "Horoscope", "Zodiac"];
            this.secondArray = ["forgiveness", "unity", "enlighten", "peace", "healing", "inspire", "nourish", "rejoice", "Grace", "joy", "listen", "surrender", "eternal", "profound", "challenge", "meditate", "praise", "embrace", "change", "truth", "gratitude", "hope", "transform", "compassion", "love", "humility", "strength", "courage", "faith",];
            this.thirdArray = ["Aura", "Bandha", "Chakra", "chi", "Ego", "karma", "mindfulness", "nirvana", "oneness", "tandra", "affirmation", "alturism", "animism", "channeling", "congnition", "consciousness", "energy", "existentialism", "higher self", "incarnation", "infinity", "initiation", "manifesting", "predestination", "spirituality"];
        }
        returnNewAgeBs() {
            var word1 = this.firstArray.sample();
            var word2 = this.secondArray.sample();
            var word3 = this.thirdArray.sample();
            return `The ${word1} of ${word2} is often ${word3}`;
        }
    }

    Array.prototype.sample = function(){
        return this[Math.floor(Math.random()*this.length)];
      }

    exports.NewAge = NewAge;

})(this);

