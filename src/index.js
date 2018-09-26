// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  H=0;
  Q=0;
  D=0;
  N=0;
  P=0;

  if (currency===0) {return {};}
  else if (currency>10000) {return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' }
;}
  for (currency; currency>0; currency--) {
    P++;
    if (P===5) {P=0; N++;}
    if (N===2) {D++; N=0;}
    if ((D===2) && (N===1)) {D=0; N=0; Q++;}
    if (Q===2) {H++; Q=0;}
  }

  const money = {
    H:H,
    Q:Q,
    D:D,
    N:N,
    P:P,
  }

 if (money.H === 0) {delete money.H;}
 if (money.Q === 0) {delete money.Q;}
 if (money.D === 0) {delete money.D;}
 if (money.N === 0) {delete money.N;}
 if (money.P === 0) {delete money.P;}

  return money;

}
