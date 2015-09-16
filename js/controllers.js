app.controller('Http', function($scope, $http) {
  $http.get('https://api.github.com/zen').then(function(data){
    console.log(data);
    $scope.zenData = data.data;
  });

  $http.get('https://itunes.apple.com/search?term=jack+johnson').then(function(data) {
    console.log(data);
  });

  $http.get('itunes.json').then(function(data) {
    $scope.itunesData = data;
  })

});
