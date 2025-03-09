document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.menu-item button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Customize your order for ' + this.parentElement.querySelector('h3').textContent);
        });
    });
});
