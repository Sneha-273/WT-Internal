const fs = require('fs');

// Try reading a file
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("❌ Error: File not found or cannot be read.");
    console.log("🔍 Details:", err.message);
  } else {
    console.log("✅ File content successfully read:");
    console.log(data);
  }
});
