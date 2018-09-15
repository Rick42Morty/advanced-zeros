module.exports = function getZerosCount(number, base) {
  // your implementation
  var zeros = 0;
  var helper = 1;
  var maxInd = 0;
  var smallSimp = [2,	3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
    37, 41,	43,	47,	53,	59,	61,	67,	71, 73,	79,	83,	89,	97,
    101, 103, 107, 109, 113, 127]
  // найдем максимальный простой делитель для base
  for (var i=1; i<=base/2; i++) {
    if (base%i == 0 && smallSimp.indexOf(i) !== -1) helper = i;
  }

  if(helper == 1) helper = base;
  //находим, в какой степени helper превзойдет number
  while (Math.pow(helper,maxInd) < number) {maxInd++}

  for (var n = maxInd; n > 0; n--){
    zeros += Math.floor(number/Math.pow(helper,n));
  }

  return zeros;
}