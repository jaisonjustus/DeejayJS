'use strict'

angular.module('Deejay')
	
	.controller('PlayoutController', function($scope, $route)	{
		$scope.bufferArray = $route.current.locals.trackData;
		console.log($scope.bufferArray);
	});