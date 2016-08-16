(function() {
    'use strict';

    angular
        .module('app')
        .factory('weatherfactory', weatherfactory);

    weatherfactory.$inject = ['$http'];

    /* @ngInject */
    function weatherfactory($http) {
        var service = {
            getWeatherData : getWeatherData
        };
        return service;

        ////////////////

        function getWeatherData(cityName) {
          console.log('working factory');
          return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=ed5f487c18c10403c896daa2dcacbfc6&units=imperial');
        }
    }
})();