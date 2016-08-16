(function() {
    'use strict';

    angular
        .module('app')
        .factory('weatherfactory', weatherfactory);

    // inject paramater
    weatherfactory.$inject = ['$http'];

    /* @ngInject */
    function weatherfactory($http) {
        var service = {
            getWeatherData : getWeatherData
        };
        return service;

        ////////////////

        //Get information from api based on user's search input
        function getWeatherData(city) {
          return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=ed5f487c18c10403c896daa2dcacbfc6&units=imperial');
        }
    }
})();