require("dotenv").config();
const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Co-scholar 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const db = require("./config/db");

db.execute("SELECT 1")
  .then(() => console.log("✅ Database connected"))
  .catch(err => console.error("❌ DB connection failed:", err.message));
