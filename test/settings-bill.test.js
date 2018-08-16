let assert = require("assert");
const Settings = require('../settings-bill');
let settings =Settings();

describe('settings-bill function', function(){
  it('should Return R 0.00 for a sms', function(){

    var sms =settings.setSms(0.00);
    assert.equal(sms,0.00)
  })
    it('should Return R 2.75 for a calls', function(){
  
      var calls =settings.setCall(2.75);
      assert.equal(calls,2.75)
    })

    it('should Return R 10.00 for warning', function(){
      var setwarnining =settings.setwarnining(10.00);
      assert.equal(setwarnining,10.00)
    })

    it('should Return R 30.00 for critical value', function(){
      var setcritical =settings.setcritical(30.00);
      assert.equal(setcritical,30.00)
    })
    it('should Return warning for critical value', function(){
 
      var warningset = Settings();
      warningset.setCall(2.00);
      warningset.setSms(1.00);
      warningset.setcritical(20.00);
      warningset.setColour("warning");
      warningset.updatesmsandcall("sms");
      warningset.updatesmsandcall("call");

     assert.equal(warningset.total(),3.00)

    })
});
