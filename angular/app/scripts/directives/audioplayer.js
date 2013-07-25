'use strict'

angular.module('Deejay')
	.directive('audioplayer', function()	{

		var dir = {
			restrict : 'E',
			replace : true,
			templateUrl : 'views/deck.html',
			link : function(scope, element, attrs)	{

			}
		};

		return dir;
	});