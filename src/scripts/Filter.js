var Deejay = Deejay || {};

var Filter = Deejay.Filter = {

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

  processor : function(context, filterId, frequency, qfactor, gain)  {
    filter = context.createBiquadFilter();
    filter.type = filterId;
    filter.frequency.value = frequency;
    filter.Q.value = qfactor;
    filter.gain.value = gain;

    return filter;
  }
};