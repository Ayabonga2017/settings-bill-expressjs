module.exports =function(){

  var callsTotalBill = 0;
var smsTotalBill = 0;
var totalCostbill = 0;

var warningVariable = 0;
var criticalVariable = 0;
var smsCostVariable =0;
var callCostVariable =0;



function callTotal() {return callsTotalBill.toFixed(2);}
function smsTotal () {return smsTotalBill.toFixed(2);}
function getCriticalValue(){return criticalVariable.toFixed(2);}
function getWarningValue(){return warningVariable.toFixed(2);}

function total(){
totalCostbill = callsTotalBill + smsTotalBill;
return totalCostbill.toFixed(2);
}


return{

    calls : setCallCost,
    sms: setSmsCost,
    critical: setCriticalWarning,
    warning: setWarning,


    sumCall: callTotal,
    sumSms: smsTotal,
getWarning: getWarningValue,
getCritical: getCriticalValue,
    sumTotal: total,
    sumBill: addTotal

}
}
