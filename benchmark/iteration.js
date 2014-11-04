var MurmurHash3 = require('imurmurhash');
var hashState = MurmurHash3();
var tokenize = require('simple-token');
var args = [5, 'afuh08h3sfasfs40n340unfe0ruhn0unerf0u', true];

module.exports = {

  tests: {
    'loop': function(){
        for(var i = 0, len = args.length; i < len; i++) {
          hashState.hash(tokenize(args[i]));
        }

        hashState.result();
    },

    'concat': function(){
        hashState.hash(tokenize(args));
        hashState.result();
    }
  }
}
