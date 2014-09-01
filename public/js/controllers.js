var bible = angular.module('bible', []);

// Load the Books
bible.controller('listController', ['$scope', '$http', function($scope, $http) {

    $http.get('books.json').success(function(data) {
        $scope.books = data
    });

}]);

bible.controller('displayController', function($scope) {
    $scope.test = "TEST TEXT";
});