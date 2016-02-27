var broadcastmessage = document.getElementById('broadcasted-message');
var clientmessage = document.getElementById('client-message');
var submit = document.getElementById('submit');

var firebaseProject = new Firebase("https://[YOUR PROJECT URL].firebaseio.com/");

function updateBroadcast() {
	var message = clientmessage.value;
	firebaseProject.set({
		broadcastmessage: message,
	});
}

submit.onclick = updateBroadcast;

firebaseProject.on("value", function(snapshot) {
	broadcastmessage.innerHTML = snapshot.val().broadcastmessage;
}, function (errorObject) {
	console.log("The read failed: " + errorObject.code);
});