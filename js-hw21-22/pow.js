var pow = {
  pow: function pow (x,n) {
    var result =1;
    if (n % 1 >0) {alert("Введи целое число"); return}
    if (n>0){
      for (var i = 0; i<n;i++) { result *= x; }
    }
    if (n<0){
      for (var i = 0; i<-n;i++){ result /= x; }
    }
    return result;
  }
}

try {
  module.exports = pow;
} catch (e) {}
