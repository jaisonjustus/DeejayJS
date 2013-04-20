var Deejay = Deejay || {};

/**
 * Player Module for deck.
 * @module Player
 * @namespace Deejay
 */
Deejay.Player = function()  {

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

};

/**
 * Initialize the player
 * @method init
 * @access public
 * @param object core
 */
Deejay.Player.prototype.init = function(core) {
  this._attachAudioCore(core);
  this._attachAudioFilters();
};

/**
 * Method to set audio buffer.
 * @method setAudio
 * @access public
 * @param PCM audio
 */
Deejay.Player.prototype.setAudio = function(audio)  {
  this.core.audioBuffer = audio;
}

/**
 * Method to attached the audio core object to the player.
 * @method _attachAudioCore
 * @access private
 * @param object core
 */
Deejay.Player.prototype._attachAudioCore = function(core) {
  this.core = core;
};

/**
 * Method to attached the audio filter (FX) object to the player.
 * @method _attachAudioFilters
 * @access private
 */
Deejay.Player.prototype._attachAudioFilters = function()  {
  for(var filter in this.filters) {
    this.filters[filter] = Deejay.AudioFX.Filters.load(this.core.context, filter);
  }  
};

/**
 * Play the current track in the audio buffer.
 * @method play
 * @access public
 */
Deejay.Player.prototype.play = function() {
  this.core.source.buffer = this.core.audioBuffer;
  this.core.source.loop = true;
  this.core.source.connect(this.core.context.destination);
  this.core.source.noteOn(0);
}