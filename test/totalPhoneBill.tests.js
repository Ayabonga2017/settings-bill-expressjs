let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe('totalPhoneBill function', function(){

    it('should Return R 2.75 for a Call', function(){
      assert.equal(totalPhoneBill("call"),"R 2.75")
    });
    it('should Return R 0.65 for 1 sms', function(){
      assert.equal(totalPhoneBill("sms"),"R 0.65")
    });
    it('should Return R 0 if no calls or sms where made ', function(){
      assert.equal(totalPhoneBill("no call ,no sms"),"R 0")
    });

});
