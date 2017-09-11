angular.module('starter.foo', [])

.directive('fooDirectiveFirst', function() { // 指令名首字母只能小写
  return {
    restrict: 'E',
    template: '<h1>自定义指令！</h1>'
  };
})

.directive('fooDirectiveSecond', function($log) {
  return {
    scope: {},
    restrict: 'E',
    templateUrl: 'templates/foo-second.html',
    controller: function($scope) {
      $scope.name = "小明";
    },
    link: function(scope,element,attr,ctrl,linker) {
      $log.log(element)
    }
 };
})
