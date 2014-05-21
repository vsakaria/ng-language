'use strict';

/* Services */

app.value('words', [{
    'en': 'Good morning',
    'es': 'Buenos días',
    def: 'A conventional expression of greeting or farewell used in the morning.'
  }, {
    'en': 'Apple',
    'es': 'Manzana',
    def: 'The round fruit of an apple tree, which typically has thin green or red skin.'
  }, {
    'en': 'Brother',
    'es': 'Hermano',
    def: 'A man or boy in relation to other sons and daughters of his parents.'
  }, {
    'en': 'Red',
    'es': 'Rojo',
    def: 'The colour of blood, fire, or rubies.'
  }, {
    'en': 'Germany',
    'es': 'Alemania',
    def: 'A country in central Europe whose capital is Berlin. '
  }, {
    'en': 'Seven',
    'es': 'Siete',
    def: 'A number equivalent to the sum of three and four.'
  }, {
    'en': 'Learn',
    'es': 'Aprender',
    def: 'Gain or acquire knowledge in something by study, experience, or being taught.'
  }, {
    'en': 'Sun',
    'es': 'Sol',
    def: 'The star round which the earth orbits.'
  }, {
    'en': 'House',
    'es': 'Casa',
    def: 'A building for human habitation.'
  }, {
    'en': 'Young',
    'es': 'Joven',
    def: 'Having lived or existed for only a short time.'
  }, {
    'en': 'Friendly',
    'es': 'Amigable',
    def: 'Kind and pleasant.'
  }])

    .factory('ShuffleArray', function(){
        var ShuffleArray = {
            shuffle: function(array) {
              var currentIndex = array.length,
                  temporaryValue,
                  randomIndex;

              while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
              }
              return array;
            }
          };
        return ShuffleArray;
      })

    .factory('RandWords', function(words, ShuffleArray) {
        var randwords = [];

        var RandWords = {
            get: function(amount) {
                randwords = ShuffleArray.shuffle(words).slice(0,amount);
                return randwords;
              }
          };
        return RandWords;
      })

    .factory('QA', function(ShuffleArray, RandWords){
        var answersBucket = RandWords.get(9);
        var questionsBucket = answersBucket;
        var questionToRemove, answers, question;

        var QA = {
            questionsBucket: questionsBucket,
            answers: function(amount){
                if(typeof(amount) === 'undefined') amount = 3;

                answers = ShuffleArray.shuffle(answersBucket).slice(0,amount);
                return answers;
              },
            question: function(){
                questionToRemove = questionsBucket.indexOf(answers[Math.floor(Math.random() * 3)]);
                question = questionsBucket.splice(questionToRemove, 1)[0];
                return question;
              }
          };
        return QA;
      });