/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var start = input.search(/\d/); 
    var end = input.search(/[A-Za-z]/);
    return Number(input.substring(start, end));
  };
  
  this.getUnit = function(input) { 
    var end = input.search(/[A-Za-z]/);
    return input.substring(end);
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit){
      case 'gal':
        result = 'L';
        break;
      case 'L':
        result ='gal';
        break;
      case 'lbs':
        result ='kg';
        break;
      case 'kg':
        result ='lbs';
        break;
      case 'mi':
        result ='km';
        break;
      case 'km':
        result = 'mi';
        break;       
      default:
        result = 'invalid unit';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    unit === 'gal' ? result = 'gallons'
    : unit === 'L' ? result = 'liters'
    : unit === 'lbs' ? result = 'pounds'
    : unit === 'kg' ? result = 'kilograms'
    : unit === 'mi' ? result = 'miles'
    : unit === 'km' ? result = 'kilometers'
    : result = 'invalid unit';
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    var result = initNum;
    
    initUnit === 'gal' ? result *= galToL
    : initUnit === 'L' ? result /= galToL
    : initUnit === 'lbs' ? result *= lbsToKg
    : initUnit === 'Kg' ? result /= lbsToKg
    : initUnit === 'mi' ? result *= miToKm
    : initUnit === 'km' ? result /= miToKm
    : result = 'invalid unit';
    
    result *= 100000;
    result = Math.round(result) / 100000;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
