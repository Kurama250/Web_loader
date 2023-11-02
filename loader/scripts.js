/*
Create by Kurama250
Github : github.com/Kurama250
*/

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 2000);

    const loadingText = document.querySelector('.loading');
    const dotsContainer = document.getElementById('dots');
    let dotsCount = 1;

    function updateDots() {
        dotsContainer.textContent = '.'.repeat(dotsCount);
        dotsCount = (dotsCount % 3) + 1;
    }

    function animateDots() {
        updateDots();
        setTimeout(animateDots, 350);
    }

    animateDots();
});