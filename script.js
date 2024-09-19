function updateTime() {
    const currentTime = new Date();

    // Convert to different US time zones
    const easternTime = currentTime.toLocaleString("en-US", { timeZone: "America/New_York", hour12: false });
    const centralTime = currentTime.toLocaleString("en-US", { timeZone: "America/Chicago", hour12: false });
    const mountainTime = currentTime.toLocaleString("en-US", { timeZone: "America/Denver", hour12: false });
    const pacificTime = currentTime.toLocaleString("en-US", { timeZone: "America/Los_Angeles", hour12: false });

    // Get UTC time in 24-hour format
    const utcTime = currentTime.toISOString().slice(11, 19); // ISO format returns UTC time

    // Display the times on the page
    document.getElementById("hometime").innerHTML = `
        <h2>Local: ${currentTime.toLocaleTimeString([], { hour12: false })}</h2>
        <p><strong>UTC: ${utcTime}</strong></p> 
    `;
        
    document.getElementById("othertimes").innerHTML = `
        <p>Central Time (CT): ${centralTime}</p>
        <p>Mountain Time (MT): ${mountainTime}</p>
        <p>Pacific Time (PT): ${pacificTime}</p>
    `;
}

// Update time every second
updateTime();
setInterval(updateTime, 1000);
