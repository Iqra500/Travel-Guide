document.querySelector('button').addEventListener('click', function() {
    alert('Ontdek meer landen en boek je reis!');
});

const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        link.style.color = '#FFD700';
    });

    link.addEventListener('mouseleave', function() {
        link.style.color = '';
    });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function() {
        const countryName = card.querySelector('h5').textContent;
        const countryInfo = card.querySelector('p').textContent;

        alert(`Je hebt geklikt op ${countryName}! Wist je dat dit land bekend staat om: ${countryInfo}`);
    });
});

function openModal(name, info) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${name}</h2>
            <p>${info}</p>
            <button id="close-modal">Sluit</button>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('close-modal').addEventListener('click', function() {
        modal.remove();
    });
}
