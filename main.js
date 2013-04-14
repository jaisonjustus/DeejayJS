var context = new webkitAudioContext();

var source = context.createBufferSource();

/* loading the track. */
var trackBuffer = null;

function loadTrack(url)  {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer)  {
      trackBuffer = buffer;
      finishLoading(trackBuffer);
    });
  }

  request.send();
};

loadTrack('http://localhost:8888/sources/loops/takabeat.wav');

var finishLoading = function(buffer)  {
  source.buffer = buffer;
  window.filter = context.createBiquadFilter();
    window.filter.type = 2;
    window.filter.frequency.value = 5000;
    window.filter.Q = 0;
    window.filter.gain = 0;



  source.connect(window.filter);
  window.filter.connect(context.destination);
  source.connect(context.destination);
  source.noteOn(0);
}