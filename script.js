
let baseTime = new Date(); // Initial base time

function updateTime() {
    // Update the base time every 10 minutes
    baseTime = new Date();

    // Display initial times immediately
    displayTimes(baseTime);
}

function displayTimes(base) {
    const currentTime = new Date(base.getTime()); // Clone base time

    // Convert to different US time zones
    const easternTime = currentTime.toLocaleString("en-US", { timeZone: "America/New_York", hour12: false });
    const centralTime = currentTime.toLocaleString("en-US", { timeZone: "America/Chicago", hour12: false });
    const mountainTime = currentTime.toLocaleString("en-US", { timeZone: "America/Denver", hour12: false });
    const pacificTime = currentTime.toLocaleString("en-US", { timeZone: "America/Los_Angeles", hour12: false });

    // Get UTC time in 24-hour format
    const utcTime = currentTime.toISOString().slice(11, 19);

    // Display the times
    document.getElementById("hometime").innerHTML = `
        <h2>UTC: ${utcTime}</h2>
    `;

    document.getElementById("othertimes").innerHTML = `
        <p><strong>Eastern Time (ET): ${easternTime}</strong></p>
        <p>Central Time (CT): ${centralTime}</p>
        <p>Mountain Time (MT): ${mountainTime}</p>
        <p>Pacific Time (PT): ${pacificTime}</p>
    `;
}

// Initial call
updateTime();

// Update base time every 10 minutes
setInterval(updateTime, 10 * 60 * 1000);

// Update display every second using increment
setInterval(() => {
    // Add one second to baseTime
    baseTime.setSeconds(baseTime.getSeconds() + 1);
    displayTimes(baseTime);
}, 1000);
