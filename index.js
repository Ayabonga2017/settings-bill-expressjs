let express = require('express');
let app = express();
const exphbs  = require('express-handlebars');

app.use(express.static('public'));
app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.get('/', function (req, res) {
    res.render('home');
});

let PORT = process.env.PORT || 3006;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});


app.get('/settings/:costType', function(){
    let costType = req.params.costType;

    let cost = 0;
    //lookup cost for costType
    if (costType === 'sms'){
        cost = settings.smsCost;
    } else if (costType === 'call') {
        cost = settings.callCost;
    }

    req.render('cost', {
        costType,
        cost
    });
});
