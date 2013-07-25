'use strict';

angular.module('Deejay', [])

	.config(function($routeProvider)	{

		$routeProvider
			
			/* Playout route */
			.when('/', {
				templateUrl : 'views/playout.html',
				controller : 'PlayoutController',
				resolve : {
					trackData : function(Track)	{
						return Track.getTracks();
					}
				}
			})

			/* Default Routing */
			.otherwise({
				redirectTo : '/'
			})

	});