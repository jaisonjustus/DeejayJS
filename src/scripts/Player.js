var Deejay = Deejay || {};

Deejay.Player = function()  {

  this.core = {
    context : null,
    source : null,
    audioBuffer : null
  };

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

}

Deejay.Player.prototype.setAudio = function(audio)  {
  this.core.audioBuffer = audio;
}

Deejay.Player.prototype._attachAudioCore = function(core) {
  this.core = core;
};

Deejay.Player.prototype._attachAudioFilters = function()  {
  for(var filter in this.filters) {
    this.filters[filter] = Deejay.AudioFX.Filters.load(this.core.context, filter);
  }  
};

Deejay.Player.prototype.init = function(core) {
  this._attachAudioCore(core);
  this._attachAudioFilters();
};

Deejay.Player.prototype.play = function() {
  this.core.source.buffer = this.core.audioBuffer;
  this.core.source.loop = true;
  this.core.source.connect(this.core.context.destination);
  this.core.source.noteOn(0);

}