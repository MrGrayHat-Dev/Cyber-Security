document.getElementById("scanForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const url = document.getElementById("url").value;
  document.getElementById("scanResults").innerHTML = "<p>Scanning for SQL Injection...</p>";

  try {
    const response = await fetch("http://localhost:3000/scan/sql-injection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ targetURL: url }),
    });

    const data = await response.json();
    document.getElementById("scanResults").innerHTML = `<p>${data.message} (Risk Level: ${data.risk})</p>`;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("scanResults").innerHTML = `<p style="color: red;">Scan failed. Try again.</p>`;
  }
});
