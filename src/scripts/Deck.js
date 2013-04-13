var Deejay = Deejay || {};

var Deck = Deejay.Deck = function()  {

  /* Deck Properties */
  this.prop = {};

  this.core = {};

  var initializeDeck = function() {
    this.core = new AudioCore();
  }

  return {
    init : function() {
      initializeDeck();
    },

    loadEventBindings : function()  {
      
    },

    render : function() {

    }
  };
}