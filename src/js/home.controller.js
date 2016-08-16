// http call for api =  http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=ed5f487c18c10403c896daa2dcacbfc6
    (function() {
        'use strict';
    
        angular
            .module('app')
            .controller('HomeController', Controller);
    
    	// papa style injecting of paramater
        Controller.$inject = ['weatherfactory', 'toastr'];
    
        /* @ngInject */
	        function Controller(weatherfactory, toastr) {
	        	// get rid of $scope by creating "this" variable. based on papa style
	            var vm = this;
	            vm.title = 'HomeController';
	            // create empty array for search history
	            vm.history = [];

	           // create function to get the array information from api through factory
	           vm.getCityData = function(city){

	           		weatherfactory.getWeatherData(city).then(
	           		function(response) {
	           		// standardize the information crom city for if statements
	           		var inputCity = city.toLowerCase();
	           		var responseCity = response.data.name;
	           		responseCity = responseCity.toString();
	           		responseCity = responseCity.toLowerCase();

		           		if(response.cod === 404 || inputCity !== responseCity){
		           			toastr.error('An unexpected error has occurred.', 'Error');
		           		}
		           		
		           		else{
		           		//create storage for information gotten through factory function
		           		vm.weatherData = response.data;

		           		// push city name and date to history array for search history
		           		vm.history.push({

		           			// create objects for city and date to be pushed to history array
		           			city : response.data.name,
		           			date : new Date()
		           		});
		           		}
	           		});
	        	}
        }
    })();
