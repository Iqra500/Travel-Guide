document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = document.getElementById('button');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstname').value.trim();
        const lastName = document.getElementById('lastname').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const message = document.querySelector('textarea').value.trim();

        if (!firstName || !lastName || !email || !mobile || !message) {
            alert("Vul alle velden in.");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Voer een geldig e-mailadres in.");
            return;
        }

        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(mobile)) {
            alert("Voer een geldig mobiel nummer in (10 cijfers).");
            return;
        }

        alert("Bericht verzonden! We nemen binnenkort contact met je op.");
        
        form.reset();
    });
});
