function getDeviceInfo() {
    const userAgent = navigator.userAgent;
    let deviceName = "Unknown Device";
    let operatingSystem = "Unknown OS";
    let browserName = "Unknown Browser";

    // Identify Operating System
    if (userAgent.includes("Windows")) {
        operatingSystem = "Windows";
    } else if (userAgent.includes("Macintosh")) {
        operatingSystem = "Mac OS";
    } else if (userAgent.includes("Linux")) {
        operatingSystem = "Linux";
    } else if (userAgent.includes("iPhone")) {
        operatingSystem = "iOS";
        deviceName = "iPhone";
    } else if (userAgent.includes("iPad")) {
        operatingSystem = "iOS";
        deviceName = "iPad";
    } else if (userAgent.includes("Android")) {
        operatingSystem = "Android";
        deviceName = "Android Device";
    }

    // Identify Browser
    if (userAgent.includes("Chrome")) {
        browserName = "Chrome";
    } else if (userAgent.includes("Firefox")) {
        browserName = "Firefox";
    } else if (userAgent.includes("Safari")) {
        browserName = "Safari";
    } else if (userAgent.includes("Edge")) {
        browserName = "Edge";
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        browserName = "Opera";
    }

    // Create output
    document.getElementById("device-info").innerHTML = 
        `You are using a <strong>${deviceName}</strong> running on <strong>${operatingSystem}</strong>. Your current browser is <strong>${browserName}</strong>.`;
}

getDeviceInfo();
