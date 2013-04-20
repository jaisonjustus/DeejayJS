var Deejay = Deejay || {};

/**
 * Utility Box for Deejay.
 * @module Utility
 * @namespace Deejay
 */
Deejay.Utility = {
  
  /**
   * Ajax implementation.
   * @method ajax
   * @access public
   * @param object options
   */
  ajax : function(options) {
    var request = new XMLHttpRequest();
    request.open(options.type, options.url, true);
    request.responseType = options.responseType;
    request.context = options.context;
    request.identifier = options.identifier;
    request.onload = options.onLoad;
    request.send();
  },

  /**
   * helper to load html templates.
   * @method loadTemplate
   * @access public
   * @param string name
   * @param object callback
   * @param object context
   */
  loadTemplate : function(name, callback, context) {
    this.ajax({
      type : 'GET',
      context : context,
      url : Deejay.Config.App.url + 'src/templates/' + name + '.html',
      responseType : '',
      onLoad : callback
    });
  },

  /**
   * helper to load tracks.
   * @method loadTrack
   * @access public
   * @param string file
   * @param object callback
   * @param int identifier
   * @param object context
   */
  loadTrack : function(file, callback, identifier, context)  {
    this.ajax({
      type : 'GET',
      context : context,
      identifier : identifier,
      url : Deejay.Config.App.url + 'sources/loops/' + file,
      responseType : 'arraybuffer',
      onLoad : callback
    });
  }
};