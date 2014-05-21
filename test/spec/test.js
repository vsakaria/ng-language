/*global describe, it */
'use strict';

(function () {

    describe('myApp', function () {

      beforeEach(module('myApp'));

      it('should shuffle answers', inject(function (ShuffleArray) {
        var array = [1,2,3,4,5,6,7,8,9,10];
        var shuffledArray = [1,2,3,4,5,6,7,8,9,10];

        shuffledArray = ShuffleArray.shuffle(shuffledArray);
        expect(shuffledArray).not.toEqual(array);
      }));

      it('should get a set number of random words',
      inject(function (RandWords){
        var words = []
        var amountOfWords = 10;

        words = RandWords.get(amountOfWords);
        expect(words.length).toEqual(amountOfWords);
      }));

      it('should get 3 answers if no argument is passed', inject(function(QA){
        var answers = [];
        answers = QA.answers();
        expect(answers.length).toEqual(3);
      }));

      it('should get a set number of answers', inject(function(QA){
        var answers = [];
        var numberOfAnswers = 5;

        answers = QA.answers(5);
        expect(answers.length).toEqual(5);
      }));

      it('should remove a question from the questionsBucket',
      inject(function(QA){
        var answers = QA.answers();
        var question = QA.question();

        expect(QA.questionsBucket).not.toContain(question);

        answers = QA.answers();
        question = QA.question();

        expect(QA.questionsBucket).not.toContain(question);
      }));

    });
  })();

