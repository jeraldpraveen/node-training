const fs = require("fs");

fs.writeFileSync("notes.txt", "Created By Jerald Via NodeJS");
fs.appendFileSync("notes.txt", " Appended Extra Context into the File");
