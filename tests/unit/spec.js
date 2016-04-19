// regroup similar tests
describe('TestOneController', function () {

  var controller = null;
  $scope = null;

  // initialize test env
  beforeEach(function () {
    module('myApp'); // load myApp module
  });

  //+ dependency injection
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('TestOneController', {
      $scope: $scope
    });
  }));

  // a test case (title = human readable; function(){ code to test with assertions })
  it('initially has a greeting', function () {
    assert.equal($scope.greeting, "Hello, World!");
  });

  it('Clicking the button changes the changes the greeting', function () {
    $scope.newText = "Hi!";
    $scope.changeGreeting();
    assert.equal($scope.greeting, "Hi!");
  });

});
