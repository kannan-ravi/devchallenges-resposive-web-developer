const whiteDiv = document.querySelector(".white-div");
const orderedList = document.querySelector(".ordered-list");
const linkLink = document.querySelectorAll(".link");

whiteDiv.addEventListener('click', () => {
    orderedList.classList.toggle('active');
})

linkLink.forEach(n  => {n.addEventListener ('click',  () => {
    orderedList.classList.remove('active');
})
});