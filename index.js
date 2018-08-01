let express = require('express');
let app = express();
const exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
let settingFunc = require("./settings-bill");
let factory = settingFunc();

app.use(express.static('public'));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
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
factory.SmStota(smsCost);
factory.Callstota(callCost);
factory.warnireturn(warningLevel);
factory.criticreturn(criticalLevel);

  // get the values from the Factory Function and display them
  var settings = {

    smsCost,
    callCost,
    warningLevel,
    criticalLevel

  };

  // process data
  globalSetings = settings;

  // note that data can be sent to the template
  res.render('home', {
    settings
  })
});

app.post('/action', function(req, res) {
  let types = req.body.Billtype;

  //calculating factory function
  factory.CountsetingType(types);

console.log(types);

let valuesSum ={

  sms : factory.SmStota(types),
  call :factory.Callstota(types),
  total :factory.total(types)

}
  // process data


  // note that data can be sent to the template
  res.render('home', {
valuesSum
  })
});

app.get('/settings/:costType', function() {
  let costType = req.params.costType;
  let cost = 0;
  //lookup cost for costType
  if (costType === 'sms') {
    cost = settings.smsCost;
  } else if (costType === 'call') {
    cost = settings.callCost;
  }
  req.render('cost', {
    costType,
    cost
  });
});

let PORT = process.env.PORT || 3310;
app.listen(PORT, function() {
  console.log('App starting on port', PORT);
});
