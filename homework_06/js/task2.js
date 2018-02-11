var euro = parseFloat (prompt ("enter euro",));
var usd = parseFloat (prompt ("enter usd",));
var uahtoeuro = 33.23;
var uahtousd = 27.12;
var eurotousd = uahtoeuro/uahtousd;
uahtoeuro*=euro;
uahtousd*=usd;
console.log(euro,"euros are equal",uahtoeuro.toFixed(2),"UAH,",usd,"dollars are equal",
uahtousd.toFixed(2),"UAH, one euro is equal",eurotousd.toFixed(4),"dollars");