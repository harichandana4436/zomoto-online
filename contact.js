document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservation-form');

    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(reservationForm);
        const reservationDetails = {};
        formData.forEach((value, key) => {
            reservationDetails[key] = value;
        });

        alert('Reservation made successfully!');
        console.log(reservationDetails);

        reservationForm.reset();
    });
});
