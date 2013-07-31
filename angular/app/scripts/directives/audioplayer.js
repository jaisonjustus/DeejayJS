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
				
				hardware.setTrack($scope.buffer['takabeat'])
					.then(function()	{
						hardware.play();
						hardware._modifyAudioRoute('bandpass', true);
						

						setInterval(function()	{
							console.log(hardware.filters.bandpass);
							hardware.filters.bandpass.frequency.value += 1000;
							// hardware.filters.bandpass.Q.value += 1000;
							console.log(hardware.filters.bandpass.frequency.value);
						}, 1000);
						// console.log(hardware.filters.highpass.frequency.maxValue);
					});
					// hardware.play();
			}
		};

		return dir;
	});