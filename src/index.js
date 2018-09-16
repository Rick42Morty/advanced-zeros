module.exports = function getZerosCount(number, base) {
  // your implementation
  var zeros = 0;
  var maxInd = 0;
  var count = 0;  
  //разложим base на простые множители
  var simp = [];
  var pow = [];

  for (var i=2; i <= base; i++) {
    if (base%i === 0) {
      count = 0;
      simp.push(i);
      while (base%i === 0) {
        base/=i;
        count++;
      }
      pow.push(count);
    }
  }

  //составляем массив кандидатов в zeros
  var num = [];

  for (i=0; i<simp.length; i++){
    maxInd = 1;

    while (Math.pow(simp[i], maxInd) < number) maxInd++;

    zeros = 0;
    for (var n = maxInd; n > 0; n--){
      zeros += Math.floor(number/Math.pow(simp[i],n));
    }

    num.push(Math.floor(zeros/pow[i]));
  }

  zeros = num[0];

  for (i=1; i<num.length; i++){
    if (zeros > num[i]) zeros = num[i];
  }

  return zeros;
}