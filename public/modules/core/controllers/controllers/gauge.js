app.controller('RadialGaugeCtrl', ['$scope', function ($scope) {
    $scope.value = 2.4;
    $scope.upperLimit = 6;
    $scope.lowerLimit = 0;
    $scope.unit = "C";
    $scope.precision = 2;
    $scope.ranges = [
        {
            min: 0,
            max: 1.5,
            color: '#DEDEDE'
        },
        {
            min: 1.5,
            max: 2.5,
            color: '#8DCA2F'
        },
        {
            min: 2.5,
            max: 3.5,
            color: '#FDC702'
        },
        {
            min: 3.5,
            max: 4.5,
            color: '#FF7700'
        },
        {
            min: 4.5,
            max: 6.0,
            color: '#C50200'
        }
    ];
}]);

app.controller('RadialGaugeTemperaturCtrl', ['$scope', function ($scope) {
    $scope.value = 20.4;
    $scope.upperLimit = 28;
    $scope.lowerLimit = 15;
    $scope.unit = "°C";
    $scope.precision = 1;
    $scope.ranges = [
        {
            min: 15.0,
            max: 28.0,
            color: '#C50200'
        },
        {
            min: 17.5,
            max: 25.5,
            color: '#FDC702'
        },
        {
            min: 20.0,
            max: 23.0,
            color: '#8DCA2F'
        }
    ];
}]);

app.controller('RadialGaugeMoistureCtrl', ['$scope', function ($scope) {
    $scope.value = 45;
    $scope.upperLimit = 100;
    $scope.lowerLimit = 0;
    $scope.unit = "%";
    $scope.precision = 0;
    $scope.ranges = [
        {
            min: 0,
            max: 10.0,
            color: '#FDC702'
        },
        {
            min: 10.0,
            max: 55.0,
            color: '#8DCA2F'
        },
        {
            min: 55.0,
            max: 100.0,
            color: '#C50200'
        }
    ];
}]);

app.controller('RadialGaugePressureCtrl', ['$scope', function ($scope) {
    $scope.value = 8.5;
    $scope.upperLimit = 24;
    $scope.lowerLimit = 0;
    $scope.unit = "Pa";
    $scope.precision = 0;
    $scope.ranges = [
        {
            min: 0,
            max: 7.0,
            color: '#C50200'
        },
        {
            min: 7.0,
            max: 20.0,
            color: '#8DCA2F'
        },
        {
            min: 20.0,
            max: 24.0,
            color: '#FDC702'
        }
    ];
}]);