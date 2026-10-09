<div align="center">

# Raia Scrub

**A privacy-first browser tool for inspecting and removing metadata from images and PDF files**

Remove potentially sensitive information from files before sharing them online — locally, in your browser.

<br />

<a href="https://raia-scrub.haiere.workers.dev/">
  <img src="https://img.shields.io/badge/Live_Demo-raia--scrub.haiere.workers.dev-3B82F6?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Open Raia Scrub" />
</a>
<a href="https://buymeacoffee.com/hajirstudio">
  <img src="https://img.shields.io/badge/Support_the_Project-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Support Raia Scrub on Buy Me a Coffee" />
</a>

<br />

<img src="https://img.shields.io/badge/Version-2.0.3-brightgreen?style=flat-square" alt="Version 2.0.3" />
<img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" alt="Status active" />
<img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="MIT License" />

<br />

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/JavaScript-Client_Side-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="Client-side JavaScript" />
<img src="https://img.shields.io/badge/Privacy_First-Local_Processing-8B5CF6?style=flat-square" alt="Privacy-first local processing" />
<img src="https://img.shields.io/badge/Single_File-Architecture-4B0082?style=flat-square" alt="Single-file architecture" />

</div>

---

<div align="center">

### Table of Contents

<table>
<tr>
<td valign="top" width="33%">

**Getting Started**

- [Overview](#overview)
- [What's New in v2.0.3](#whats-new-in-v203)
- [Features](#features)
- [Supported Formats](#supported-formats)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)

</td>
<td valign="top" width="33%">

**Reference**

- [Privacy Model](#privacy-model)
- [Security Considerations](#security-considerations)
- [Limitations](#limitations)
- [Troubleshooting](#troubleshooting)
- [Additional Notes](#additional-notes)

</td>
<td valign="top" width="33%">

**Community**

- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Development Setup](#development-setup)
- [License](#license)
- [Author and Support](#author-and-support)

</td>
</tr>
</table>

</div>

---

## Overview

> **Raia Scrub** is a client-side metadata inspection and removal tool for images and PDF files.

The application provides a privacy report before processing, allowing you to review detected metadata and identify potentially sensitive fields.

It can inspect and clean common metadata such as:

<table>
<tr>
<td width="50%" valign="top">

- GPS coordinates
- Camera make and model
- Capture dates and timestamps
- Author and creator names

</td>
<td width="50%" valign="top">

- Software and application information
- Common document properties
- Embedded creation and modification dates
- Additional file-specific metadata fields

</td>
</tr>
</table>

### The main workflow

| Step | Action |
|:-:|---|
| `1` | Select or drop files into the application |
| `2` | Review detected metadata |
| `3` | Scrub metadata from selected files |
| `4` | Download cleaned files individually or as a ZIP archive |

### Designed for

Journalists · Photographers · Researchers · Designers · Developers · Privacy-conscious users · Anyone sharing images or documents online

> [!IMPORTANT]
> All core file processing is designed to happen **locally in your browser**. Files are not intentionally uploaded to a Raia Scrub backend.

---

## What's New in v2.0.3

<table>
<tr>
<td width="50%" valign="top">

### SEO & metadata

- Improved SEO metadata and structured data
- Added Open Graph and Twitter Card metadata
- Added canonical URL configuration
- Added `WebApplication`, `Organization`, `FAQPage`, and `HowTo` structured data

### Interface

- Refreshed the dark glass-style interface
- Improved typography, spacing, responsiveness, and animations
- Responsive support for mobile, tablet, and desktop screens
- Safe-area support for devices with display notches

</td>
<td width="50%" valign="top">

### Accessibility

- Added skip-link navigation and improved ARIA labels
- Added visible focus styles for keyboard users
- Added `prefers-reduced-motion` support

### Community & structure

- Added a non-intrusive donation button
- Added a matching Buy Me a Coffee button in the footer
- Added content sections for Features, Privacy, How It Works, and FAQ
- Kept the application as a single HTML file with inline CSS and JavaScript
- Updated the project version to `2.0.3`

</td>
</tr>
</table>

---

## Features

<table>
<tr>
<td width="50%" valign="top">

### Processing

- **Local processing** — File processing is performed in the browser
- **Privacy report** — Detected metadata is displayed before scrubbing
- **Sensitive-field highlighting** — Potentially sensitive entries are clearly identified
- **One-click scrubbing** — Clean individual files or the entire queue
- **Before-and-after preview** — Compare original and cleaned image files
- **Bulk processing** — Process multiple files in one session
- **ZIP download** — Download multiple cleaned files as one archive

</td>
<td width="50%" valign="top">

### Formats & interface

- **Image support** — Supports JPG, JPEG, and PNG files
- **PDF support** — Removes common PDF document properties
- **Drag and drop** — Add files through the drop zone
- **Responsive interface** — Works across desktop and mobile layouts
- **Offline-friendly workflow** — Processing can continue after required resources have been cached
- **No account required** — The core application does not require registration
- **Donation support** — Optional Buy Me a Coffee support link for users who want to help maintain the project

</td>
</tr>
</table>

---

## Supported Formats

<table>
<tr>
<td width="33%" valign="top">

### Image formats

- `.jpg`
- `.jpeg`
- `.png`

</td>
<td width="33%" valign="top">

### Document formats

- `.pdf`

</td>
<td width="33%" valign="top">

### Processing limits

- Up to **8 files** in one queue
- Files up to **50 MB** each

</td>
</tr>
</table>

> [!NOTE]
> These limits may be changed in future versions.

---

## Requirements

> Raia Scrub requires:

| Requirement | Details |
|---|---|
| **Browser** | A modern web browser with JavaScript enabled |
| **Permissions** | Permission to read files selected by the user |
| **Memory** | Sufficient memory for the size and number of files being processed |

**Recommended browsers:**

Google Chrome · Mozilla Firefox · Microsoft Edge · Apple Safari · Other modern Chromium- or WebKit-based browsers

> [!NOTE]
> An internet connection may be required during the first page load when JavaScript libraries are loaded from a CDN.

---

## Installation

> Raia Scrub does not require a traditional installation.

### Use the Hosted Version

<div align="center">

**[raia-scrub.haiere.workers.dev](https://raia-scrub.haiere.workers.dev/)**

</div>

### Run the HTML File Locally

Download or clone the project, then open the HTML file in a modern browser.

```bash
git clone https://github.com/haiere/raia-scrub.git
cd raia-scrub
```

Open the main HTML file directly, or use a local development server:

<table>
<tr>
<td width="33%" valign="top">

Python

```bash
python -m http.server 8000
```

</td>
<td width="33%" valign="top">

Node.js

```bash
npx serve .
```

</td>
<td width="33%" valign="top">

PHP

```bash
php -S localhost:8000
```

</td>
</tr>
</table>

Then open:

```text
http://localhost:8000
```

[!NOTE]
If the application uses CDN-hosted libraries, the browser must be able to access those CDN resources during the initial load.

---

Usage

1. Open Raia Scrub
2. Drag files into the drop zone, or click the drop zone to browse for files
3. Select one or more supported files
4. Review the metadata report for each file
5. Identify sensitive metadata fields
6. Click Scrub Now to clean an individual file
7. Click Scrub All to process all files in the queue
8. Review the cleaned file preview when available
9. Click Download Cleaned to save an individual result
10. Use Download All ZIP to download all cleaned files together
11. Click Clear All to remove the current queue

[!IMPORTANT]
The original files are not overwritten by the application. Cleaned results are generated in memory and downloaded separately.

---

Privacy Model

Raia Scrub is designed around client-side processing.

<table>
<tr>
<td width="50%" valign="top">

During normal use

· Files are selected by the user
· Files are read by browser APIs
· Metadata is inspected in the browser
· Cleaning is performed in the browser
· Cleaned files are generated in memory
· Files are not intentionally uploaded to a Raia Scrub backend
· No account is required
· No analytics or advertising system is required for the core workflow

</td>
<td width="50%" valign="top">

External resources

The hosted application may load JavaScript libraries from a CDN during the initial page load. Depending on the deployment configuration, these libraries may include:

· ExifReader
· piexifjs
· pdf-lib
· JSZip

</td>
</tr>
</table>

Fully offline deployment

If you require a fully offline deployment:

1. Download and self-host the required dependencies
2. Update the corresponding script references
3. Serve the project through a local web server
4. Test the application without an internet connection

Cookie preference

The application may store a local preference flag for the cookie notice. This preference is stored by the browser and is not intended to contain file contents or metadata.

---

Security Considerations

Raia Scrub runs inside the browser security sandbox and only accesses files explicitly selected by the user.

<table>
<tr>
<td width="50%" valign="top">

The application does

· Only access files you explicitly select
· Generate cleaned files from browser memory
· Preserve original files (never overwrites)

</td>
<td width="50%" valign="top">

The application does not

· Scan unrelated files on your device
· Require direct file-system access
· Execute uploaded file content as application code
· Require server-side file storage for the core workflow

</td>
</tr>
</table>

[!WARNING]
For highly sensitive files, verify the output independently with a trusted metadata inspection tool before publishing.

---

Limitations

Metadata removal is not an absolute guarantee that every hidden data structure has been removed.

Area Possible limitation
Proprietary fields May not be recognized
XMP / embedded metadata Some structures may remain
PDF metadata May contain data beyond standard document properties
PDF attachments Embedded attachments, scripts, annotations, thumbnails, or unusual objects may require specialized tools
Image re-encoding May affect quality or color profiles
Browser support Varies for some image and PDF structures
Visible content Metadata in visible text or image pixels cannot be removed by a metadata scrubber
File and folder names May still reveal information
Post-download metadata Metadata added after downloading the cleaned file may not be covered

[!WARNING]
For maximum assurance, inspect the downloaded output independently before sharing it.

---

Troubleshooting

<details>
<summary><b>A file is not processed</b></summary>

<br />

Check that:

· The file uses a supported format
· The file is smaller than the configured size limit
· The file is not corrupted
· The file is not encrypted or password-protected
· Your browser has sufficient available memory

</details>

<details>
<summary><b>Metadata still appears</b></summary>

<br />

Some proprietary, embedded, or nested metadata may not be supported by the current cleaning implementation.

Try opening the cleaned file in an independent metadata inspection tool. If sensitive information remains, do not publish the file and report the issue to the project repository.

</details>

<details>
<summary><b>PDF cleaning is incomplete</b></summary>

<br />

PDF metadata can exist in multiple structures. The application handles common document properties, but unusual XMP streams, embedded files, annotations, JavaScript actions, or custom objects may require a dedicated PDF sanitization workflow.

</details>

<details>
<summary><b>The application does not work offline</b></summary>

<br />

The first load may require access to CDN-hosted dependencies.

To support fully offline use:

1. Download the required library files
2. Store them locally with the application
3. Replace CDN URLs with local paths
4. Serve the project through a local web server
5. Test the application without an internet connection

</details>

<details>
<summary><b>The page appears slow</b></summary>

<br />

Large images and multiple PDF files can require significant browser memory.

Try:

· Processing fewer files at once
· Closing unused browser tabs
· Using smaller source files
· Running the application in a modern desktop browser
· Clearing the queue before starting another batch

</details>

<details>
<summary><b>Console errors appear</b></summary>

<br />

Open the browser developer console and check for:

· Failed CDN requests
· Unsupported file structures
· Memory-related errors
· Blocked local-file permissions
· Missing or outdated library references

</details>

---

Roadmap

Potential future improvements include:

<table>
<tr>
<td width="50%" valign="top">

· Support for TIFF files
· Support for HEIC and HEIF files
· Additional image formats
· More complete XMP and embedded-thumbnail removal
· Improved PDF sanitization
· Selective metadata-field removal

</td>
<td width="50%" valign="top">

· Detailed field explanations
· Metadata comparison before and after cleaning
· Improved batch-processing performance
· Internationalization support
· Optional local installation package
· Automated browser and privacy regression tests

</td>
</tr>
</table>

---

Contributing

Contributions are welcome.

You can contribute by

· Reporting bugs
· Improving metadata extraction
· Improving metadata removal
· Adding support for new formats
· Improving accessibility
· Improving browser compatibility
· Improving documentation
· Adding tests
· Reviewing pull requests

Contribution Workflow

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Test the application locally
5. Commit your changes:
   ```bash
   git commit -m "Describe your change"
   ```
6. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
7. Open a pull request

[!IMPORTANT]
Please preserve the privacy-first, client-side nature of the project.

---

Development Setup

Raia Scrub uses a single-file architecture with inline CSS and JavaScript.

Development usually involves

1. Editing the main HTML file
2. Updating inline styles or scripts
3. Testing the application in multiple browsers
4. Testing image and PDF files with different metadata structures
5. Verifying that original files are not modified
6. Testing both online and offline workflows
7. Checking mobile and desktop layouts
8. Reviewing accessibility with keyboard navigation

[!NOTE]
No build step is required unless the project deployment configuration adds one.

Suggested Testing Checklist

<table>
<tr>
<td width="50%" valign="top">

☐ JPG with GPS metadata
☐ JPEG with camera metadata
☐ PNG with text metadata
☐ PDF with author and producer fields
☐ Multiple files in one queue
☐ Maximum file-size behavior

</td>
<td width="50%" valign="top">

☐ Corrupted file behavior
☐ Downloaded output inspection
☐ Keyboard navigation
☐ Screen-reader labels
☐ Reduced-motion preference
☐ Mobile layout
☐ Offline behavior after initial load

</td>
</tr>
</table>

---

License

Raia Scrub is released under the MIT License.

See the LICENSE file for the full license text.

---

Author and Support

<div align="center">

Developed and maintained by Haiere and Hajir Studio

<br />

Channel Purpose
Bug reports & feature requests Please use the project issue tracker
Questions Contact via the repository
Support the project Buy me a coffee

<br />

<a href="https://buymeacoffee.com/hajirstudio">
  <img src="https://img.shields.io/badge/Buy_Me_a_Coffee-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Buy Me a Coffee" />
</a>

<br />
<br />

<sub>Your support keeps Raia Scrub free, ad-free, and privacy-focused. Thank you.</sub>

</div>

---

Additional Notes

· Raia Scrub is free to use
· The project is provided without warranty
· Processing happens locally in the browser during normal use
· The hosted version may load dependencies from a CDN
· Cleaned files should be independently verified before publication
· The donation button is optional and does not interfere with the cleaning workflow
· The application does not intentionally collect file contents, metadata, analytics, or tracking data
· Please avoid including personal data, secrets, API keys, or private endpoints in issues and pull requests

---

<div align="center">

Made with care for safer file sharing.

<br />

<a href="https://raia-scrub.haiere.workers.dev/">
  <img src="https://img.shields.io/badge/Open_Raia_Scrub-3B82F6?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Open Raia Scrub" />
</a>
<a href="https://buymeacoffee.com/hajirstudio">
  <img src="https://img.shields.io/badge/Support_the_Project-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Support the Project" />
</a>

<br />
<br />

<sub>
Last updated: September 2026 · Raia Scrub v2.0.3
</sub>

</div>
