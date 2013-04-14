var Deejay = Deejay || {};

Deejay.Utility = {

  DOMParser : new DOMParser(),
  
  ajax : function(options) {
    var request = new XMLHttpRequest();
    request.open(options.type, options.url, true);
    request.responseType = options.responseType;
    request.context = options.context;
    request.identifier = options.identifier;
    request.onload = options.onLoad;
    request.send();
  },

  loadTemplate : function(name, callback, context) {
    this.ajax({
      type : 'GET',
      context : context,
      url : Deejay.Config.App.url + 'src/templates/' + name + '.html',
      responseType : '',
      onLoad : callback
    });
  },

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