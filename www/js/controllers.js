angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $log, ajaxGet) {
  var vm = this;
  vm.scope = $scope;
  vm.scope.host = 'baidu';

  vm.scope.clickButton = function(){

    var num = Math.floor(Math.random() * 10);

    ajaxGet.get(num).then(
      function(result){
        $log.log(result);
      }, 
      function(error) {
        $log.log(error);
      }
    );
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  var vm = this;
  vm.scope = $scope;
  vm.scope.chats = Chats.all();
  vm.scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  var vm = this;
  vm.scope = $scope;
  vm.scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  var vm = this;
  vm.scope = $scope;
  vm.scope.settings = {
    enableFriends: true
  };
});
