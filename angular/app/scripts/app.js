'use strict';

angular.module('Deejay', [])

	.config(function($routeProvider)	{

		$routeProvider
			
			/* Playout route */
			.when('/', {
				templateUrl : 'views/playout.html',
				controller : 'PlayoutController'
			})

			/* Default Routing */
			.otherwise({
				redirectTo : '/'
			})

	});