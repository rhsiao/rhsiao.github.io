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
/*    $('#gotoFilters').click(function(){
       $('#filterMenu').fadeIn(500); 
    });
    $('#closeFilters').click(function(){
        $('#filterMenu').fadeOut(500);
    })*/
    
})

//Defining a listener for our button, specifically, an onclick handler
function applyCustom() {
    //First things first, we need our text:
    var text = document.getElementById("customIngredient").value; //.value gets input values

    //Now construct a quick list element
    var li = "<li>" + text + "</li>";   
    //Now use appendChild and add it to the list!
    document.getElementById("list").appendChild(li);
}

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

