/*global describe, it */
'use strict';

(function () {

    describe('myApp', function () {

      beforeEach(module('myApp'));

      it('testing the service', inject(function (Service) {
        expect(Service.one()).toEqual(1)
      }));
    });
})();

