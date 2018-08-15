let assert = require("assert");
const Settings = require('../settings-bill');
let settings =Settings();

describe('totalPhoneBill function', function(){
  it('should Return R 2.75 for a Call', function(){

    assert.equal(settings.getSms("call"),"R 2.75")
  })

});