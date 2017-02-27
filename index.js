window.onload = function() {
    resetData()
};

function resetData() {
    var firebaseRef = firebase.database().ref();
    firebaseRef.child('Btn').remove();
}

var submitBtn = document.getElementById("submitBtn");

function readClick(id) {
    var firebaseRef = firebase.database().ref().child('Btn') //Path to the root object in database
        //firebaseRef.set("") //Sets value to firebase. Can't set to main object, so need to set a key to add a child to that
    firebaseRef.child(id).once('value', function(datasnapshot) {
            if (datasnapshot.val() == null) { //Since the webpage starts cleared on load of data. This just assigns a value on the first click of the button.
                firebaseRef.child(id).set("1");
            } else if (datasnapshot.val() !== '0') {
                firebaseRef.child(id).set("0")
            } else {
                firebaseRef.child(id).set("1")
            }

        }) //console.log(datasnapshot.val()) Console logs the value in the id, for debugging
}