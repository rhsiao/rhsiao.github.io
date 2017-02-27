var submitBtn = document.getElementById("submitBtn");

function readClick(id) {
    var firebaseRef = firebase.database().ref(); //Path to the root object in database
    //firebaseRef.set("") //Sets value to firebase. Can't set to main object, so need to set a key to add a child to that
    firebaseRef.child(id).once('value', function(datasnapshot) {
            if (datasnapshot.val() !== '0') {
                firebaseRef.child(id).set("0")
            } else {
                firebaseRef.child(id).set("1")
            }
            console.log(datasnapshot.val())
        }) //Console logs the value in the id, for debugging


    // firebaseRef.child(id).set("Some Value");
    //Value pushed onto online database. .push to randomly generate 
}