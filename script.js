    var SVG_ICONS = {
        gps: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
        device: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
        clock: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
        software: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
        user: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
        copyright: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path></svg>',
        aperture: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>',
        hash: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>',
        image: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
        fileText: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
        key: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>',
        factory: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg>',
        calendar: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
        edit: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',
        check: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
        success: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
        error: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
        warn: '<svg class="icon-svg icon-svg--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'
    };

    /* ---------- COOKIE CONSENT ---------- */
    (function () {
        var banner = document.getElementById('cookieBanner');

        function showBanner() {
            banner.style.display = 'flex';
            document.body.classList.add('cookie-open');
        }

        function hideBanner() {
            banner.style.display = 'none';
            document.body.classList.remove('cookie-open');
        }

        var hasConsent = null;
        try { hasConsent = localStorage.getItem('raia-cookie-consent'); } catch (e) { hasConsent = null; }

        if (hasConsent === null) showBanner(); else hideBanner();

        window.acceptCookies = function () {
            try { localStorage.setItem('raia-cookie-consent', 'accepted'); } catch (e) {}
            hideBanner();
            toast('Preferences saved.', 'success');
        };

        window.denyCookies = function () {
            try { localStorage.setItem('raia-cookie-consent', 'denied'); } catch (e) {}
            hideBanner();
            toast('No cookies set.', 'success');
        };
    })();

    /* ---------- HEADER SCROLL ---------- */
    (function () {
        var header = document.getElementById('siteHeader');
        var ticking = false;

        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    header.classList.toggle('scrolled', window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        if (window.scrollY > 20) header.classList.add('scrolled');
    })();

    /* ---------- MOBILE NAV ---------- */
    (function () {
        var hamburger = document.getElementById('hamburgerBtn');
        var overlay = document.getElementById('navOverlay');
        var mobileNav = document.getElementById('navMobile');
        var links = mobileNav.querySelectorAll('.nav-mobile-link, .nav-mobile-cta');

        function toggleMenu(open) {
            var isOpen = typeof open === 'boolean' ? open : !hamburger.classList.contains('open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', String(isOpen));
            overlay.classList.toggle('open', isOpen);
            mobileNav.classList.toggle('open', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }

        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMenu();
        });

        overlay.addEventListener('click', function () { toggleMenu(false); });

        Array.prototype.forEach.call(links, function (link) {
            link.addEventListener('click', function () { toggleMenu(false); });
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
                toggleMenu(false);
                hamburger.focus();
            }
        });
    })();

    /* ---------- SCROLL REVEAL ---------- */
    (function () {
        var items = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            Array.prototype.forEach.call(items, function (el) { el.classList.add('in-view'); });
            return;
        }
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        Array.prototype.forEach.call(items, function (el) { observer.observe(el); });
    })();

    /* ---------- CORE APP ---------- */
    var files = [];
    var cleanedBlobs = [];
    var dropZone = document.getElementById('dropZone');
    var fileInput = document.getElementById('fileInput');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (evt) {
        document.addEventListener(evt, function (e) { e.preventDefault(); });
    });

    dropZone.addEventListener('dragenter', function () { dropZone.classList.add('drag-over'); });

    dropZone.addEventListener('dragleave', function (e) {
        if (!dropZone.contains(e.relatedTarget)) dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('dragover', function (e) {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('drop', function (e) {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        handleFiles([].slice.call(e.dataTransfer.files));
    });

    dropZone.addEventListener('click', function () { fileInput.click(); });

    dropZone.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fileInput.click();
        }
    });

    fileInput.addEventListener('change', function () {
        handleFiles([].slice.call(fileInput.files));
    });

    function handleFiles(incoming) {
        var ALLOWED = ['image/jpeg', 'image/png', 'application/pdf'];
        var MAX_FILES = 8;
        var MAX_SIZE = 50 * 1024 * 1024;

        if (files.length + incoming.length > MAX_FILES) {
            toast('Max ' + MAX_FILES + ' files at once.', 'warn');
            incoming = incoming.slice(0, MAX_FILES - files.length);
        }

        incoming.forEach(function (file) {
            if (ALLOWED.indexOf(file.type) === -1) {
                toast('Unsupported format: ' + file.name, 'error');
                return;
            }
            if (file.size > MAX_SIZE) {
                toast('File too large (>50 MB): ' + file.name, 'warn');
                return;
            }
            var idx = files.length;
            files.push({ file: file, metadata: null, cleanedBlob: null, scrubbed: false, originalSrc: null });
            cleanedBlobs[idx] = null;
            renderCard(idx);
            readAndAnalyze(idx);
        });

        updateUI();
        fileInput.value = '';
    }

    function readAndAnalyze(idx) {
        var entry = files[idx];
        var file = entry.file;

        setCardStatus(idx, 'processing', 'Reading…');
        showProgress(idx, true, 'Analyzing metadata…', 20);

        file.arrayBuffer().then(function (buffer) {
            if (file.type === 'application/pdf') return analyzePDF(idx, buffer);
            return analyzeImage(idx, buffer);
        }).catch(function (err) {
            console.warn('Metadata read error:', err);
            files[idx].metadata = [];
        }).then(function () {
            showProgress(idx, true, 'Analysis complete', 100);
            setTimeout(function () { showProgress(idx, false); }, 600);
            renderReport(idx);
        });
    }

    function analyzeImage(idx, buffer) {
        var meta = [];
        try {
            var tags = ExifReader.load(buffer, { expanded: true });

            var get = function (group, key) {
                try {
                    var val = tags[group] && tags[group][key];
                    return val ? (val.description || val.value || null) : null;
                } catch (_) { return null; }
            };

            if (tags.gps) {
                var lat = tags.gps.Latitude;
                var lon = tags.gps.Longitude;
                if (lat !== undefined && lon !== undefined) {
                    var area = '';
                    if (lat > -8 && lat < -5 && lon > 106 && lon < 107.5) area = ' (Jakarta area)';
                    else if (lat > -7.5 && lat < -6.8 && lon > 110 && lon < 111) area = ' (Semarang area)';
                    else if (lat > -8 && lat < -7 && lon > 112 && lon < 113) area = ' (Surabaya area)';
                    meta.push({
                        key: 'GPS Location',
                        value: lat.toFixed(5) + ', ' + lon.toFixed(5) + area,
                        sensitive: true,
                        icon: SVG_ICONS.gps
                    });
                }
            }

            var make = get('exif', 'Make') || get('Exif', 'Make');
            var model = get('exif', 'Model') || get('Exif', 'Model');
            if (make || model) {
                meta.push({
                    key: 'Device',
                    value: [make, model].filter(Boolean).join(' '),
                    sensitive: true,
                    icon: SVG_ICONS.device
                });
            }

            var dt = get('exif', 'DateTimeOriginal') || get('Exif', 'DateTimeOriginal') ||
                     get('exif', 'DateTime') || get('Exif', 'DateTime');
            if (dt) meta.push({ key: 'Capture Time', value: dt, sensitive: false, icon: SVG_ICONS.clock });

            var sw = get('exif', 'Software') || get('Exif', 'Software');
            if (sw) meta.push({ key: 'Software', value: sw, sensitive: false, icon: SVG_ICONS.software });

            var artist = get('exif', 'Artist') || get('Exif', 'Artist');
            if (artist) meta.push({ key: 'Photographer / Artist', value: artist, sensitive: true, icon: SVG_ICONS.user });

            var copy = get('exif', 'Copyright') || get('Exif', 'Copyright');
            if (copy) meta.push({ key: 'Copyright', value: copy, sensitive: false, icon: SVG_ICONS.copyright });

            var focal = get('exif', 'FocalLength') || get('Exif', 'FocalLength');
            if (focal) meta.push({ key: 'Focal Length', value: focal, sensitive: false, icon: SVG_ICONS.aperture });

            var serial = get('exif', 'BodySerialNumber') || get('Exif', 'BodySerialNumber') ||
                         get('exif', 'CameraSerialNumber') || get('Exif', 'CameraSerialNumber');
            if (serial) meta.push({ key: 'Camera Serial Number', value: serial, sensitive: true, icon: SVG_ICONS.hash });

            if (tags.Thumbnail || tags.thumbnail) {
                meta.push({ key: 'Hidden Thumbnail', value: 'EXIF thumbnail inside file', sensitive: true, icon: SVG_ICONS.image });
            }
        } catch (e) {
            console.info('No EXIF data or parse error:', e.message);
        }
        files[idx].metadata = meta;
    }

    function analyzePDF(idx, buffer) {
        var meta = [];
        try {
            var pdfDoc = PDFLib.PDFDocument.load(buffer, { ignoreEncryption: true });

            var fields = [
                { key: 'Title', icon: SVG_ICONS.fileText, sensitive: false, fn: function () { return pdfDoc.getTitle(); } },
                { key: 'Author', icon: SVG_ICONS.user, sensitive: true, fn: function () { return pdfDoc.getAuthor(); } },
                { key: 'Subject', icon: SVG_ICONS.fileText, sensitive: false, fn: function () { return pdfDoc.getSubject(); } },
                { key: 'Keywords', icon: SVG_ICONS.key, sensitive: false, fn: function () { return pdfDoc.getKeywords(); } },
                { key: 'Creator', icon: SVG_ICONS.software, sensitive: true, fn: function () { return pdfDoc.getCreator(); } },
                { key: 'Producer', icon: SVG_ICONS.factory, sensitive: false, fn: function () { return pdfDoc.getProducer(); } },
                {
                    key: 'Creation Date', icon: SVG_ICONS.calendar, sensitive: false,
                    fn: function () { var d = pdfDoc.getCreationDate(); return d ? (d.toISOString ? d.toISOString() : d) : null; }
                },
                {
                    key: 'Modification Date', icon: SVG_ICONS.edit, sensitive: false,
                    fn: function () { var d = pdfDoc.getModificationDate(); return d ? (d.toISOString ? d.toISOString() : d) : null; }
                }
            ];

            fields.forEach(function (f) {
                try {
                    var val = f.fn();
                    if (val) meta.push({ key: f.key, value: String(val), sensitive: f.sensitive, icon: f.icon });
                } catch (_) {}
            });
        } catch (e) {
            console.warn('PDF parse error:', e.message);
        }
        files[idx].metadata = meta;
    }

    function renderCard(idx) {
        var file = files[idx].file;
        var grid = document.getElementById('filesGrid');
        var isImage = file.type.indexOf('image/') === 0;
        var thumbIcon = file.type === 'application/pdf' ? SVG_ICONS.fileText : SVG_ICONS.image;
        var sizeStr = formatSize(file.size);

        var card = document.createElement('div');
        card.className = 'file-card';
        card.id = 'card-' + idx;
        card.setAttribute('role', 'listitem');

        card.innerHTML =
            '<div class="card-header">' +
                '<div class="card-thumb" id="thumb-' + idx + '">' + (isImage ? '' : thumbIcon) + '</div>' +
                '<div class="card-meta">' +
                    '<div class="card-filename" title="' + escHtml(file.name) + '">' + escHtml(file.name) + '</div>' +
                    '<div class="card-filesize">' + sizeStr + ' · ' + file.type.split('/')[1].toUpperCase() + '</div>' +
                '</div>' +
                '<span class="card-status-badge badge-processing" id="badge-' + idx + '">Reading…</span>' +
            '</div>' +
            '<div id="report-' + idx + '" class="privacy-report" style="display:none"></div>' +
            '<div class="progress-wrap" id="progress-wrap-' + idx + '">' +
                '<div class="progress-label"><span id="progress-label-' + idx + '">Processing…</span><span id="progress-pct-' + idx + '">0%</span></div>' +
                '<div class="progress-bar-bg"><div class="progress-bar-fill" id="progress-' + idx + '"></div></div>' +
            '</div>' +
            '<div id="thumbpair-' + idx + '"></div>' +
            '<div class="card-footer" id="footer-' + idx + '">' +
                '<button class="btn btn-primary btn-sm" id="scrub-btn-' + idx + '" onclick="scrubOne(' + idx + ')" style="display:none" aria-label="Scrub this file">' +
                    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/></svg> Scrub Now' +
                '</button>' +
                '<a id="dl-btn-' + idx + '" class="btn btn-success btn-sm" style="display:none" download aria-label="Download cleaned file">' +
                    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download Cleaned' +
                '</a>' +
                '<span id="footer-msg-' + idx + '" style="font-size:12px;color:var(--slate-dim)"></span>' +
            '</div>';

        grid.appendChild(card);

        if (isImage) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var thumbEl = document.getElementById('thumb-' + idx);
                thumbEl.innerHTML = '<img src="' + e.target.result + '" alt="Thumbnail preview" loading="lazy" decoding="async" />';
                files[idx].originalSrc = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    function renderReport(idx) {
        var meta = files[idx].metadata || [];
        var reportEl = document.getElementById('report-' + idx);
        var scrubBtn = document.getElementById('scrub-btn-' + idx);
        var hasSensitive = meta.some(function (m) { return m.sensitive; });

        if (meta.length === 0) {
            setCardStatus(idx, 'safe', '✓ Safe');
            reportEl.style.display = 'block';
            reportEl.innerHTML =
                '<div class="report-title">Privacy Report</div>' +
                '<ul class="report-list">' +
                    '<li class="report-item safe-item">' +
                        '<span class="report-item-icon">' + SVG_ICONS.check + '</span>' +
                        '<span class="report-item-value">This file is safe — no sensitive privacy data found.</span>' +
                    '</li>' +
                '</ul>';
            setFooterMsg(idx, 'No metadata to remove.');
            return;
        }

        var sensitiveCount = meta.filter(function (m) { return m.sensitive; }).length;

        setCardStatus(idx, hasSensitive ? 'warn' : 'info',
            hasSensitive ? '⚠ ' + sensitiveCount + ' sensitive' : 'Info only');

        reportEl.style.display = 'block';

        var listItems = meta.map(function (m) {
            return '<li class="report-item' + (m.sensitive ? '' : ' safe-item') + '" title="' +
                (m.sensitive ? 'Sensitive data' : 'Informational') + '">' +
                '<span class="report-item-icon">' + m.icon + '</span>' +
                '<span class="report-item-label">' + escHtml(m.key) + ':</span>' +
                '<span class="report-item-value">' + escHtml(m.value) + '</span>' +
                '</li>';
        }).join('');

        reportEl.innerHTML =
            '<div class="report-title">Privacy Report · ' + meta.length + ' items found</div>' +
            '<ul class="report-list">' + listItems + '</ul>';

        scrubBtn.style.display = 'inline-flex';
    }

    function scrubAll() {
        var promises = files.map(function (_, idx) {
            if (!files[idx].scrubbed) return scrubOne(idx);
            return Promise.resolve();
        });

        Promise.all(promises).then(function () {
            document.getElementById('downloadZipBtn').style.display = 'inline-flex';
            toast('All files scrubbed successfully! 🎉', 'success');
        });
    }

    function scrubOne(idx) {
        return new Promise(function (resolve, reject) {
            var entry = files[idx];
            if (entry.scrubbed) { resolve(); return; }

            var file = entry.file;
            var scrubBtn = document.getElementById('scrub-btn-' + idx);
            scrubBtn.disabled = true;
            scrubBtn.innerHTML = '<div class="spinner"></div> Scrubbing…';
            showProgress(idx, true, 'Removing metadata…', 30);

            var scrubPromise;
            if (file.type === 'application/pdf') scrubPromise = scrubPDF(file);
            else if (file.type === 'image/jpeg') scrubPromise = scrubJPEG(file);
            else if (file.type === 'image/png') scrubPromise = scrubPNG(file);
            else scrubPromise = Promise.reject(new Error('Unsupported file type'));

            scrubPromise.then(function (cleanBlob) {
                showProgress(idx, true, 'Done!', 100);
                setTimeout(function () { showProgress(idx, false); }, 500);

                entry.cleanedBlob = cleanBlob;
                entry.scrubbed = true;
                cleanedBlobs[idx] = { blob: cleanBlob, filename: 'clean_' + file.name };

                var dlBtn = document.getElementById('dl-btn-' + idx);
                dlBtn.href = URL.createObjectURL(cleanBlob);
                dlBtn.download = 'clean_' + file.name;
                dlBtn.style.display = 'inline-flex';
                scrubBtn.style.display = 'none';

                setCardStatus(idx, 'clean', '✓ Clean');
                document.getElementById('card-' + idx).classList.add('scrubbed');

                if (file.type.indexOf('image/') === 0 && entry.originalSrc) {
                    renderBeforeAfter(idx, entry.originalSrc, cleanBlob);
                }

                setFooterMsg(idx, 'Metadata removed. Clean size: ' + formatSize(cleanBlob.size));
                toast(file.name + ' scrubbed successfully!', 'success');

                if (files.length > 1) {
                    document.getElementById('downloadZipBtn').style.display = 'inline-flex';
                }

                resolve();
            }).catch(function (err) {
                console.error('Scrub error:', err);
                showProgress(idx, false);
                scrubBtn.disabled = false;
                scrubBtn.innerHTML =
                    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/></svg> Try Again';
                toast('Failed to process ' + file.name + ': ' + err.message, 'error');
                reject(err);
            });
        });
    }

    function scrubJPEG(file) {
        return file.arrayBuffer().then(function (buffer) {
            var binary = arrayBufferToBinaryString(buffer);
            try {
                var cleaned = piexif.remove(binary);
                return new Blob([binaryStringToUint8Array(cleaned)], { type: 'image/jpeg' });
            } catch (_) {
                return canvasScrub(file);
            }
        });
    }

    function scrubPNG(file) { return canvasScrub(file); }

    function canvasScrub(file) {
        return new Promise(function (resolve, reject) {
            var url = URL.createObjectURL(file);
            var img = new Image();

            img.onload = function () {
                var canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                canvas.getContext('2d').drawImage(img, 0, 0);
                URL.revokeObjectURL(url);

                canvas.toBlob(function (blob) {
                    if (blob) resolve(blob);
                    else reject(new Error('Canvas toBlob failed'));
                }, file.type, 0.95);
            };

            img.onerror = function () {
                URL.revokeObjectURL(url);
                reject(new Error('Image load failed'));
            };

            img.src = url;
        });
    }

    function scrubPDF(file) {
        return file.arrayBuffer().then(function (buffer) {
            return PDFLib.PDFDocument.load(buffer, { ignoreEncryption: true }).then(function (pdfDoc) {
                pdfDoc.setTitle('');
                pdfDoc.setAuthor('');
                pdfDoc.setSubject('');
                pdfDoc.setKeywords([]);
                pdfDoc.setCreator('');
                pdfDoc.setProducer('');

                try { pdfDoc.catalog.delete(PDFLib.PDFName.of('Metadata')); } catch (_) {}

                return pdfDoc.save().then(function (bytes) {
                    return new Blob([bytes], { type: 'application/pdf' });
                });
            });
        });
    }

    function renderBeforeAfter(idx, originalSrc, cleanBlob) {
        var cleanUrl = URL.createObjectURL(cleanBlob);

        document.getElementById('thumbpair-' + idx).innerHTML =
            '<div class="thumb-pair">' +
                '<div class="thumb-col">' +
                    '<div class="thumb-col-label">Before</div>' +
                    '<img class="thumb-img" src="' + originalSrc + '" alt="Original file preview" loading="lazy" decoding="async">' +
                '</div>' +
                '<div class="thumb-separator" aria-hidden="true">→</div>' +
                '<div class="thumb-col">' +
                    '<div class="thumb-col-label">After (Clean)</div>' +
                    '<img class="thumb-img" src="' + cleanUrl + '" alt="Cleaned file preview" loading="lazy" decoding="async">' +
                '</div>' +
            '</div>';
    }

    function downloadAll() {
        var zip = new JSZip();
        var count = 0;

        cleanedBlobs.forEach(function (item) {
            if (item && item.blob) {
                zip.file(item.filename, item.blob);
                count++;
            }
        });

        if (count === 0) {
            toast('No scrubbed files yet.', 'warn');
            return;
        }

        toast('Creating ZIP…', 'success');

        var zipBtn = document.getElementById('downloadZipBtn');
        zipBtn.disabled = true;
        zipBtn.innerHTML = '<div class="spinner" style="border-color:rgba(0,0,0,0.2);border-top-color:var(--navy)"></div> Generating…';

        zip.generateAsync({ type: 'blob', compression: 'DEFLATE' }).then(function (blob) {
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = 'raia-scrub-' + Date.now() + '.zip';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            toast('ZIP created successfully (' + count + ' files) 🎉', 'success');

            zipBtn.disabled = false;
            zipBtn.innerHTML =
                '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download All ZIP';
        }).catch(function (e) {
            toast('Failed to create ZIP: ' + e.message, 'error');
            zipBtn.disabled = false;
            zipBtn.innerHTML =
                '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download All ZIP';
        });
    }

    function clearAll() {
        files.length = 0;
        cleanedBlobs.length = 0;
        document.getElementById('filesGrid').innerHTML = '';
        document.getElementById('filesSection').style.display = 'none';
        document.getElementById('actionBar').classList.remove('visible');
        document.getElementById('downloadZipBtn').style.display = 'none';
        toast('All files cleared.', 'success');
    }

    function updateUI() {
        var hasFiles = files.length > 0;
        document.getElementById('actionBar').classList.toggle('visible', hasFiles);
        document.getElementById('filesSection').style.display = hasFiles ? 'block' : 'none';
    }

    function setCardStatus(idx, type, label) {
        var badge = document.getElementById('badge-' + idx);
        if (!badge) return;
        badge.className = 'card-status-badge';
        if (type === 'warn') badge.classList.add('badge-warn');
        else if (type === 'safe') badge.classList.add('badge-safe');
        else if (type === 'clean') badge.classList.add('badge-clean');
        else badge.classList.add('badge-processing');
        badge.textContent = label;
    }

    function showProgress(idx, show, label, pct) {
        var wrap = document.getElementById('progress-wrap-' + idx);
        if (!wrap) return;
        wrap.style.display = show ? 'block' : 'none';
        if (show) {
            document.getElementById('progress-' + idx).style.width = pct + '%';
            document.getElementById('progress-label-' + idx).textContent = label || 'Processing…';
            document.getElementById('progress-pct-' + idx).textContent = pct + '%';
        }
    }

    function setFooterMsg(idx, msg) {
        var el = document.getElementById('footer-msg-' + idx);
        if (el) el.textContent = msg;
    }

    function toast(msg, type) {
        type = type || 'success';
        var container = document.getElementById('toastContainer');
        var el = document.createElement('div');
        el.className = 'toast ' + type;

        var iconMap = { success: SVG_ICONS.success, error: SVG_ICONS.error, warn: SVG_ICONS.warn };
        var iconSvg = iconMap[type] || SVG_ICONS.success;

        el.innerHTML = '<span aria-hidden="true">' + iconSvg + '</span><span>' + escHtml(msg) + '</span>';
        container.appendChild(el);

        setTimeout(function () {
            el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            el.style.opacity = '0';
            el.style.transform = 'translateX(20px) scale(0.95)';
            setTimeout(function () { if (el.parentNode) el.remove(); }, 450);
        }, 3600);
    }

    function formatSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }

    function escHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function arrayBufferToBinaryString(buffer) {
        var bytes = new Uint8Array(buffer);
        var chunk = 0x8000;
        var parts = [];
        for (var i = 0; i < bytes.length; i += chunk) {
            parts.push(String.fromCharCode.apply(null, bytes.subarray(i, i + chunk)));
        }
        return parts.join('');
    }

    function binaryStringToUint8Array(str) {
        var arr = new Uint8Array(str.length);
        for (var i = 0; i < str.length; i++) arr[i] = str.charCodeAt(i);
        return arr;
    }

    function waitForPDFLib() {
        return new Promise(function (resolve) {
            if (window.PDFLib) { resolve(); return; }
            var check = setInterval(function () {
                if (window.PDFLib) { clearInterval(check); resolve(); }
            }, 100);
        });
    }

    window.addEventListener('load', function () {
        waitForPDFLib().then(function () {
            console.log('Raia Scrub V2.0.3 ready — all libraries loaded, 100% client-side.');
        });
    });