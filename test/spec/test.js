/*global describe, it */
'use strict';

(function () {
    describe('Test the service', function () {
      beforeEach(angular.module('myApp'));
      it('testing the service', inject(function (services) {
        console.log('myApp');
      }))
    });
})();

