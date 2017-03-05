window.onload = function() {
    resetData()
};

var firebaseRef = firebase.database().ref();

function resetData() {
    for (count = 1; count < 13; count++) {
        name = 'Btn' + String(count);
        firebaseRef.child('Btn').child(name).child("Value").set(0);
    }
};

function readClick(id) {
    var firebaseRef = firebase.database().ref().child('Btn') //Path to the root object in database
        //firebaseRef.set("") //Sets value to firebase. Can't set to main object, so need to set a key to add a child to that
    firebaseRef.child(id).child("Value").once('value', function(datasnapshot) {
            if (datasnapshot.val() == null) { //Since the webpage starts cleared on load of data. This just assigns a value on the first click of the button.
                firebaseRef.child(id).child("Value").set(1);
            } else if (datasnapshot.val() !== 0) {
                firebaseRef.child(id).child("Value").set(0)
            } else {
                firebaseRef.child(id).child("Value").set(1)
            }

        }) //console.log(datasnapshot.val()) Console logs the value in the id, for debugging
};


function submitClick() {
    usertext = document.getElementById("usertext");
    var emailText = usertext.value;
    firebaseRef.child('Users').child('Email').set(emailText);
    document.location.href = "file:///C:/Users/Richard/Desktop/ME310_Shelf/rhsiao.github.io/selection.html";
}

function createUser() {

    emailtext = document.getElementById("emailtext");
    var emailText = emailtext.value;
    usertext = document.getElementById("usertext");
    var userText = usertext.value;
    firebaseRef.child('Users').child(userText).child('Email').set(emailText);

    document.location.href = "file:///C:/Users/Richard/Desktop/ME310_Shelf/rhsiao.github.io/selection.html";
}