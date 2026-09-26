# Raia Scrub

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#license)
[![Version](https://img.shields.io/badge/version-2.0.3-brightgreen.svg)](#version-history)
[![Status](https://img.shields.io/badge/status-active-success.svg)](#)
[![Website](https://img.shields.io/badge/website-raia--scrub.haiere.workers.dev-3B82F6.svg)](https://raia-scrub.haiere.workers.dev/)
[![Donate](https://img.shields.io/badge/Donate-Buy%20Me%20a%20Coffee-FFDD00?logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/hajirstudio)

> A privacy-first browser tool for inspecting and removing metadata from images and PDF files.

Raia Scrub helps you remove potentially sensitive information from files before sharing them online.

It can inspect and clean common metadata such as:

- GPS coordinates.
- Camera make and model.
- Capture dates and timestamps.
- Author and creator names.
- Software and application information.
- Common document properties.

All core file processing is designed to happen locally in your browser. Files are not intentionally uploaded to a Raia Scrub backend.

<p align="center">
  <a href="https://raia-scrub.haiere.workers.dev/">
    <img src="https://img.shields.io/badge/Open%20Raia%20Scrub-Live%20App-3B82F6?style=for-the-badge" alt="Open Raia Scrub" />
  </a>
  <a href="https://buymeacoffee.com/hajirstudio">
    <img src="https://img.shields.io/badge/Support%20Development-Buy%20Me%20a%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Support Raia Scrub on Buy Me a Coffee" />
  </a>
</p>

---

## Table of Contents

- [Overview](#overview)
- [What's New in v2.0.3](#whats-new-in-v203)
- [Features](#features)
- [Supported Formats](#supported-formats)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Privacy Model](#privacy-model)
- [Security Considerations](#security-considerations)
- [Limitations](#limitations)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Development Setup](#development-setup)
- [License](#license)
- [Author and Support](#author-and-support)

---

## Overview

Raia Scrub is a client-side metadata inspection and removal tool for images and PDF files.

The application provides a privacy report before processing, allowing you to review detected metadata and identify potentially sensitive fields.

The main workflow is:

1. Select or drop files into the application.
2. Review detected metadata.
3. Scrub metadata from selected files.
4. Download cleaned files individually or as a ZIP archive.

Raia Scrub is useful for:

- Journalists.
- Photographers.
- Researchers.
- Designers.
- Developers.
- Privacy-conscious users.
- Anyone sharing images or documents online.

---

## What's New in v2.0.3

- Improved SEO metadata and structured data.
- Added Open Graph and Twitter Card metadata.
- Added canonical URL configuration.
- Added `WebApplication`, `Organization`, `FAQPage`, and `HowTo` structured data.
- Refreshed the dark glass-style interface.
- Improved typography, spacing, responsiveness, and animations.
- Added responsive support for mobile, tablet, and desktop screens.
- Added safe-area support for devices with display notches.
- Added skip-link navigation and improved ARIA labels.
- Added visible focus styles for keyboard users.
- Added `prefers-reduced-motion` support.
- Added a non-intrusive donation button.
- Added a matching Buy Me a Coffee button in the footer.
- Added content sections for Features, Privacy, How It Works, and FAQ.
- Kept the application as a single HTML file with inline CSS and JavaScript.
- Updated the project version to `2.0.3`.

---

## Features

- **Local processing** — File processing is performed in the browser.
- **Privacy report** — Detected metadata is displayed before scrubbing.
- **Sensitive-field highlighting** — Potentially sensitive entries are clearly identified.
- **Image support** — Supports JPG, JPEG, and PNG files.
- **PDF support** — Removes common PDF document properties.
- **One-click scrubbing** — Clean individual files or the entire queue.
- **Before-and-after preview** — Compare original and cleaned image files.
- **Bulk processing** — Process multiple files in one session.
- **ZIP download** — Download multiple cleaned files as one archive.
- **Drag and drop** — Add files through the drop zone.
- **No account required** — The core application does not require registration.
- **Responsive interface** — Works across desktop and mobile layouts.
- **Offline-friendly workflow** — Processing can continue after required resources have been cached.
- **Donation support** — Optional Buy Me a Coffee support link for users who want to help maintain the project.

---

## Supported Formats

### Image Formats

- `.jpg`
- `.jpeg`
- `.png`

### Document Formats

- `.pdf`

### Processing Limits

The current interface supports:

- Up to 8 files in one queue.
- Files up to 50 MB each.

These limits may be changed in future versions.

---

## Requirements

Raia Scrub requires:

- A modern web browser.
- JavaScript enabled.
- Permission to read files selected by the user.
- Sufficient memory for the size and number of files being processed.

Recommended browsers include:

- Google Chrome.
- Mozilla Firefox.
- Microsoft Edge.
- Apple Safari.
- Other modern Chromium- or WebKit-based browsers.

An internet connection may be required during the first page load when JavaScript libraries are loaded from a CDN.

---

## Installation

Raia Scrub does not require a traditional installation.

### Use the Hosted Version

Open the application:

```text
[https://raia-scrub.haiere.workers.dev/](https://raia-scrub.haiere.workers.dev/)
```

### Run the HTML File Locally

Download or clone the project, then open the HTML file in a modern browser.

```bash
git clone [https://github.com/haiere/raia-scrub.git](https://github.com/haiere/raia-scrub.git)
cd raia-scrub
```

Open the main HTML file directly, or use a local development server.

### Python

```bash
python -m http.server 8000
```

### Node.js

```bash
npx serve .
```

### PHP

```bash
php -S localhost:8000
```

Then open:

```text
http://localhost:8000
```

If the application uses CDN-hosted libraries, the browser must be able to access those CDN resources during the initial load.

---

## Usage

1. Open Raia Scrub.
2. Drag files into the drop zone, or click the drop zone to browse for files.
3. Select one or more supported files.
4. Review the metadata report for each file.
5. Identify sensitive metadata fields.
6. Click `Scrub Now` to clean an individual file.
7. Click `Scrub All` to process all files in the queue.
8. Review the cleaned file preview when available.
9. Click `Download Cleaned` to save an individual result.
10. Use `Download All ZIP` to download all cleaned files together.
11. Click `Clear All` to remove the current queue.

The original files are not overwritten by the application. Cleaned results are generated in memory and downloaded separately.

---

## Privacy Model

Raia Scrub is designed around client-side processing.

During normal use:

- Files are selected by the user.
- Files are read by browser APIs.
- Metadata is inspected in the browser.
- Cleaning is performed in the browser.
- Cleaned files are generated in memory.
- Files are not intentionally uploaded to a Raia Scrub backend.
- No account is required.
- No analytics or advertising system is required for the core workflow.

### External Resources

The hosted application may load JavaScript libraries from a CDN during the initial page load.

Depending on the deployment configuration, these libraries may include:

- ExifReader.
- piexifjs.
- pdf-lib.
- JSZip.

If you require a fully offline deployment, download and self-host the required dependencies, then update the corresponding script references.

### Cookie Preference

The application may store a local preference flag for the cookie notice.

This preference is stored by the browser and is not intended to contain file contents or metadata.

---

## Security Considerations

Raia Scrub runs inside the browser security sandbox and only accesses files explicitly selected by the user.

The application:

- Does not scan unrelated files on your device.
- Does not require direct file-system access.
- Does not overwrite the original file.
- Does not execute uploaded file content as application code.
- Generates cleaned files from browser memory.
- Does not require server-side file storage for the core workflow.

For highly sensitive files, verify the output independently with a trusted metadata inspection tool before publishing.

---

## Limitations

Metadata removal is not an absolute guarantee that every hidden data structure has been removed.

Possible limitations include:

- Proprietary metadata fields may not be recognized.
- Some XMP or embedded metadata structures may remain.
- PDF files may contain metadata beyond standard document properties.
- Embedded attachments, scripts, annotations, thumbnails, or unusual PDF objects may require specialized tools.
- Re-encoding an image may affect quality or color profiles.
- Browser support for some image and PDF structures may vary.
- Metadata contained in visible text or image pixels cannot be removed by a metadata scrubber.
- File names and folder names may still reveal information.
- Metadata added after downloading the cleaned file may not be covered by the original cleaning process.

For maximum assurance, inspect the downloaded output independently before sharing it.

---

## Troubleshooting

### A file is not processed

Check that:

- The file uses a supported format.
- The file is smaller than the configured size limit.
- The file is not corrupted.
- The file is not encrypted or password-protected.
- Your browser has sufficient available memory.

### Metadata still appears

Some proprietary, embedded, or nested metadata may not be supported by the current cleaning implementation.

Try opening the cleaned file in an independent metadata inspection tool. If sensitive information remains, do not publish the file and report the issue to the project repository.

### PDF cleaning is incomplete

PDF metadata can exist in multiple structures. The application handles common document properties, but unusual XMP streams, embedded files, annotations, JavaScript actions, or custom objects may require a dedicated PDF sanitization workflow.

### The application does not work offline

The first load may require access to CDN-hosted dependencies.

To support fully offline use:

1. Download the required library files.
2. Store them locally with the application.
3. Replace CDN URLs with local paths.
4. Serve the project through a local web server.
5. Test the application without an internet connection.

### The page appears slow

Large images and multiple PDF files can require significant browser memory.

Try:

- Processing fewer files at once.
- Closing unused browser tabs.
- Using smaller source files.
- Running the application in a modern desktop browser.
- Clearing the queue before starting another batch.

### Console errors appear

Open the browser developer console and check for:

- Failed CDN requests.
- Unsupported file structures.
- Memory-related errors.
- Blocked local-file permissions.
- Missing or outdated library references.

---

## Roadmap

Potential future improvements include:

- Support for TIFF files.
- Support for HEIC and HEIF files.
- Additional image formats.
- More complete XMP and embedded-thumbnail removal.
- Improved PDF sanitization.
- Selective metadata-field removal.
- Detailed field explanations.
- Metadata comparison before and after cleaning.
- Improved batch-processing performance.
- Internationalization support.
- Optional local installation package.
- Automated browser and privacy regression tests.

---

## Contributing

Contributions are welcome.

You can contribute by:

- Reporting bugs.
- Improving metadata extraction.
- Improving metadata removal.
- Adding support for new formats.
- Improving accessibility.
- Improving browser compatibility.
- Improving documentation.
- Adding tests.
- Reviewing pull requests.

### Contribution Workflow

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes.
4. Test the application locally.
5. Commit your changes:

   ```bash
   git commit -m "Describe your change"
   ```

6. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

7. Open a pull request.

Please preserve the privacy-first, client-side nature of the project.

---

## Development Setup

Raia Scrub uses a single-file architecture with inline CSS and JavaScript.

Development usually involves:

1. Editing the main HTML file.
2. Updating inline styles or scripts.
3. Testing the application in multiple browsers.
4. Testing image and PDF files with different metadata structures.
5. Verifying that original files are not modified.
6. Testing both online and offline workflows.
7. Checking mobile and desktop layouts.
8. Reviewing accessibility with keyboard navigation.

No build step is required unless the project deployment configuration adds one.

### Suggested Testing Checklist

- JPG with GPS metadata.
- JPEG with camera metadata.
- PNG with text metadata.
- PDF with author and producer fields.
- Multiple files in one queue.
- Maximum file-size behavior.
- Corrupted file behavior.
- Downloaded output inspection.
- Keyboard navigation.
- Screen-reader labels.
- Reduced-motion preference.
- Mobile layout.
- Offline behavior after initial load.

---

## License

Raia Scrub is released under the MIT License.

See the [LICENSE](LICENSE) file for the full license text.

---

## Author and Support

Raia Scrub is developed and maintained by **Haiere** and **Hajir Studio**.

For questions, bug reports, and feature requests, use the issue tracker in the project repository.

If Raia Scrub is useful to you, consider supporting continued development:

<p align="center">
  <a href="https://buymeacoffee.com/hajirstudio">
    <img
      src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support%20Development-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"
      alt="Buy Me a Coffee"
    />
  </a>
</p>

<p align="center">
  <a href="https://buymeacoffee.com/hajirstudio">
    Support Raia Scrub on Buy Me a Coffee
  </a>
</p>

---

## Additional Notes

- Raia Scrub is free to use.
- The project is provided without warranty.
- Processing happens locally in the browser during normal use.
- The hosted version may load dependencies from a CDN.
- Cleaned files should be independently verified before publication.
- The donation button is optional and does not interfere with the cleaning workflow.
- The application does not intentionally collect file contents, metadata, analytics, or tracking data.
- Please avoid including personal data, secrets, API keys, or private endpoints in issues and pull requests.

---

<p align="center">
  Made with care for safer file sharing.
</p>

<p align="center">
  <sub>Last updated: September 2026 · Raia Scrub v2.0.3</sub>
</p>