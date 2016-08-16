// http call for api =  http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=ed5f487c18c10403c896daa2dcacbfc6
    (function() {
        'use strict';
    
        angular
            .module('app')
            .controller('HomeController', Controller);
    
        Controller.$inject = ['weatherfactory'];
    
        /* @ngInject */
	        function Controller(weatherfactory) {
	            var vm = this;
	            vm.title = 'HomeController';
	            vm.history = [];
	    
	           vm.getCityData = function(city){
	           	console.log('getCityData running...' + city);
	           	weatherfactory.getWeatherData(city).then(
	           		function(response) {

	           		vm.weatherData = response.data;
	           		console.log(vm.weatherData);
	           		vm.icon = "http://openweathermap.org/img/w/" + vm.weatherData.weather[0].icon + ".png";
					console.log(vm.icon);

	           		vm.history.push({

	           			city : response.data.name,
	           			date : new Date()
	           		});

	           	},
	           	function(error){
	           	});
	        }

	       activate();

	       ///////////////////////

	       function activate(){

	       }

        }
    })();
