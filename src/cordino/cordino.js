var http = require('http'),
    faye = require('faye');

var bayeux = new faye.NodeAdapter({mount: '/', timeout: 45});
bayeux.listen(3000);


bayeux.getClient().subscribe('/high-pass-filter', function(response) {
  bayeux.getClient().publish('/high-pass-filter-listener', response );
});