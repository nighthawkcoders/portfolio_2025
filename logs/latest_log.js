async function fetchLatestLog() {
    try {
        const response = await fetch('branch_update_log.txt');
        const text = await response.text();
        const lines = text.trim().split("\n");

        // Find the last update entry
        let lastUpdateIndex = lines.lastIndexOf(lines.find(line => line.startsWith("--- [")));
        if (lastUpdateIndex === -1) {
            document.getElementById("latest-log").innerText = "No updates found.";
            return;
        }

        // Extract the latest log entry
        let latestLog = [];
        for (let i = lastUpdateIndex; i < lines.length; i++) {
            if (lines[i].startsWith("--- [") && i !== lastUpdateIndex) break; // Stop at the next entry
            latestLog.push(lines[i]);
        }

        document.getElementById("latest-log").innerText = latestLog.join("\n");
    } catch (error) {
        console.error("Error fetching log:", error);
        document.getElementById("latest-log").innerText = "Failed to load log.";
    }
}

// Fetch latest log on page load
fetchLatestLog();