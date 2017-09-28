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
      // $log.log(element)
    }
 };
})

.directive('fooDirectiveThird', function($log, $timeout) {
  return {
    scope: {},
    replace: true,
    restrict: 'E',
    templateUrl: 'templates/foo-third.html',
    link: function(scope, element, attr, ctrl, linker) {
      $log.log('start');
      
      // $timeout(function(){
      //   $log.log('执行');
      //   scope.imgSrc = attr.fooSrc;
      // }, 3000);

      // var vm = this;
      // vm.scope = scope;
      // var fooSrc = attr.fooSrc;
      // $timeout(function(){
      //   $log.log('执行');
      //   vm.scope.imgSrc = fooSrc;
      // }, 3000);

      // var imgSrc = attr.fooSrc ? attr.fooSrc : 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2427242374,1296106858&fm=58&u_exp_0=1860208759,962801448&fm_exp_0=86&bpow=700&bpoh=400';
      // var imgAlt = attr.alt ? attr.alt : undefined;
      // var imgId = attr.id ? attr.id : undefined;
      // var imgClass = attr.class ? attr.class : undefined;
      // var imgHeight = attr.height ? attr.height : undefined;
      // var imgWidth = attr.width ? attr.width : undefined;
      // $timeout(function(){
      //   $log.log('执行');
      //   scope.imgUrl = imgSrc;
      //   scope.imgAlt = imgAlt;
      //   scope.imgId = imgId;
      //   scope.imgClass = imgClass;
      //   var imgStyle = {};
      //   if (imgHeight) imgStyle.height = imgHeight + 'px';
      //   if (imgWidth) imgStyle.width = imgWidth + 'px';
      //   scope.imgStyle = imgStyle;
      // }, 5000);

      var img404 = 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2427242374,1296106858&fm=58&u_exp_0=1860208759,962801448&fm_exp_0=86&bpow=700&bpoh=400';
      scope.imgUrl = img404;
      var imgSrc = attr.fooSrc;
      var imgAlt = attr.alt ? attr.alt : undefined;
      var imgId = attr.id ? attr.id : undefined;
      var imgClass = attr.class ? attr.class : undefined;
      var imgHeight = attr.height ? attr.height : undefined;
      var imgWidth = attr.width ? attr.width : undefined;
      function success(){
        $log.log('执行');
        scope.imgUrl = imgSrc;
        scope.imgAlt = imgAlt;
        scope.imgId = imgId;
        scope.imgClass = imgClass;
        var imgStyle = {};
        if (imgHeight) imgStyle.height = imgHeight + 'px';
        if (imgWidth) imgStyle.width = imgWidth + 'px';
        scope.imgStyle = imgStyle;
        element.on('error', function(){
          element.attr('src', img404);
          element.css({
            height: '500px',
            width: '500px',
          });
        });
      }
      $timeout(function(){
        success()
      }, 5000);
    }
 };
})
