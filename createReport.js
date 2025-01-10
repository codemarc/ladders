//https://www.theladders.com/api/apply/v3/applications?applicationTypes=APPLY4ME%2CAPPLY4ME_EXTERNAL_URL&sortBy=STATUS&sortDirection=DESC&offset=0&limit=200
const fs = require("node:fs");
const generateApplicationsPDF = require("./generatePDF");

// Read the JSON data
const jsonData = JSON.parse(fs.readFileSync("./appdata.json", "utf8"));

// Generate the PDF
generateApplicationsPDF(jsonData, "./applications-report.pdf");

console.log("PDF report generated successfully!");
