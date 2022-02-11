const ftoc = function(tempF) {
  let celcius = (tempF - 32)*(5/9);
  celcius = Math.round(celcius * 10) / 10;
  return celcius;
};

const ctof = function(tempC) {
  let fahr = (tempC)*(9/5) + 32;
  fahr = Math.round(fahr * 10) / 10;
  return fahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
