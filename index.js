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
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/settings', function(req, res) {
  let smsCost = req.body.smsCost;
  let callCost = req.body.callCost;
  let warningLevel = req.body.warningLevel;
  let criticalLevel = req.body.criticalLevel;

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
  let smsCost = req.body.smsCost;
  let callCost = req.body.callCost;
  let warningLevel = req.body.warningLevel;
  let criticalLevel = req.body.criticalLevel;

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

app.get('/actions', function(){

  res.render('home', {
    
  })
})

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
