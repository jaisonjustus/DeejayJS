var Deejay = Deejay || {};

Deejay.AudioCore = function() {

  this.context = new webkitAudioContext;
  this.source = this.context.createBufferSource();
  this.audioBuffer = null;

  return this;
};