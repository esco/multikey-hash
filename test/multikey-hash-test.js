describe('hash', function(){
  var mkhash = require('../multikey-hash');

  it('should generate hash from arguments', function(){
    var expectedKey = 3717699652;
    var key = mkhash(5, 'afuh08h3sfasfs40n340unfe0ruhn0unerf0u', function test(){console.log(test);});
    key.should.equal(expectedKey);
  });
});