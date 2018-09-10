angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push({code: $scope.listings.element_code,
                      name: $scope.listings.element_name,
                      coordinates:{
                        latitude: $scope.listings.element_latitude,
                        longitude: $scope.listings.element_longitude
                      },
                        address: $scope.listings.element_address
                      });
    };
    $scope.deleteListing = function(element) {
      var index = $scope.listings.indexOf(element);
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(element) {
      $scope.detailedInfo = element;
    };
  }
]);
