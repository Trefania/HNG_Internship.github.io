document.addEventListener('DOMContentLoaded', function () {
    // Select elements by data-testid attributes
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    // Function to update UTC time in milliseconds
    function updateUTCTime() {
        const currentUTCTimeMillis = new Date().getTime();
        currentUTCTime.textContent = `Current UTC Time (ms): ${currentUTCTimeMillis}`;
    }

    // Function to update the current day of the week with the date
    function updateDayOfTheWeek() {
        const currentDate = new Date();
        const options = { weekday: 'short', day: '2-digit', month: 'short' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        currentDayOfTheWeek.textContent = `Current Date: ${formattedDate.toUpperCase()}`;
    }

    // Initial calls to update UTC time and the day of the week
    updateUTCTime();
    updateDayOfTheWeek();

    // Update UTC time in milliseconds every second (1000ms)
    setInterval(updateUTCTime, 1000);

    // Update the day of the week every day (86400000ms = 24 hours)
    setInterval(updateDayOfTheWeek, 86400000); // Update once a day

    slackUserName.textContent = "Trefania Tariro Vhareta";
    slackDisplayImage.src = "https://ca.slack-edge.com/T05FFAA91JP-U05R92LJ44D-gd6d4d9ff738-48";
    slackDisplayImage.alt = "Trefania";
});
