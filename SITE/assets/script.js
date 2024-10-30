/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */

/*  -- Scroll Up Function --  */
const buttonScrollUp = document.getElementById('scroll-up-btn');

window.onscroll = function() { showButtonScrollUp() };

function showButtonScrollUp() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        buttonScrollUp.style.opacity = '1.0';
    } else {
        buttonScrollUp.style.opacity = '0';
    }
}

function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */

/*  -- Side Nav Functioning --  */
const arrayElementsSectionLibrary = [...document.querySelectorAll('.library')];
const arrayElementsSideNav = [...document.querySelectorAll('.side-nav-items')];

arrayElementsSideNav.forEach((item, index) => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('selected-sidenav');

        arrayElementsSideNav.forEach(el => el.classList.remove('selected-sidenav'));
        arrayElementsSectionLibrary.forEach(section => section.classList.add('hidden'));

        if(!isActive){
            item.classList.add('selected-sidenav');
            arrayElementsSectionLibrary[index].classList.remove('hidden');
        }
    });
});

/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */

/*  -- Dropdown Spacing Calcule --  */
const elementHeaderDropdown = document.getElementById('header-dropdown');
const elementHeaderContent = document.getElementById('header-content');
const elementDropdownButton = document.getElementById('dropdown-btn');
const elementDropdownContent = document.getElementById('dropdown-content');
        
elementDropdownContent.style.top = ''+(elementDropdownButton.offsetHeight)+'px';
elementHeaderDropdown.style.top = ''+(elementHeaderContent.offsetHeight)+'px';

/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */

/*  -- Password Showing --  */
const elementTogglePassword = document.getElementById('togglePassword');

elementTogglePassword.addEventListener('click', () => {
    var x = document.getElementsByName('senha')[0];
    if (x.type === "password") { x.type = "text"; }
    else { x.type = "password"; }
});

/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */