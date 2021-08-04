const hamburger= document.getElementById('hamburger');
const navUL = document.getElementById('nav_ul');

hamburger.addEventListener('click', function() {
    
    navUL.classList.toggle('show');
})