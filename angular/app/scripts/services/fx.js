'use strict'

angular.module('Deejay')
	.service('FX', function()	{

		return	{
			/* Audio Filters. */
		  Filters : {

		    /* Filter register. */
		    filters : {
		      lowpass : 0, 
		      highpass : 1,
		      bandpass : 2,
		      lowshelf : 3,
		      highshelf : 4,
		      peaking : 5,
		      notch : 6,
		      allpass : 7
		    },

		    /**
		     * Method to load the filter to the deck.
		     * @method load
		     * @access public
		     * @param object context
		     * @param string filterName
		     * @return object
		     */
		    load : function(context, filterName)  {
		      var filter = context.createBiquadFilter();
		      filter.type = this.filters[filterName];
		      return filter;
		    }
		  },

		  /* Audio Panners. */
		  Pan : {},

		  /* Audio Compressor. */
		  Compressor : {}
		};

	});