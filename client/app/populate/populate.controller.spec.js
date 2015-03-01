'use strict';

describe('Controller: PopulateCtrl', function () {

  // load the controller's module
  beforeEach(module('rcrdlistApp'));

  var PopulateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PopulateCtrl = $controller('PopulateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
