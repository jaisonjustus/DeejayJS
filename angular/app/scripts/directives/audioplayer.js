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
				
				hardware.setTrack($scope.buffer['test'])
					.then(function()	{
						hardware.play();
					});
					// hardware.play();
			}
		};

		return dir;
	});