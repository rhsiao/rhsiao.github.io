$(document).ready(function() {
    $('.enter_link').click(function() {
        $(this).parent('#splashscreen').fadeOut(500);
    });
    $('.Login').click(function() {
        $('#loginscreen > .Login, .Guest, .New, #selectLogin').fadeOut(500);
        $('.userDiv').fadeIn(500).delay(1000);
    });
    $('.Guest').click(function() {
        $('#loginscreen > .Login, .Guest, .New, #selectLogin').fadeOut(500);

    });
    $('.New').click(function() {
        $('#loginscreen > .Login, .Guest, .New, #selectLogin').fadeOut(500);
        $('.newuserDiv').fadeIn(500).delay(1000);
    });

})

var submitBtn = document.getElementById("submitBtn");

function btnColor(btn) {
    var property = document.getElementById(btn);
    if (property.className !== 'buttontoggle') {
        property.className = 'buttontoggle'
        console.log(property.className)
    } else {
        property.className = 'button';
        console.log(property.className)
    }
}

function userloginClick() {
    //Hides loginscreen, displays user ID and password input
    var x = document.getElementById('loginscreen');
    x.style.display = 'none';
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

}

function returnToLogin(hidethisID) {
    //    Hide Current Screen, Display the DIV that holds the choices id="loginscreen"
    var x = document.getElementById(hidethisID);
    x.style.display = 'none';
}