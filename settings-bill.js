let Moment = require('moment')
let moment = Moment()
module.exports = function() {

  var smsCost = 0;
  var callCost = 0;

  var warninglvl = 0;
  var criticallvl = 0;

  var smsTotal = 0.00;
  var callsTotal = 0;
  var totalCost = 0;

  var actionList = [];

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

    let bill = {
      type: billItemType,
        cost: value,
        timestamp: new Date()

    }

    if (billItemType === "sms") {
      if (totalCost < criticallvl) {
        smsTotal += smsCost;
        bill.cost = smsCost
      }

      //------FOR TIMESTAMP------
     // actionList.push({
        //---REMANE THE --"TYPE:"-- TO CALLCOST COZ THATS THE TYPE YOU WANNA KNOW WHEN A USER SELECTS IT!!!-----
      //   type: billItemType,
      //   cost: smsCost,
      //   timestamp: Moment(new Date()).fromNow()
      // });


    }

    if (billItemType === "call") {
      if (totalCost < criticallvl) {
        callsTotal += callCost;
        bill.cost = callCost
      }
      //------FOR TIMESTAMP---
     // actionList.push({
        //---REMANE THE --"TYPE:"-- TO CALLCOST COZ THATS THE TYPE YOU WANNA KNOW WHEN A USER SELECTS IT!!!-----
      //   type: billItemType,
      //   cost: callCost,
      //   timestamp: Moment(new Date()).fromNow()
      // });

    }
     actionList.push(bill)

  }


  function actions() {
    return actionList;
  }

  function actionsFor(type) {
    const filteredActions = [];

    // loop through all the entries in the action list
    for (let index = 0; index < actionList.length; index++) {
      const action = actionList[index];
      // check this is the type we are doing the total for
      if (action.type === type) {
        // add the action to the list
        filteredActions.push(action);
        
      }
    }

    return filteredActions;

    // return actionList.filter((action) => action.type === type);
  }





  
  function setColour() {
    if (totalCost >= criticallvl) {

      return 'danger';
    }
    if (totalCost >= warninglvl) {

      return 'warning';
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
    return warninglvl.toFixed(2);
  }

  function getCritical() {
    return criticallvl.toFixed(2);
  }

  function getSms() {
    return smsCost.toFixed(2);
  }

  function getCall() {
    return callCost.toFixed(2);
  }

  function totaCcalls() {
    console.log(callsTotal);
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
    totaCcalls,
    smsTotals,
    total,
    getWarning,
    getCritical,
    getCall,
    getSms,
    setColour,
    actions,
    actionsFor

  }
};
