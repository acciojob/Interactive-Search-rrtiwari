document.querySelector('.btn').addEventListener('click', function() {
    const searchDiv = document.querySelector('.search');
    const input = document.querySelector('.input');
    searchDiv.classList.add('active');
    input.focus();
});

