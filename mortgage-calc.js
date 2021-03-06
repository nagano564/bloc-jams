

// The formula: c = (r * p)/(1 - (Math.pow((1 + r), (-n)))) 
// @param p float amount borrowed
// @param r interest as a percentage
// @param n term in years
function calculateMortgage(p, r, n){
  

  //percentToDecimal(r)
  r = percentToDecimal(r);

  //convert years to months
  n = yearsToMonths(n);
    
  return (r * p)/(1 - (Math.pow((1 + r), (-n))))
}

function percentToDecimal(percent){
  return (percent/12)/100;
}

function yearsToMonths(year){
  return year * 12;
}