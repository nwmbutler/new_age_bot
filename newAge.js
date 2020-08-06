(function(exports) {
    function NewAge() {
        this.firstArray = ["Aquarius", "Astrological age", "Harmonic Convergence", "Horoscope", "Zodiac"]
        this.secondArray = ["forgiveness", "unity", "enlighten", "peace", "healing", "inspire", "nourish", "rejoice", "Grace", "joy", "listen", "surrender", "eternal", "profound", "challenge", "meditate", "praise", "embrace", "change", "truth", "gratitude", "hope", "transform", "compassion", "love", "humility", "strength", "courage", "faith", ]
        this.thirdArray = ["Aura", "Bandha", "Chakra", "chi", "Ego", "karma", "mindfulness", "nirvana", "oneness", "tandra", "affirmation", "alturism", "animism", "channeling", "congnition", "consciousness", "energy", "existentialism", "higher self", "incarnation", "infinity", "initiation", "manifesting", "predestination", "spirituality"]
    }

    Array.prototype.sample = function(){
        return this[Math.floor(Math.random()*this.length)];
      }

    NewAge.prototype.returnNewAgeBs = function () {
        word1 = this.firstArray.sample();
        word2 = this.secondArray.sample();
        word3 = this.thirdArray.sample();
        var ele = document.getElementById('app')
        ele.innerHTML = `The ${word1} of ${word2} is often ${word3}`
    } 


    exports.NewAge = NewAge;

})(this);

