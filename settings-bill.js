module.exports = function() {

  var smsCost = 0;
  var callCost = 0;

  var warninglvl = 0;
  var criticallvl = 0;

  var smsTotal = 0;
  var callsTotal = 0;
  var totalCost = 0;


  function setSms(value) {
    smsCost = parseFloat(value);

    return smsCost.toFixed(2);
  }

  function setCall(value) {
    callCost = parseFloat(value);

    return callCost.toFixed(2);
  }

  function updatesmsandcall(value) {

    var billItemType = value;

    if (billItemType === "sms") {
      if (totalCost < criticallvl) {
        smsTotal += smsCost;
      }

      if (billItemType === "call") {
        if (totalCost < criticallvl) {
          callsTotal += callCost;
        }
      }
    }
  }

  function setwarnining(value) {
    warninglvl = parseFloat(value);

    return warninglvl.toFixed(2);
  }

  function setcritical(value) {
    criticallvl = parseFloat(value);

    return criticallvl.toFixed(2);
  }

  function getWarning() {
    return warninglvl;
  }

  function getCritical() {
    return criticallvl;
  }

  function getSms() {
    return smsCost;
  }

    function getCall() {
      return callCost;
    }

  function callTotals() {
    return callsTotal.toFixed(2);
  }

  function smsTotals() {
    return smsTotal.toFixed(2);
  }


  function total() {
    totalCost = callsTotal + smsTotal;
    return totalCost.toFixed(2);
  }

  return {

setSms,
setCall,
updatesmsandcall,
setwarnining,
setcritical,
callTotals,
smsTotals,
total,
getWarning,
getCritical,
getCall,
getSms
  }
};
