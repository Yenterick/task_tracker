const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306
});

function handleConnection() {
  db.connect((err) => {
    if (err) {
      console.error("Database connection failed:", err.code, "- Retrying in 5 seconds...");
      setTimeout(handleConnection, 5000);
      
    } else {
      console.log("Connected to MySQL database");
    }
  });

  db.on("error", (err) => {
    console.error("MySQL error:", err);
    
    if (err.code === "PROTOCOL_CONNECTION_LOST" || err.code === "ECONNREFUSED" || err.code === "EAI_AGAIN") {
      console.log("MySQL connection error detected, attempting to reconnect...");
      handleConnection();
    } else {
      console.error("Fatal MySQL error detected (will not throw to prevent container crash):", err);
    }
  });
}

handleConnection();

module.exports = db;