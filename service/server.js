// =============================================================================
//                                   SERVICE
// =============================================================================

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

// ------------------------------------------------------------------------ PING
client.ping({
  requestTimeout: 1000,
  hello: 'elasticsearch'
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  }
  else {
    console.log('All is well')
  }
});

// ---------------------------------------------------------------------- SEARCH
client.search({
  q: 'pants'
}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message)
});