document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeLogin = document.getElementById('closeLogin');
    const closeSignup = document.getElementById('closeSignup');

    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'flex';
    });

    signupBtn.addEventListener('click', function() {
        signupModal.style.display = 'flex';
    });

    closeLogin.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    closeSignup.addEventListener('click', function() {
        signupModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });
});

