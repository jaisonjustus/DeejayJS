'use strict'

angular.module('Deejay')
	.factory('Core', function()	{
		
		return function()	{
			this.context = new webkitAudioContext;
	  	this.source = this.context.createBufferSource();
	  	this.audioBuffer = null;

	  	return this;
		};

	});