let assert = require("assert");
let settingsBill = require('../settings-bill');


describe('settingsBill function', function(){

    it('should Return R 2.75 for a Call', function(){
      assert.equal(settingsBill("call"),"R 2.75")
    });
    it('should Return R 0.65 for 1 sms', function(){
      assert.equal(settingsBill("sms"),"R 0.65")
    });
    it('should Return R 0 if no calls or sms where made ', function(){
      assert.equal(settingsBill("no call ,no sms"),"R 0")


  });
  
});
