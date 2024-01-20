function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? 'PM' : 'AM'; //am - ante meridiem, pm - post meridiem
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0); // for first 2 characters pad them with a 0
    const seconds= now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000); //call a function repeatedly
