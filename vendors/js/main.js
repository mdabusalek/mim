//mixitup 
var mixer = mixitup('.grid-portfolio-container');

//Scrollify

$(function() {
          $.scrollify({
            section : ".scrollifysalek",
            setHeights: false,
            updateHash: false,
          });
});

// HAMBURGER


function openMenu(){
    document.getElementById('navbar').style.height = "100vh";
}


function closeMenu(){
    document.getElementById('navbar').style.height = "0%";
};
