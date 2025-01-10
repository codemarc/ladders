const PDFDocument = require("pdfkit");
const fs = require("node:fs");

function generateApplicationsPDF(data, outputPath) {
	// Create a new PDF document
	const doc = new PDFDocument({
		margins: {
			top: 50,
			bottom: 50,
			left: 50,
			right: 50,
		},
	});

	// Pipe output to file
	doc.pipe(fs.createWriteStream(outputPath));

	// Add title
	doc.fontSize(24).font("Helvetica-Bold").text("Job Applications Report", {
		align: "center",
	});

	doc.moveDown(2);

	// Add summary
	doc
		.fontSize(14)
		.font("Helvetica")
		.text(`Total Applications: ${data.meta.count}`, {
			align: "left",
		});

	doc.moveDown(1);

	// Process each application
	data.data.forEach((app, index) => {
		// Add page break if needed
		if (index > 0 && doc.y > 700) {
			doc.addPage();
		}

		// Job title
		doc.fontSize(12).font("Helvetica-Bold").text(app.jobTitle);

		// Company name
		doc.fontSize(10).font("Helvetica").text(app.companyName);

		// Application status
		const latestStatus =
			app.applicationStatusList[app.applicationStatusList.length - 1];
		doc
			.fontSize(10)
			.font("Helvetica")
			.text(`Status: ${latestStatus.statusName}`, {
				color: getStatusColor(latestStatus.statusName),
			});

		// Application date
		const date = new Date(latestStatus.timestamp).toLocaleDateString();
		doc.text(`Date: ${date}`);

		// Add job URL if exists
		if (app.jobUrl) {
			doc.fontSize(9).text("View Job", {
				link: app.jobUrl,
				underline: true,
			});
		}

		doc.moveDown(1);
	});

	// Finalize the PDF
	doc.end();
}

function getStatusColor(status) {
	const colors = {
		applied: "#008000", // Green
		pending: "#FFA500", // Orange
		closed: "#FF0000", // Red
	};
	return colors[status] || "#000000";
}

// Export the function
module.exports = generateApplicationsPDF;
