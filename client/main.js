angular.module('FSR2', ['ngMaterial'])
    .controller('photosCtrl', function ($scope, photosFactory) {

        $scope.num = 0
        $scope.allPhotos = []

        $scope.getPhotos = function () {
            photosFactory.getPhotos($scope.num)
                .then(function (photos) {
                    if (Array.isArray(photos)) {
                        $scope.allPhotos = photos
                    } else {
                        $scope.allPhotos.unshift(photos)
                    }
                    console.log('photos in ctrl', photos)
                })
        }
    })
    .factory('photosFactory', function ($http) {
        var getPhotos = function (num) {
            var url = '/api/photos/' + num
            
            return $http.get(url)
                .then(function (photos) {
                    return photos.data
                })
        }

        return {
            getPhotos: getPhotos
        }
    })