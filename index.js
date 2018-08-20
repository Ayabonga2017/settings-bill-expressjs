let express = require('express');
let app = express();
const exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
let settingFunc = require("./settings-bill");
let factory = settingFunc();
let Moment = require('moment')

app.use(express.static('public'));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers : {
    'changedDate': function() {
  return Moment(this.timestamp).fromNow();
  }
}
}));
app.get('/', function(req, res) {
  res.render('home');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json());
app.post('/settings', function(req, res) {

  // get the values from the form (req.body)
  var smsCost = req.body.smsCost;
  var callCost = req.body.callCost;
  var warningLevel = req.body.warningLevel;
  var criticalLevel = req.body.criticalLevel;

  // use the values in the Factory function
  factory.setSms(smsCost);
  factory.setCall(callCost);
  factory.setwarnining(warningLevel);
  factory.setcritical(criticalLevel);

  // get the values from the Factory Function and display them
  var settingValue = {
    call: factory.getCall(),
    sms: factory.getSms(),
    warning: factory.getWarning(),
    critical: factory.getCritical()

  };

  // process data
  // note that data can be sent to the template
  res.render('home', {
    settings: settingValue

  })
});

app.post('/action', function(req, res) {
  let types = req.body.Billtype;

  //calculating factory function
  factory.updatesmsandcall(types);
  //console.log(factory.callTotals());

  const total = {
    call: factory.totaCcalls(),
    sms: factory.smsTotals(),
    total: factory.total(),
    color : factory.setColour()

  }
  var settingValue = {
    call: factory.getCall(),
    sms: factory.getSms(),
    warning: factory.getWarning(),
    critical: factory.getCritical()

  };

  // note that data can be sent to the template
  res.render('home', {
    settings: settingValue,
    valuesSum: total,

  })
});
//rest btn 
app.post('/resetBtn', function(req, res) {
  factory.resetBtn();
  res.render('home');
});

// app.get('/settings/:costType', function() {
//   let costType = req.params.costType;
//   console.log(costType);
//   factory.updatesmsandcall(costType);
//
//   const total = {
//     total: factory.total(),
//     call: factory.totaCcalls(),
//     sms: factory.smsTotals(),
//     color : factory.setColour()
//
//   }
//
//   req.render('cost', {
//     costType,
//     cost,
//     valuesSum: total
//   })
// });

app.get('/actions', function(req, res){
  res.render('timestamp', {insertData:factory.actions()})
})

app.get('/actions/:type', function(req, res){
  let variable = req.params.type;
  res.render('timestamp', {insertData:factory.actionsFor(variable)})
})

let PORT = process.env.PORT || 3310;
app.listen(PORT, function() {
  console.log('App starting on port', PORT);
});
