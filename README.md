# Raia Scrub

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#license)
[![Version](https://img.shields.io/badge/version-2.0.2-brightgreen.svg)](#)
[![Status](https://img.shields.io/badge/status-active-success.svg)](#)
[![Website](https://img.shields.io/badge/website-raia--scrub.haiere.workers.dev-3B82F6.svg)](https://raia-scrub.haiere.workers.dev/)

A browser-based metadata scrubber that removes sensitive EXIF, GPS, camera details, and document metadata from JPG, PNG, and PDF files.

Raia Scrub is a privacy-first tool that runs entirely in your web browser. It reads file metadata, displays a privacy report, and strips out sensitive information such as GPS coordinates, device model, timestamps, author names, and software details. No file is ever uploaded to a server — everything stays on your machine.

The application is built for anyone who wants to share photos or PDFs without exposing personal or location data. It is especially useful for journalists, photographers, researchers, and privacy-conscious individuals.

---

## Features

- Local processing — all operations are performed in the browser; no external servers are involved.
- Support for multiple formats — JPG, JPEG, PNG, and PDF are supported.
- Privacy report — each file is scanned and a list of detected metadata items is displayed, with clear indication of sensitive versus non-sensitive entries.
- One-click scrubbing — remove metadata from individual files or from all files in the queue.
- Before/after preview — for image files, a side-by-side preview shows the original and the cleaned version.
- Bulk download — scrubbed files can be downloaded individually or as a ZIP archive.
- No installation required — runs in any modern browser, with no dependencies to install.

---

## Requirements

- A modern web browser with JavaScript enabled, such as Chrome, Firefox, Edge, Safari, or similar.
- Internet connection is required only to load the page and its dependencies from CDN, including ExifReader, piexifjs, pdf-lib, and JSZip. After the first load, the application can be cached for offline use.
- The application is a single HTML file; no additional runtime or server is needed.

---

## Installation

Raia Scrub is a client-side application and does not require traditional installation. To use it:

1. Open the hosted URL in your browser.
2. Alternatively, download the `index.html` file and open it locally.

If you wish to serve it from your own web server, place the HTML file on your server and ensure the CDN resources are accessible, or download them and adjust the script tags accordingly.

---

## Usage

1. Load the page — the interface displays a drop zone.
2. Add files — drag and drop files onto the drop zone, or click it to open a file browser. You can select up to 8 files, each up to 50 MB.
3. Review metadata — after upload, each file shows a privacy report with detected metadata fields. Sensitive entries are highlighted.
4. Scrub — click “Scrub Now” on an individual file, or use the “Scrub All” button to process all files. During scrubbing, a progress bar is shown.
5. Download — once scrubbing is complete, a “Download Cleaned” button appears for each file. You can also use the “Download All ZIP” button to download all cleaned files in a single archive.
6. Clear — use the “Clear All” button to remove all files and start over.

---

## Privacy Considerations

Raia Scrub processes all files locally. No data is transmitted over the network. The only external resources loaded are JavaScript libraries from CDN; these are fetched once and cached. The application does not set tracking cookies, nor does it collect or store any user information.

The tool respects your privacy by design: you can disconnect from the internet after the page loads and all functionality remains available.

---

## Security Considerations

The application runs entirely in the browser sandbox. It does not access the file system beyond reading files that you explicitly select. There is no code execution on the server, and no persistent storage of your files.

When downloading scrubbed files, they are generated and served directly from memory. The original files are never saved to disk by the application.

---

## Troubleshooting

### File not processed

Ensure the file format is supported and does not exceed 50 MB. If the file is corrupted or encrypted, it may fail to parse.

### Metadata not removed

For some edge cases, such as deeply embedded EXIF or XMP data, scrubbing may not be perfect. The tool uses standard libraries to remove common metadata, but some proprietary fields might remain.

### PDF scrubbing

The tool uses `pdf-lib` to clear standard document properties. It does not remove all embedded metadata, such as XMP streams, in every case, but it covers the most common fields.

### Performance

Scrubbing large images may take a few seconds. The interface remains responsive during processing.

### Console errors

If scrubbing fails, check the browser console for error messages. Common issues include unsupported file structures or missing libraries.

---

## Roadmap

Future improvements may include:

- Support for additional file formats, such as TIFF and HEIC.
- More thorough removal of embedded thumbnails and XMP data.
- Option to manually select which metadata fields to remove.
- Enhanced reporting with detailed field descriptions.

---

## Contributing

Contributions are welcome. If you would like to improve the tool, please fork the repository and submit a pull request. Areas of interest include:

- Improving metadata extraction and removal for edge cases.
- Adding support for new file formats.
- Enhancing the user interface and accessibility.
- Fixing bugs and performance issues.

Before contributing, please ensure that your changes maintain the privacy-first, client-side nature of the application.

---

## Development Setup

Since the application is a single HTML file with inline CSS and JavaScript, development is straightforward:

1. Edit the `index.html` file directly.
2. Test locally by opening the file in a browser.
3. For dependency updates, modify the CDN URLs in the `<script>` tags.

No build tools or compilation steps are required.

---

## License

This tool is provided as open source under the MIT license. See the `LICENSE` file for details.

---

## Author and Support

Raia Scrub is developed and maintained by Haiere & Hajir Studio. For questions, feedback, or support, please use the issue tracker or contact via the project repository.

---

## Additional Notes

- The tool is designed to work offline after the initial load.
- All data processing is performed client-side; no analytics or logging is performed.
- The application is free to use and distributed without warranty.

---

Last updated: 2026