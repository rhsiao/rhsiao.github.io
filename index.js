window.onload = function() {
    checkPreferences();
    resetData()
};

var firebaseRef = firebase.database().ref();

function resetData() {
    for (count = 1; count < 13; count++) {
        name = 'Btn' + String(count);
        firebaseRef.child('Btn').child(name).child("Value").set(0);
    }
}

function checkPreferences() {
    firebaseRef.child("Users").child("LoggedIn").once('value', function(snapshot) {
        var currentUser = (snapshot.val());
        var firebasePersonRef = firebaseRef.child("Users").child(currentUser).child('Preferences');
        firebasePersonRef.child('soy').once('value', function(datasnapshot) {
            document.getElementById("soy").checked = datasnapshot.val();

        });
        firebasePersonRef.child('vegetarian').once('value', function(datasnapshot) {
            document.getElementById("vegetarian").checked = datasnapshot.val();

        });
        firebasePersonRef.child('dairy').once('value', function(datasnapshot) {
            document.getElementById("dairy").checked = datasnapshot.val();

        });
        firebasePersonRef.child('shellfish').once('value', function(datasnapshot) {
            document.getElementById("shellfish").checked = datasnapshot.val();

        });
        firebasePersonRef.child('gluten').once('value', function(datasnapshot) {
            document.getElementById("gluten").checked = datasnapshot.val();

        });
        firebasePersonRef.child('nuts').once('value', function(datasnapshot) {
            document.getElementById("nuts").checked = datasnapshot.val();

        });
    });
}


function logoff() {
    firebaseRef.child('Users').child('LoggedIn').remove();
}

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

function loginClick() {
    var usertext = document.getElementById("usertext");
    var emailText = usertext.value;
    firebaseRef.child("Users").once('value', function(snapshot) {
        if (!snapshot.hasChild(emailText)) {
            //Alert User Does Not Exist
            alert("User does not exist!")
        } else {
            firebaseRef.child("Users").child("LoggedIn").set(emailText);
            if (document.location.href == "file:///C:/Users/Richard/Desktop/ME310_Shelf/rhsiao.github.io/index.html") {
                document.location.href = "file:///C:/Users/Richard/Desktop/ME310_Shelf/rhsiao.github.io/selection.html";
            } else {
                document.location.href = "selection.html";
            }
        }
    })
}

function checktheBox(id) {
    var itemID = document.getElementById(id);
    return itemID.checked;
}

function savePreferences() {
    firebaseRef.child("Users").child("LoggedIn").once('value', function(snapshot) {
        var currentUser = (snapshot.val());
        var firebasePersonRef = firebaseRef.child("Users").child(currentUser).child('Preferences');
        /*        console.log(snapshot.val());
                console.log(checktheBox("soy"));
                console.log(currentUser);*/

        firebasePersonRef.child('soy').set(checktheBox('soy'));
        firebasePersonRef.child('nuts').set(checktheBox('nuts'));
        firebasePersonRef.child('shellfish').set(checktheBox('shellfish'));
        firebasePersonRef.child('vegetarian').set(checktheBox('vegetarian'));
        firebasePersonRef.child('gluten').set(checktheBox('gluten'));
        firebasePersonRef.child('dairy').set(checktheBox('dairy'));
    });
}

function submitClick() {
    if (document.location.href == "file:///C:/Users/Richard/Desktop/ME310_Shelf/rhsiao.github.io/index.html") {
        document.location.href = "file:///C:/Users/Richard/Desktop/ME310_Shelf/rhsiao.github.io/selection.html";
    } else {
        document.location.href = "selection.html";
    }
}

function guestClick() {
    firebaseRef.child("Users").child("LoggedIn").set('Guest');
    //initialize preferences
    var postData = {
        'soy': false,
        'vegetarian': false,
        'nuts': false,
        'soy': false,
        'dairy': false,
        'gluten': false,
        'shellfish':false
    };

    var firebasePersonRef = firebaseRef.child("Users").child('Guest').child('Preferences');
    firebasePersonRef.set(postData);

}

function createUser() {
    email = document.getElementById("emailtext");
    var emailText = email.value;
    user = document.getElementById("newUserName");
    var userText = user.value;
    //Create User
    firebaseRef.child('Users').child(userText).child('Email').set(emailText);
    //initialize preferences
    var postData = {
        'soy': false,
        'vegetarian': false,
        'nuts': false,
        'soy': false,
        'dairy': false,
        'gluten': false,
        'shellfish':false
    };

    var firebasePersonRef = firebaseRef.child("Users").child(userText).child('Preferences');
    firebase.database().ref('Users/' + userText + '/Preferences').set(postData);
    firebaseRef.child("Users").child("LoggedIn").set(userText);
    if (document.location.href == "file:///C:/Users/Richard/Desktop/ME310_Shelf/rhsiao.github.io/index.html") {
        document.location.href = "file:///C:/Users/Richard/Desktop/ME310_Shelf/rhsiao.github.io/selection.html";
    } else {
        document.location.href = "selection.html";
    }
}