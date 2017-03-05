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
        $('.newuserDiv').fadeIn(500).delay(800);
    });
    $('.returntoLogin').click(function(){
        $('#loginscreen > .Login, .Guest, .New, #selectLogin').fadeIn(500).delay(500);
        $('.newuserDiv, .userDiv').fadeOut(500);
    });
    $('#gotoFilters').click(function(){
       $('#filterMenu').fadeIn(500); 
    });
    $('#closeFilters').click(function(){
        $('#filterMenu').fadeOut(500);
    })
    
})

var submitBtn = document.getElementById("submitBtn");

function btnColor(btn) {
    var property = document.getElementById(btn);
    if (property.className !== 'buttontoggle') {
        property.className = 'buttontoggle'
        console.log(property.className)
    } else {
        property.className = 'buttonme';
        console.log(property.className)
    }
}
function returnHome(){
    
        if (document.location.href == "file:///C:/Users/Richard/Desktop/ME310_Shelf/rhsiao.github.io/selection.html") {
        document.location.href = "file:///C:/Users/Richard/Desktop/ME310_Shelf/rhsiao.github.io/index.html";
    } else {
        document.location.href = "index.html";
    }
     firebaseRef.child('Users').child('LoggedIn').remove();
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