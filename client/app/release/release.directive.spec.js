'use strict';

describe('Directive: release', function () {

  // load the directive's module and view
  beforeEach(module('rcrdlistApp'));
  beforeEach(module('app/release/release.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rcrd-release></rcrd-release>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the release directive');
  }));
});