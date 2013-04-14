var Deejay = Deejay || {};

Deejay.Utility = {

  DOMParser : new DOMParser(),
  
  ajax : function(options) {
    var request = new XMLHttpRequest();
    request.open(options.type, options.url, true);
    request.responseType = options.responseType;
    request.onload = options.onLoad;
    request.send();
  },

  loadTemplate : function(name, callback) {
    this.ajax({
      type : 'GET',
      url : Deejay.Config.App.url + 'templates/' + name + '.html',
      responseType : '',
      onLoad : callback
    });
  }
};