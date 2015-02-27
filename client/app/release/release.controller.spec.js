'use strict';

describe('Controller: ReleaseCtrl', function () {

  // load the controller's module
  beforeEach(module('rcrdlistApp'));

  var ReleaseCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReleaseCtrl = $controller('ReleaseCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
