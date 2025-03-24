const express = require("express");
const { testSQLInjection } = require("./utils/scanner");

const app = express();
const PORT = 3000;

app.use(express.json());

// API to scan for SQL Injection
app.post("/scan/sql-injection", async (req, res) => {
  const { targetURL } = req.body;

  if (!targetURL.startsWith("http")) {
    return res.status(400).json({ error: "Invalid URL format. Include http:// or https://" });
  }

  const result = await testSQLInjection(targetURL);
  res.json(result);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
