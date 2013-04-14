var Deejay = Deejay || {};

Deejay.AudioFX = {

  Filters : {
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

    load : function(context, filterName)  {
      filter = context.createBiquadFilter();
      filter.type = this.filters[filterName];
      return filter;
    }
  },

  Pan : {},

  Compressor : {}
};