app.controller('Http', function($scope, $http) {
  $http.get('https://api.github.com/zen').then(function(data){
    console.log(data);
    $scope.zenData = data.data;
  });
  $scope.test='TEST';
});
