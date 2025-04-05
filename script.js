function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayName = dayNames[now.getDay()];
    const monthName = monthNames[now.getMonth()];
    const dayNumber = now.getDate();
    const year = now.getFullYear();

    const formatTime = (unit) => unit < 10 ? '0' + unit : unit;

    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('period').textContent = period;

    document.getElementById('day-name').textContent = dayName;
    document.getElementById('month-name').textContent = monthName;
    document.getElementById('day-number').textContent = formatTime(dayNumber);
    document.getElementById('year').textContent = year;
}

setInterval(updateClock, 1000);
updateClock();