document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('.form-submit-btn input');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let fullname = document.getElementById('fullname').value;
        let lastname = document.getElementById('lastname').value;
        let email = document.getElementById('email').value;
        let destination = document.getElementById('destination').value;
        let departure = document.getElementById('departure').value;
        let returnDate = document.getElementById('return').value;

        if (fullname && lastname && email && destination && departure && returnDate) {
            alert('Booking Successful');
        } else {
            alert('Please fill in all fields');
        }
    });

    const previewBookingButton = document.createElement('button');
    previewBookingButton.textContent = 'Preview Booking';
    previewBookingButton.style.marginTop = '20px';
    previewBookingButton.style.padding = '10px 20px';
    previewBookingButton.style.backgroundColor = '#1f6fb5';
    previewBookingButton.style.color = 'white';
    previewBookingButton.style.border = 'none';
    previewBookingButton.style.cursor = 'pointer';
    
    form.appendChild(previewBookingButton);

    previewBookingButton.addEventListener('click', function() {
        let fullname = document.getElementById('fullname').value;
        let lastname = document.getElementById('lastname').value;
        let email = document.getElementById('email').value;
        let destination = document.getElementById('destination').value;
        let departure = document.getElementById('departure').value;
        let returnDate = document.getElementById('return').value;

        if (fullname && lastname && email && destination && departure && returnDate) {
            alert(`Booking Preview:
            Full Name: ${fullname} ${lastname}
            Email: ${email}
            Destination: ${destination}
            Departure: ${departure}
            Return Date: ${returnDate}`);
        } else {
            alert('Please fill in all fields to preview your booking');
        }
    });
});
