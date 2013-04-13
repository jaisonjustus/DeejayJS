var Deejay = Deejay || {};

var Player = Deejay.Player = function() {

  this.core = {
    context : null,
    source : null,
    audioBuffer : null
  };

  this.filter = {
    lowpass : null,
    highpass : null,
    bandpass : null,
    lowshelf : null,
    highshelf : null,
    peaking : null,
    notch : null,
    allpass : null
  };

  var attachAudioCore = function(core)  {
    this.core = core;
  };

  var attachAudioFilters = function() {
    for(var filter in this.filters) {
      this.filters[filter] = Deejay.process(
        this.core.context,
        Deejay.filters[filter],
        0,0,0);
    }
  }

  return {
    init : function(core) {
      attachAudioCore(core);
      attachAudioFilters();
    },

    setTrack : function(audioBuffer) {
      this.core.audioBuffer = audioBuffer;
    },

    play : function() {

    }
  }
};