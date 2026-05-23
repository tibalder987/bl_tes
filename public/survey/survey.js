// script.js

document.addEventListener('DOMContentLoaded', function () {
    initRatings();
});

function initRatings() {
    document.querySelectorAll('.rating').forEach(ratingDiv => {
        for (let i = 5; i >= 1; i--) {
            let star = document.createElement('span');
            star.classList.add('star');
            star.dataset.value = i;
            star.innerHTML = '&#9733;';
            star.onclick = () => setRating(ratingDiv.id, i);
            ratingDiv.appendChild(star);
        }
    });
}

function setRating(ratingId, value) {
    let ratingInput = document.querySelector(`input[id=${ratingId}]`);
    ratingInput.value = value;
    updateStars(ratingId, value);
}

function updateStars(ratingId, value) {
    let stars = document.querySelectorAll(`#${ratingId} .star`);
    stars.forEach(star => {
        star.style.color = star.dataset.value <= value ? 'orange' : '#ddd';
    });
}
