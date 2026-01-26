require("dotenv").config();
const express = require("express");
const db = require("./config/db"); // ✅ ONLY ONCE

const app = express();

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Co-scholar2.1 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// safe DB init (DO NOT redeclare db)
(async () => {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ DB ready");
  } catch (err) {
    console.error("❌ DB init failed:", err.message);
  }
})();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
