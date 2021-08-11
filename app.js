document.getElementById('contact').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = "flex";
    event.preventDefault();
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = "none";
})