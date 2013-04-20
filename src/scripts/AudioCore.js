var Deejay = Deejay || {};

/**
 * Core audio descriptor.
 * @module AudioCore
 * @namespace Deejay
 */
Deejay.AudioCore = function() {

  this.context = new webkitAudioContext;
  this.source = this.context.createBufferSource();
  this.audioBuffer = null;

  return this;
};