'use strict'

angular.module('Deejay')

	.service('Track', function($q, $http)	{
		
		var _tracksList, _loadTrack, _audioBuffers = {}, _iterateAndLoadTrackList;

		_tracksList = {
			takabeat : 'takabeat.wav',
			rainyday : 'rainyday.wav',
			test : 'test.mp3'
		};

		_iterateAndLoadTrackList = function()	{
			var trackListCount = 0,
					trackLoadCounter = 0,
					defered = null;

			defered = $q.defer();

			for(var track in _tracksList) {
				var url = '/sounds/loops/' + _tracksList[track];

				trackListCount++;

	      $http({ method : 'GET', url : url, identifier : track, responseType : 'arraybuffer' })
	      	.success(function(data, status, headers, config)	{
	      		_audioBuffers[config.identifier] = data;
	      		
	      		trackLoadCounter++;
	      		if(trackListCount === trackLoadCounter)	{ defered.resolve(_audioBuffers); }
	      });
	    }

	    return defered.promise;
		}

		return	{
			getTrackList : function()	{
				return _tracksList;
			},

			getTracks : function()	{
				return _iterateAndLoadTrackList();
			},

			getAudioBuffers : function()	{
				return _audioBuffers;
			}
		}

	});