This is my lastest project with Angular JS.

It is a Language learning application which gives you an English word and 3 Spanish words to guess from

The main code is in 

  1. services.js which has a number of factories which, for example Shuffle the words ready for the game and also ensures
     the same English word isn't used.
  2. Jasmine tests are to be found in test/spec/test.js  

Inside Routes folder is the Express.js implementation which writes the highestscores to File IO.

To run the app

1. npm install
2. bower install
3. node app.js
4. Run on http://localhost:3000/
