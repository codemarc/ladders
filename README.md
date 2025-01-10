# Job Applications Report Generator

A Node.js application that generates PDF reports from The Ladders job application data.

## Features

- Generates formatted PDF report with:
  - Application summary
  - Color-coded status indicators
  - Clickable job URLs
  - Automatic page breaks

## Prerequisites

- Node.js 14.x or higher
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
bash
git clone <repository-url>
cd job-applications-report
```

2. Install dependencies:
```bash
npm install
```


## Configuration

The application requires the following dependencies:
- pdfkit: PDF generation
- fs: File system operations

These will be automatically installed when running `npm install`.

## Usage

1. Run the report generator:

```bash
node ./createReport.js 
```

## PDF Report Format

The PDF report includes:
- Title header
- Total applications count
- For each application:
  - Job title
  - Company name
  - Application status (color-coded)
  - Application date
  - Job URL (clickable)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## What Else?

- [ ] Add a docx report
- [ ] Add a markdown report
- [ ] Auto login to the ladders and get the data

