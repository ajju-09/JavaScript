const clock = document.getElementById('clock');

// This method run continously for a time intervel
setInterval( () => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);