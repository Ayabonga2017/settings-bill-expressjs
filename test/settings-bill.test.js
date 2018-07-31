describe("SetiingBill Widget Testing", function() {

  it("should be able to count 6 calls and return calls total", function() {

    var settingCall = SetiingBill();

    settingCall.CountsetingType("call");
    settingCall.CountsetingType("call");
    settingCall.CountsetingType("call");
    settingCall.CountsetingType("call");
    settingCall.CountsetingType("call");
    settingCall.CountsetingType("call");

    assert.equal(9, settingCall.Callstota());
  });

  it("should be able to count 10 sms's and return the total for those sms's", function() {

    var setinngSms = SetiingBill();
    setinngSms.setSms(0.75);
    setinngSms.CountsetingType("sms");
    setinngSms.CountsetingType("sms");
    setinngSms.CountsetingType("sms");
    setinngSms.CountsetingType("sms");
    setinngSms.CountsetingType("sms");
    setinngSms.CountsetingType("sms");
    setinngSms.CountsetingType("sms");
    setinngSms.CountsetingType("sms");
    setinngSms.CountsetingType("sms");
    setinngSms.CountsetingType("sms");

    assert.equal(7.5, setinngSms.SmStota());
  });

  it("should be able to count 3 sms's and 4 calls and Return total costs for both of them", function() {

    var setinngSms = SetiingBill();
    var settingCall = SetiingBill();
    setinngSms.setSms(0.75);
    setinngSms.CountsetingType("sms");
    setinngSms.CountsetingType("sms");
    settingCall.CountsetingType("call");
    setinngSms.CountsetingType("sms");
    settingCall.CountsetingType("call");
    settingCall.CountsetingType("call");
    settingCall.CountsetingType("call");

    assert.equal(2.25, setinngSms.SmStota());
    assert.equal(6, settingCall.Callstota());
  });
});
