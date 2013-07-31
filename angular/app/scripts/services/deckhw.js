'use strict'

angular.module('Deejay')
	.factory('DeckHardware', function(FX, $q, $rootScope)	{

		var hardware = function()  {

		  /* Audio Core descriptor. */
		  this.core = {
		    context : null,
		    source : null,
		    audioBuffer : null
		  };

		  /* Audio filter descriptor. */
		  this.filters = {
		    lowpass : null,
		    highpass : null,
		    bandpass : null,
		    lowshelf : null,
		    highshelf : null,
		    peaking : null,
		    notch : null,
		    allpass : null
		  };

		  this.route = {};
		};

		/**
		 * Initialize the player
		 * @method init
		 * @access public
		 * @param object core
		 */
		hardware.prototype.init = function(core) {
		  this._attachAudioCore(core);
		  this._attachAudioFilters();
		  this._createAudioRoute();
		};

		/**
		 * Method to set audio buffer.
		 * @method setAudio
		 * @access public
		 * @param PCM audio
		 */
		hardware.prototype.setAudio = function(audio)  {
		  this.core.audioBuffer = audio;
		}

		/**
		 * Method to decode and to set audio track (audio buffer).
		 * @method setTrack
		 * @access public
		 * @param arrayBuffer track
		 */
		hardware.prototype.setTrack = function(track)  {
		  var that = this,
		  		defered = $q.defer();

		  this.core.audioBuffer = null;
		  this.core.context.decodeAudioData(track, function(buffer) {
		    that.setAudio(buffer);
		    defered.resolve();
		    $rootScope.$apply();
		  });

		  return defered.promise;
		}

		/**
		 * Method to attached the audio core object to the player.
		 * @method _attachAudioCore
		 * @access private
		 * @param object core
		 */
		hardware.prototype._attachAudioCore = function(core) {
		  this.core = core;
		};

		/**
		 * Method to attached the audio filter (FX) object to the player.
		 * @method _attachAudioFilters
		 * @access private
		 */
		hardware.prototype._attachAudioFilters = function()  {
		  for(var filter in this.filters) {
		    this.filters[filter] = FX.Filters.load(this.core.context, filter);
		  }  
		};

		/**
		 * Create an audio route with all filters, panners etc are connected in serial.
		 * @method _createAudioRoute
		 * @access private
		 */
		hardware.prototype._createAudioRoute = function()  {
		  this._prepareAudioRouteDescriptor();
		  this._initializeRoute(true);
		};

		/**
		 * Method to prepare the Route descriptor with components status(active or not).
		 * @method _prepareAudioRouteDescriptor
		 * @access private
		 */
		hardware.prototype._prepareAudioRouteDescriptor = function() {
		  this.route['source'] = true;
		  for(var filter in this.filters) {
		    this.route[filter] = false;
		  }
		  this.route['destination'] = true;
		};

		/**
		 * Initialize the audio route with the active components in the route 
		 * descriptor. with forceNew flag, it create new|fresh audio route forcfully
		 * by ignoring the active components in the route descriptor.
		 * @method _initializeRoute
		 * @access private
		 * @param boolean forceNew
		 */
		hardware.prototype._initializeRoute = function(forceNew) {
		  if(forceNew)  {
		    this.core.source.connect(this.core.context.destination);
		  }else {
		    var lastNode = null;

		    for(var component in this.route)  {
		      console.log(component);
		      if(component === 'source')  {
		        lastNode = this.core.source;
		      }else if(component === 'destination') {
		        lastNode.connect(this.core.context.destination);
		      }else {
		        if(this.filters.hasOwnProperty(component))  {
		          if(this.route[component]) {
		            lastNode.connect(this.filters[component]);
		            lastNode = this.filters[component];
		          }
		        }else {
		          // implement the other filters.
		        }
		      }
		    }
		  }
		};

		/**
		 * Method to modify the current audio route by adding and remove effects.
		 * action parameter is to preform add(true) or remove(false) components 
		 * from the route.
		 * @method _modifyAudioRoute
		 * @access private
		 * @param string componentName
		 * @param boolean action
		 */
		hardware.prototype._modifyAudioRoute = function(componentName, action)  {
		  if(this.route.hasOwnProperty(componentName) && typeof(action) === 'boolean') {
		    this.route[componentName] = action;
		  }
		  this._initializeRoute();
		};

		/**
		 * Play the current track in the audio buffer.
		 * @method play
		 * @access public
		 */
		hardware.prototype.play = function() {
		  this.core.source.buffer = this.core.audioBuffer;
		  this.core.source.loop = true;
		  this.core.source.connect(this.core.context.destination);
		  this.core.source.noteOn(0);
		}

		return hardware;

	});