function appendMessage() {
      var header = document.createElement("h3");
      var th = document.createTextNode("Password must contain the following:");
      header.appendChild(th);
      document.body.appendChild(header);
	  
	  var p1 = document.createElement("p");
      var tp1 = document.createTextNode("A lowercase letter");
      p1.appendChild(tp1);
      document.body.appendChild(p1);
	  
	  var p2 = document.createElement("p");
      var tp2 = document.createTextNode("A capital (uppercase) letter");
      p2.appendChild(tp2);
      document.body.appendChild(p2);
	  
	  var p3 = document.createElement("p");
      var tp3 = document.createTextNode("A number");
      p3.appendChild(tp3);
      document.body.appendChild(p3);
	  
	  var p4 = document.createElement("p");
      var tp4 = document.createTextNode("Minimum 8 characters");
      p4.appendChild(tp4);
      document.body.appendChild(p4);
   }

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  var  email = document.getElementById("em").value;
const regex_email = /^[a-zA-Z0-9_%+-]+(\.[a-zA-Z0-9_%+-]+)*@([a-z0-9]+([a-z0-9]*)\.)+[a-zA-Z]+$/;
var emailResult = regex_email.test(String(email).toLowerCase());

var pass = document.forms['myForm']['psw'].value;
const regex_pass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}/;
var passResult = regex_pass.test(String(pass));
  if (emailResult == false) {
    alert("Email not valid!");
    return false;
  }
    if (passResult == false) {
    alert("Password not valid!");
    return false;
  }
}



