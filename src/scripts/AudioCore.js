var Deejay = Deejay || {};

var AudioCore = Deejay.AudioCore = function() {

  var context = null,
      source = null,
      audioBuffer = null;

  this.context = new webkitAudioContext;
  this.source = this.context.createBufferSource();

  return this;
};