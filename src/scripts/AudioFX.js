var Deejay = Deejay || {};

/**
 * Module to handle the basic audio effect provided by webaudio api.
 * @module AudioFX
 * @namespace Deejay
 */
Deejay.AudioFX = {

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
      filter = context.createBiquadFilter();
      filter.type = this.filters[filterName];
      return filter;
    }
  },

  /* Audio Panners. */
  Pan : {},

  /* Audio Compressor. */
  Compressor : {}
};