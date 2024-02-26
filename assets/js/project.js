let targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10); // Set target date 10 days from now

function updateCountdown() {
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) {
            clearInterval(countdown);
            targetDate.setDate(targetDate.getDate() + 10);
            updateCountdown();
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Assuming you have HTML elements with IDs 'days', 'hours', 'minutes', and 'seconds'
            document.getElementById('days').querySelector('.Digit').innerText = formatTime(days);
            document.getElementById('hours').querySelector('.Digit').innerText = formatTime(hours);
            document.getElementById('minutes').querySelector('.Digit').innerText = formatTime(minutes);
            document.getElementById('seconds').querySelector('.Digit').innerText = formatTime(seconds);
        }
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

updateCountdown();

