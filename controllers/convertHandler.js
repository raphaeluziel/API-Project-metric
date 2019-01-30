/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var start = input.search(/\d/); // Beginning of digit    
    var end = input.search(/[A-Za-z]/); // Beginning of unit
    var divider = input.search(/\//); // Fraction?
    var space = input.search(/\d\s+\d/); // Space?
    var whole = 0; // Whole part of mixed number
    
    if (start < 0) return 1;

    // If number is mixed, extract the "whole" part from the fraction
    if (space >= 0){
      whole = input.substring(start, space + 1);
      whole = Number(whole);
      // Remove whole number part of input
      input = input.substring(space + 1);
      // Recalculate location to search for rest of number and unit
      start = start = input.search(/\d/);
      divider = input.search(/\//);
      end = input.search(/[A-Za-z]/); 
    }

    // If number is a fraction extract numerator and denominator and divide
    if(divider > 0){
      var numerator = input.substring(start, divider);
      var denominator = input.substring(divider + 1, end);
      result = whole + numerator / denominator;
    } 
    // Otherwise number is everything before unit
    else{
      result = Number(input.substring(start, end));
    }

    // Round result to five decimal places
    result *= 100000;
    result = Math.round(result) / 100000;

    if (!result) {result = 'invalid number';}
    
    return result;
  };
  
  this.getUnit = function(input) { 
    var start = input.search(/\d/);
    var end = input.search(/[A-Za-z]/);
    var unit = input.substring(end).toLowerCase();
    
    if ((unit != 'gal') && (unit != 'l') && (unit != 'mi') && (unit != 'km') && (unit != 'lbs') && (unit != 'kg')){
      return 'invalid unit';
    }
    
    return input.substring(end);
  };
  
  this.getReturnUnit = function(initUnit) {
    initUnit = initUnit.toLowerCase();
    var result;
    
    initUnit === 'gal' ? result = 'l'
    : initUnit === 'l' ? result = 'gal'
    : initUnit === 'lbs' ? result = 'kg'
    : initUnit === 'kg' ? result = 'lbs'
    : initUnit === 'mi' ? result = 'km'
    : initUnit === 'km' ? result = 'mi'
    : result = 'invalid unit';
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    unit === 'gal' ? result = 'gallons'
    : unit === 'l' ? result = 'liters'
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
    : initUnit === 'kg' ? result /= lbsToKg
    : initUnit === 'mi' ? result *= miToKm
    : initUnit === 'km' ? result /= miToKm
    : result = 'invalid unit';
    
    result *= 100000;
    result = Math.round(result) / 100000;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
  }
  
}

module.exports = ConvertHandler;
