var Deejay = Deejay || {};

Deejay.Deck = function()  {
  this.core = null;
};

Deejay.Deck.prototype.loadEventBindings = function()  {
  $(document)
  .on("dragstart",".track-roll-entry", function()  {
    console.log('dragging..');
  });
};

Deejay.Deck.prototype.loadHtml = function(request) {
 $('#cockpit-deck-wrapper').append(request.target.response);
};

Deejay.Deck.prototype.init = function()  {
  this.core = new Deejay.AudioCore();
};

Deejay.Deck.prototype.render = function() {
  Deejay.Utility.loadTemplate('deck',this.loadHtml);
};