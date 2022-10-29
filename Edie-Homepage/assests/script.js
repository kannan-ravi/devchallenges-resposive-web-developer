//* Hamburger menu and operations
const hamburgerDiv = document.querySelector('.hamburger-div');
const hamburgerMenu = document.querySelectorAll('.hamburger-menu');
const unOrderedList = document.querySelector('.unordered-list');
const menuLink = document.querySelectorAll('.link');

hamburgerDiv.addEventListener('click', () => {
    hamburgerMenu.forEach( menu => {
        menu.classList.toggle('active');
    })
    unOrderedList.classList.toggle('active');
})

menuLink.forEach( menu => {
    menu.addEventListener('click', () => {
        hamburgerMenu.forEach( hammenu => {
            hammenu.classList.remove('active');
        })
        unOrderedList.classList.remove('active');
    })
})

//* Hamburger menu and operations ended.
