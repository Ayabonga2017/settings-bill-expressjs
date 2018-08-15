let assert = require("assert");
const Settings = require('../settings-bill');
let settings =Settings();

describe('totalPhoneBill function', function(){
  it('should Return R 2.75 for a sms', function(){

    var sms =settings.setSms(2.75);
    assert.equal(sms,2.75)
  })

});