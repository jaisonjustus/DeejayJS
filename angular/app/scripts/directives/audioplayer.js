'use strict'

angular.module('Deejay')
	.directive('audioplayer', function()	{

		var dir = {
			restrict : 'E',
			replace : true,
			transclude : true, 
			templateUrl : 'views/deck.html',
			scope : {
				buffer : '=buffer'
			},
			controller : function($scope, Core, DeckHardware)	{
				var core, hardware;

				core = new Core();
				hardware = new DeckHardware();
				hardware.init(core);
				// console.log($scope.buffer);
				var cassette = hardware.setTrack($scope.buffer['test']);
				// cassette
				// 	.then(function()	{
						hardware.play();
					// });
			}
		};

		return dir;
	});