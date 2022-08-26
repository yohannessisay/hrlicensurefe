var XMLHttpRequest = require('xhr2');

var data = JSON.stringify({
  recipients: ["251930627047"],
  smsContent: "testing3"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://dev.eris.sms.k8s.sandboxaddis.com/sms");
xhr.setRequestHeader("Authorization", "Basic RVJJUzpFUklTX0RFVl9BUElfU0VDUkVU");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
