function hamburgerNav() {
    var x = document.getElementById("topNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

$(function(){
    $("#nav-bar").load("nav.html");
});

function footer() {
    var x = document.getElementById("bottomFooter");
    if (x.className === "footer") {
        x.className += " responsive";
    } else {
        x.className = "footer";
    }
}

$(function(){
    $("#footer").load("footer.html");
});

// Get the container element
var navContainer = document.getElementById("topNav");
// Get all buttons with class="btn" inside the container
var navItems = document.getElementsByClassName("page");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        console.log(current);
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}