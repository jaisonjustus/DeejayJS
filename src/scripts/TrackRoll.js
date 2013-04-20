var Deejay = Deejay || {};

/**
 * Module to manage music tracks.
 * @module TrackRoll
 * @namespace Deejay
 */
Deejay.TrackRoll = {

  /* Default tracks. */
  tracks : {
    takabeat : 'takabeat.wav',
    rainyday : 'rainyday.wav'
  },

  currentDeck : null,

  /* Audio Buffer arrar. */
  audioBuffers : {},

  /**
   * load the track and save it into the arraybuffers.
   * @method attachTrackToBuffer
   * @access public
   * @param object request
   */
  attachTrackToBuffer : function(request)  {
    var that = request.target.context,
        identifier = request.target.identifier,
        response = request.target.response;

    that.audioBuffers[identifier] = response;
    that.createTrackNodes(identifier);
  },

  /**
   * Method to get the tracks.
   * @method load
   * @access public
   */
  load : function()  {
    for(var track in this.tracks) {
      Deejay.Utility.loadTrack(this.tracks[track], this.attachTrackToBuffer, track, this);
    }
  },

  /**
   * Method to create track representational html nodes.
   * @method createTrackNodes
   * @access public
   * @param int identifier
   */
  createTrackNodes : function(identifier) {
    $('#cockpit-track-roll-wrapper #track-roll-list ol').append('<li><div class="track-roll-entry" data-track-id="' + identifier +'"><span class="tag">'+identifier+'</h3></div></li>')
  },

  /**
   * Set current deck to load the track.
   * @method setCurrentDeck
   * @access public
   * @param object deckOptions
   */
  setCurrentDeck : function(deckOptions) {
    this.currentDeck = deckOptions;
  },

  /**
   * Load event bindings for the track roll.
   * @method loadEventBindings
   * @access public
   */
  loadEventBindings : function()  {
    var that = this;

    $(document)

    .on('click', '.track-roll-entry', function()  {
      if(that.currentDeck !== null) {
        var identifier = $(this).attr('data-track-id');

        that.currentDeck.setTrack(that.audioBuffers[identifier]);
        that.currentDeck.resumeFromTrackSelection(identifier);
      }
    })
  }
};