var Deejay = Deejay || {};

Deejay.TrackRoll = {
  tracks : {
    takabeat : 'takabeat.wav',
    rainyday : 'rainyday.wav'
  },

  currentDeck : null,

  audioBuffers : {},

  attachTrackToBuffer : function(request)  {

    console.log(request);

    var that = request.target.context,
        identifier = request.target.identifier,
        response = request.target.response;

    that.audioBuffers[identifier] = response;
    that.createTrackNodes(identifier);
  },

  load : function()  {
    for(var track in this.tracks) {
      Deejay.Utility.loadTrack(this.tracks[track], this.attachTrackToBuffer, track, this);
    }
  },

  createTrackNodes : function(identifier) {
    $('#cockpit-track-roll-wrapper #track-roll-list ol').append('<li><div class="track-roll-entry" data-track-id="' + identifier +'"><span class="tag">'+identifier+'</h3></div></li>')
  },

  setCurrentDeck : function(deckOptions) {
    this.currentDeck = deckOptions;
  },

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