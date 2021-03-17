console.log('Fetching...');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};

xhttp.open(
  "GET",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Bio.txt",
  true
);
xhttp.send();