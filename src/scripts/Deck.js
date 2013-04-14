var Deejay = Deejay || {};

Deejay.Deck = function()  {
  this.deckId = '';

  this.selector = '';

  this.core = null;

  this.player = null;
};

Deejay.Deck.prototype.loadEventBindings = function()  {
  var that = this;
  $(document)

  .on('click', '#' + this.deckId + ' .display', function() {
    var deckStatusSelector = $(this).find('.deck-status');

    if(deckStatusSelector.attr('data-select-track') == '0') {
      $(this).css({ 'backgroundColor' : 'green' });
      deckStatusSelector.html('Select Track...');
      deckStatusSelector.attr('data-select-track', '1');
      Deejay.TrackRoll.setCurrentDeck(that);
    }else {
      $(this).css({ 'backgroundColor' : '#1B9BE0' });
      deckStatusSelector.html('Current Track...');  
      deckStatusSelector.attr('data-select-track', '0');
      Deejay.TrackRoll.setCurrentDeck(null);
    }
    
  });
};

Deejay.Deck.prototype.resumeFromTrackSelection = function(trackName) {
  this.selector.find('.display').css({ 'backgroundColor' : '#1B9BE0' });
  this.selector.find('.display').find('.deck-status').html('Current Track...');
  this.selector.find('.display').find('.now-playing').html(trackName);  
  this.selector.find('.display').find('.deck-status').attr('data-select-track', '0');
  Deejay.TrackRoll.setCurrentDeck(null);
}

Deejay.Deck.prototype.loadHtml = function(request) {
  var deckDOM = $(request.target.response);
  deckDOM.attr('id',request.target.context.deckId);
  $('#cockpit-deck-wrapper').append(deckDOM);
  request.target.context.selector = $('#'+ request.target.context.deckId);
};

Deejay.Deck.prototype.init = function(deckId)  {
  this.core = new Deejay.AudioCore();
  this.player = new Deejay.Player();
  this.player.init(this.core);
  this.deckId = deckId;
};

Deejay.Deck.prototype.setTrack = function(track)  {
  var that = this;

  that.core.audioBuffer = null;
  this.core.context.decodeAudioData(track, function(buffer) {
    that.core.audioBuffer = buffer;
  },function()  {
    that.player.setAudio(that.core.audioBuffer);
  });
}

Deejay.Deck.prototype.render = function() {
  Deejay.Utility.loadTemplate('deck',this.loadHtml, this);
};

Deejay.Deck.prototype.play = function() {
  this.player.play();
}