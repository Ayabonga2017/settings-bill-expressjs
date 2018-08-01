module.exports =function(){

  var smsCost = 1.0;
  var callCost = 1.5;
  var callsTotal = 0.00;
  var smsTotal = 0.00;
  var totalCost = 0.00;

  var warningset = 10.00;
  var criticV = 20.00;

  function setSms(value) {
    if (value !== undefined) {
      smsCost = value;
    }
  }

  function setCall(value) {
    if (value !== undefined) {
      callCost = value;
    }
  }


  function CountsetingType(value) {
    var billItemType = value;
    if (billItemType === "sms") {
      smsTotal += smsCost;
    } else if (billItemType === "call") {
      callsTotal += callCost;

    }
    totalCost = callsTotal + smsTotal;
  }


  function SmStota() {
    return smsTotal.toFixed(2);
  }

  function Callstota() {
    return callsTotal.toFixed(2);
  }

  function total() {
    return totalCost.toFixed(2);

  }


  function Critic(criticValue) {
    criticV = criticValue;
  }

  function warni(warnme) {
    warningset = warnme;
  }

  function warnireturn() {
    return warningset;
  }

  function criticreturn() {
    return criticV;
  }


  function settings(){
    return {
      smsCost,
      callCost
    }
  }


  return {
    SmStota,
    setSms,
    CountsetingType,


    Callstota,
    setCall,
    total,


    Critic,
    criticreturn,
    warni,
    warnireturn,
    settings
  }
};
