var express = require('express');
var router = express.Router();

var secrets = require('secrets.js');

var cryptr;
    

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Express'
  });
});


router.get('/combine', function(req, res) {
  res.render('combine', {
    title: 'Express'
  });
});

router.post('/generate-hocrux', function(req, res) {
  var inputVal = req.body.hocruxInput;
  var hocruxNeeded = parseInt(req.body.hocruxNeeded);
  var hocruxTotal = parseInt(req.body.hocruxTotal);
  
  var saltInput = req.body.saltInput;
  var passwordInput = req.body.passwordInput;
  
  // generate a 512-bit key
  var key = secrets.str2hex(inputVal); // => key is a hex string
  console.log(key);
  
  // split into 10 shares with a threshold of 5
  var shares = secrets.share(key, hocruxTotal, hocruxNeeded); 
  // => shares = ['801xxx...xxx','802xxx...xxx','803xxx...xxx','804xxx...xxx','805xxx...xxx']
  console.log(shares);
  
  //var comb = secrets.combine( shares.slice(4,9) );
  //console.log(comb === key); // => true
  //console.log(comb);
  //console.log(secrets.hex2str(comb));
  
  res.send(shares);
});

router.post('/combine-hocrux', function(req, res) {
  var combineHocrux1 = req.body.combineHocrux1;
  var combineHocrux2 = req.body.combineHocrux2;
  var combineHocrux3 = req.body.combineHocrux3;
  var combineHocrux4 = req.body.combineHocrux4;
  var combineHocrux5 = req.body.combineHocrux5;
  var combineHocrux6 = req.body.combineHocrux6;
  var combineHocrux7 = req.body.combineHocrux7;
  var combineHocrux8 = req.body.combineHocrux8;
  var combineHocrux9 = req.body.combineHocrux9;
  var combineHocrux10 = req.body.combineHocrux10;
  
  var shares = [];
  if (combineHocrux1) {
    shares.push(combineHocrux1);
  }
  if (combineHocrux2) {
    shares.push(combineHocrux2);
  }
  if (combineHocrux3) {
    shares.push(combineHocrux3);
  }
  if (combineHocrux4) {
    shares.push(combineHocrux4);
  }
  if (combineHocrux5) {
    shares.push(combineHocrux5);
  }
  if (combineHocrux6) {
    shares.push(combineHocrux6);
  }
  if (combineHocrux7) {
    shares.push(combineHocrux7);
  }
  if (combineHocrux8) {
    shares.push(combineHocrux8);
  }
  if (combineHocrux9) {
    shares.push(combineHocrux9);
  }
  if (combineHocrux10) {
    shares.push(combineHocrux10);
  }
  
  
  var comb = secrets.combine( shares.slice(0) );
  console.log(comb);
  console.log(secrets.hex2str(comb));
  
  var result = secrets.hex2str(comb);
  
  res.send(result);
});

module.exports = router;
