const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const linksEl = document.querySelector('.links');

const navEl = [openBtn, closeBtn, linksEl];

openBtn.addEventListener('click', () => {
    handleNavElement(navEl);
});

closeBtn.addEventListener('click', () => {
    handleNavElement(navEl);
});

function handleNavElement(nav){
    nav.forEach(element => element.classList.toggle('visible'));
}