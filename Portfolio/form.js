var button1 = document.getElementById("button");

button1.onclick = function() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    
    if (name.value.length != 0 && email.value.length != 0 && message.value.length != 0) {
	alert("Your message is recieved. I will contact you as soon as possible.");
    }
    else {
	alert("Please fill out the form to send a message!");
    }
};