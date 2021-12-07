const nav = document.querySelector('.menu-nav');
const menuIcon = document.querySelector('#menu-icon');

menuIcon.addEventListener('click', display);
function display() {
    if(nav.style.display === 'flex')
    {
      nav.style.display = 'none'  
    } else {
        nav.style.display = 'flex'
    }
    
}