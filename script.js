        /* --- COOKIE CONSENT --- */
        (function() {
            const banner = document.getElementById('cookieBanner');
            const hasConsent = localStorage.getItem('raia-cookie-consent');
            if (hasConsent === null) banner.style.display = 'flex';
            else banner.style.display = 'none';

            window.acceptCookies = function() {
                localStorage.setItem('raia-cookie-consent', 'accepted');
                banner.style.display = 'none';
                toast('Preferences saved.', 'success');
            };
            window.denyCookies = function() {
                localStorage.setItem('raia-cookie-consent', 'denied');
                banner.style.display = 'none';
                toast('No cookies set.', 'success');
            };
        })();

        /* --- HEADER SCROLL EFFECT --- */
        (function() {
            const header = document.getElementById('siteHeader');
            let ticking = false;
            window.addEventListener('scroll', function() {
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        const scrolled = window.scrollY > 20;
                        header.classList.toggle('scrolled', scrolled);
                        ticking = false;
                    });
                    ticking = true;
                }
            });
            if (window.scrollY > 20) header.classList.add('scrolled');
        })();

        /* --- MOBILE NAV TOGGLE --- */
        (function() {
            const hamburger = document.getElementById('hamburgerBtn');
            const overlay = document.getElementById('navOverlay');
            const mobileNav = document.getElementById('navMobile');
            const links = mobileNav.querySelectorAll('.nav-mobile-link');

            function toggleMenu(open) {
                const isOpen = typeof open === 'boolean' ? open : !hamburger.classList.contains('open');
                hamburger.classList.toggle('open', isOpen);
                hamburger.setAttribute('aria-expanded', isOpen);
                overlay.classList.toggle('open', isOpen);
                mobileNav.classList.toggle('open', isOpen);
                document.body.style.overflow = isOpen ? 'hidden' : '';
            }

            hamburger.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleMenu();
            });

            overlay.addEventListener('click', function() {
                toggleMenu(false);
            });

            links.forEach(function(link) {
                link.addEventListener('click', function() {
                    toggleMenu(false);
                });
            });

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
                    toggleMenu(false);
                    hamburger.focus();
                }
            });
        })();

        /* --- CORE APP --- */
        const files = [];
        const cleanedBlobs = [];
        const dropZone = document.getElementById('dropZone');
        const fileInput = document.getElementById('fileInput');

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function(evt) {
            document.addEventListener(evt, function(e) { e.preventDefault(); });
        });

        dropZone.addEventListener('dragenter', function() { dropZone.classList.add('drag-over'); });
        dropZone.addEventListener('dragleave', function(e) {
            if (!dropZone.contains(e.relatedTarget)) dropZone.classList.remove('drag-over');
        });
        dropZone.addEventListener('dragover', function(e) {
            e.preventDefault();
            dropZone.classList.add('drag-over');
        });
        dropZone.addEventListener('drop', function(e) {
            e.preventDefault();
            dropZone.classList.remove('drag-over');
            handleFiles([].slice.call(e.dataTransfer.files));
        });

        fileInput.addEventListener('change', function() {
            handleFiles([].slice.call(fileInput.files));
        });

        function handleFiles(incoming) {
            var ALLOWED = ['image/jpeg', 'image/png', 'application/pdf'];
            var MAX_FILES = 8,
                MAX_SIZE = 50 * 1024 * 1024;

            if (files.length + incoming.length > MAX_FILES) {
                toast('Max ' + MAX_FILES + ' files at once.', 'warn');
                incoming = incoming.slice(0, MAX_FILES - files.length);
            }

            incoming.forEach(function(file) {
                if (!ALLOWED.includes(file.type)) {
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
            var bufferPromise = file.arrayBuffer();
            bufferPromise.then(function(buffer) {
                if (file.type === 'application/pdf') {
                    return analyzePDF(idx, buffer);
                } else {
                    return analyzeImage(idx, buffer);
                }
            }).catch(function(err) {
                console.warn('Metadata read error:', err);
                files[idx].metadata = [];
            }).then(function() {
                showProgress(idx, true, 'Analysis complete', 100);
                setTimeout(function() { showProgress(idx, false); }, 600);
                renderReport(idx);
            });
        }

        function analyzeImage(idx, buffer) {
            var entry = files[idx];
            var meta = [];
            try {
                var tags = ExifReader.load(buffer, { expanded: true });
                var get = function(group, key) {
                    try {
                        var val = tags[group] && tags[group][key];
                        return val ? (val.description || val.value || null) : null;
                    } catch (_) { return null; }
                };
                if (tags.gps) {
                    var lat = tags.gps.Latitude,
                        lon = tags.gps.Longitude;
                    if (lat !== undefined && lon !== undefined) {
                        var area = '';
                        if (lat > -8 && lat < -5 && lon > 106 && lon < 107.5) area = ' (Jakarta area)';
                        else if (lat > -7.5 && lat < -6.8 && lon > 110 && lon < 111) area = ' (Semarang area)';
                        else if (lat > -8 && lat < -7 && lon > 112 && lon < 113) area = ' (Surabaya area)';
                        meta.push({ key: 'GPS Location', value: lat.toFixed(5) + ', ' + lon.toFixed(5) + area,
                            sensitive: true, icon: '📍' });
                    }
                }
                var make = get('exif', 'Make') || get('Exif', 'Make');
                var model = get('exif', 'Model') || get('Exif', 'Model');
                if (make || model) meta.push({ key: 'Device', value: [make, model].filter(Boolean).join(' '),
                    sensitive: true, icon: '📱' });
                var dt = get('exif', 'DateTimeOriginal') || get('Exif', 'DateTimeOriginal') || get('exif',
                    'DateTime') || get('Exif', 'DateTime');
                if (dt) meta.push({ key: 'Capture Time', value: dt, sensitive: false, icon: '🕐' });
                var sw = get('exif', 'Software') || get('Exif', 'Software');
                if (sw) meta.push({ key: 'Software', value: sw, sensitive: false, icon: '💻' });
                var artist = get('exif', 'Artist') || get('Exif', 'Artist');
                if (artist) meta.push({ key: 'Photographer / Artist', value: artist, sensitive: true, icon: '👤' });
                var copy = get('exif', 'Copyright') || get('Exif', 'Copyright');
                if (copy) meta.push({ key: 'Copyright', value: copy, sensitive: false, icon: '©️' });
                var focal = get('exif', 'FocalLength') || get('Exif', 'FocalLength');
                if (focal) meta.push({ key: 'Focal Length', value: focal, sensitive: false, icon: '🔭' });
                var serial = get('exif', 'BodySerialNumber') || get('Exif', 'BodySerialNumber') ||
                    get('exif', 'CameraSerialNumber') || get('Exif', 'CameraSerialNumber');
                if (serial) meta.push({ key: 'Camera Serial Number', value: serial, sensitive: true, icon: '🔢' });
                if (tags.Thumbnail || tags.thumbnail) meta.push({ key: 'Hidden Thumbnail',
                    value: 'EXIF thumbnail inside file', sensitive: true, icon: '🖼️' });
            } catch (e) { console.info('No EXIF or parse error:', e.message); }
            files[idx].metadata = meta;
        }

        function analyzePDF(idx, buffer) {
            var entry = files[idx];
            var meta = [];
            try {
                var pdfDoc = PDFLib.PDFDocument.load(buffer, { ignoreEncryption: true });
                var fields = [
                    { key: 'Title', fn: function() { return pdfDoc.getTitle(); }, icon: '📄', sensitive: false },
                    { key: 'Author', fn: function() { return pdfDoc.getAuthor(); }, icon: '👤', sensitive: true },
                    { key: 'Subject', fn: function() { return pdfDoc.getSubject(); }, icon: '📝', sensitive: false },
                    { key: 'Keywords', fn: function() { return pdfDoc.getKeywords(); }, icon: '🔑',
                    sensitive: false },
                    { key: 'Creator', fn: function() { return pdfDoc.getCreator(); }, icon: '💻', sensitive: true },
                    { key: 'Producer', fn: function() { return pdfDoc.getProducer(); }, icon: '🏭',
                    sensitive: false },
                    { key: 'Creation Date', fn: function() { var d = pdfDoc.getCreationDate(); return d ? (d
                            .toISOString ? d.toISOString() : d) : null; }, icon: '🕐', sensitive: false },
                    { key: 'Modification Date', fn: function() { var d = pdfDoc.getModificationDate(); return d ?
                            (d.toISOString ? d.toISOString() : d) : null; }, icon: '✏️', sensitive: false },
                ];
                fields.forEach(function(f) {
                    try {
                        var val = f.fn();
                        if (val) meta.push({ key: f.key, value: String(val), sensitive: f.sensitive,
                            icon: f.icon });
                    } catch (_) {}
                });
            } catch (e) { console.warn('PDF parse error:', e.message); }
            files[idx].metadata = meta;
        }

        function renderCard(idx) {
            var entry = files[idx];
            var file = entry.file;
            var grid = document.getElementById('filesGrid');
            var isImage = file.type.startsWith('image/');
            var thumbIcon = file.type === 'application/pdf' ? '📄' : '🖼️';
            var sizeStr = formatSize(file.size);
            var card = document.createElement('div');
            card.className = 'file-card';
            card.id = 'card-' + idx;
            card.setAttribute('role', 'listitem');
            card.innerHTML =
                '<div class="card-header">' +
                '<div class="card-thumb" id="thumb-' + idx + '">' + (isImage ? '' : thumbIcon) + '</div>' +
                '<div class="card-meta"><div class="card-filename" title="' + file.name + '">' + file.name +
                '</div><div class="card-filesize">' + sizeStr + ' · ' + file.type.split('/')[1].toUpperCase() +
                '</div></div>' +
                '<span class="card-status-badge badge-processing" id="badge-' + idx + '">Reading…</span>' +
                '</div>' +
                '<div id="report-' + idx + '" class="privacy-report" style="display:none"></div>' +
                '<div class="progress-wrap" id="progress-wrap-' + idx + '"><div class="progress-label"><span id="progress-label-' +
                idx + '">Processing…</span><span id="progress-pct-' + idx + '">0%</span></div><div class="progress-bar-bg"><div class="progress-bar-fill" id="progress-' +
                idx + '"></div></div></div>' +
                '<div id="thumbpair-' + idx + '"></div>' +
                '<div class="card-footer" id="footer-' + idx + '">' +
                '<button class="btn btn-primary btn-sm" id="scrub-btn-' + idx +
                '" onclick="scrubOne(' + idx + ')" style="display:none" aria-label="Scrub this file">' +
                '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/></svg> Scrub Now' +
                '</button>' +
                '<a id="dl-btn-' + idx +
                '" class="btn btn-success btn-sm" style="display:none" download aria-label="Download cleaned file">' +
                '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download Cleaned' +
                '</a>' +
                '<span id="footer-msg-' + idx + '" style="font-size:12px;color:var(--slate-dim)"></span>' +
                '</div>';
            grid.appendChild(card);

            if (isImage) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    var thumbEl = document.getElementById('thumb-' + idx);
                    thumbEl.innerHTML = '<img src="' + e.target.result + '" alt="Thumbnail preview" loading="lazy" decoding="async" />';
                    files[idx].originalSrc = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }

        function renderReport(idx) {
            var entry = files[idx];
            var meta = entry.metadata || [];
            var reportEl = document.getElementById('report-' + idx);
            var scrubBtn = document.getElementById('scrub-btn-' + idx);
            var hasSensitive = meta.some(function(m) { return m.sensitive; });
            if (meta.length === 0) {
                setCardStatus(idx, 'safe', '✓ Safe');
                reportEl.style.display = 'block';
                reportEl.innerHTML =
                    '<div class="report-title">Privacy Report</div><ul class="report-list"><li class="report-item safe-item"><span class="report-item-icon">✅</span><span class="report-item-value">This file is safe – no sensitive privacy data found.</span></li></ul>';
                setFooterMsg(idx, 'No metadata to remove.');
                return;
            }
            setCardStatus(idx, hasSensitive ? 'warn' : 'info', hasSensitive ? '⚠ ' + meta.filter(function(m) { return m
                    .sensitive; }).length + ' sensitive' : 'Info only');
            reportEl.style.display = 'block';
            var listItems = meta.map(function(m) {
                return '<li class="report-item' + (m.sensitive ? '' : ' safe-item') +
                    '" title="' + (m.sensitive ? 'Sensitive data' : 'Info') +
                    '"><span class="report-item-icon">' + m.icon + '</span><span class="report-item-label">' + m
                    .key + ':</span><span class="report-item-value">' + escHtml(m.value) + '</span></li>';
            }).join('');
            reportEl.innerHTML =
                '<div class="report-title">Privacy Report · ' + meta.length + ' items found</div><ul class="report-list">' +
                listItems + '</ul>';
            scrubBtn.style.display = 'inline-flex';
        }

        function scrubAll() {
            var promises = files.map(function(_, idx) {
                if (!files[idx].scrubbed) return scrubOne(idx);
                return Promise.resolve();
            });
            Promise.all(promises).then(function() {
                document.getElementById('downloadZipBtn').style.display = 'inline-flex';
                toast('All files scrubbed successfully! 🎉', 'success');
            });
        }

        function scrubOne(idx) {
            return new Promise(function(resolve, reject) {
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

                scrubPromise.then(function(cleanBlob) {
                    showProgress(idx, true, 'Done!', 100);
                    setTimeout(function() {
                        showProgress(idx, false);
                    }, 500);
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
                    if (file.type.startsWith('image/') && entry.originalSrc) renderBeforeAfter(idx, entry
                        .originalSrc, cleanBlob);
                    setFooterMsg(idx, 'Metadata removed. Clean size: ' + formatSize(cleanBlob.size));
                    toast(file.name + ' scrubbed successfully!', 'success');
                    if (files.length > 1) document.getElementById('downloadZipBtn').style.display =
                    'inline-flex';
                    resolve();
                }).catch(function(err) {
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
            return file.arrayBuffer().then(function(buffer) {
                var binary = arrayBufferToBinaryString(buffer);
                try {
                    var cleaned = piexif.remove(binary);
                    return new Blob([binaryStringToUint8Array(cleaned)], { type: 'image/jpeg' });
                } catch (_) { return canvasScrub(file); }
            });
        }

        function scrubPNG(file) { return canvasScrub(file); }

        function canvasScrub(file) {
            return new Promise(function(resolve, reject) {
                var url = URL.createObjectURL(file);
                var img = new Image();
                img.onload = function() {
                    var canvas = document.createElement('canvas');
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    canvas.getContext('2d').drawImage(img, 0, 0);
                    URL.revokeObjectURL(url);
                    canvas.toBlob(function(blob) {
                        blob ? resolve(blob) : reject(new Error('Canvas toBlob failed'));
                    }, file.type, 0.95);
                };
                img.onerror = function() { reject(new Error('Image load failed')); };
                img.src = url;
            });
        }

        function scrubPDF(file) {
            return file.arrayBuffer().then(function(buffer) {
                return PDFLib.PDFDocument.load(buffer, { ignoreEncryption: true }).then(function(pdfDoc) {
                    pdfDoc.setTitle('');
                    pdfDoc.setAuthor('');
                    pdfDoc.setSubject('');
                    pdfDoc.setKeywords([]);
                    pdfDoc.setCreator('');
                    pdfDoc.setProducer('');
                    try { pdfDoc.catalog.delete(PDFLib.PDFName.of('Metadata')); } catch (_) {}
                    return pdfDoc.save().then(function(bytes) {
                        return new Blob([bytes], { type: 'application/pdf' });
                    });
                });
            });
        }

        function renderBeforeAfter(idx, originalSrc, cleanBlob) {
            var cleanUrl = URL.createObjectURL(cleanBlob);
            document.getElementById('thumbpair-' + idx).innerHTML =
                '<div class="thumb-pair"><div class="thumb-col"><div class="thumb-col-label">Before</div><img class="thumb-img" src="' +
                originalSrc + '" alt="Original file preview" loading="lazy" decoding="async"></div><div class="thumb-separator" aria-hidden="true">→</div><div class="thumb-col"><div class="thumb-col-label">After (Clean)</div><img class="thumb-img" src="' +
                cleanUrl + '" alt="Cleaned file preview" loading="lazy" decoding="async"></div></div>';
        }

        function downloadAll() {
            var zip = new JSZip();
            var count = 0;
            cleanedBlobs.forEach(function(item) {
                if (item && item.blob) { zip.file(item.filename, item.blob);
                    count++; }
            });
            if (count === 0) { toast('No scrubbed files yet.', 'warn'); return; }
            toast('Creating ZIP…', 'success');
            var zipBtn = document.getElementById('downloadZipBtn');
            zipBtn.disabled = true;
            zipBtn.innerHTML =
                '<div class="spinner" style="border-color:rgba(0,0,0,0.2);border-top-color:var(--navy)"></div> Generating…';
            zip.generateAsync({ type: 'blob', compression: 'DEFLATE' }).then(function(blob) {
                var url = URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = 'raia-scrub-' + Date.now() + '.zip';
                a.click();
                URL.revokeObjectURL(url);
                toast('ZIP created successfully (' + count + ' files) 🎉', 'success');
                zipBtn.disabled = false;
                zipBtn.innerHTML =
                    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download All ZIP';
            }).catch(function(e) {
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
            var icons = { success: '✅', error: '❌', warn: '⚠️' };
            el.innerHTML = '<span>' + (icons[type] || '💬') + '</span><span>' + msg + '</span>';
            container.appendChild(el);
            setTimeout(function() {
                el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                el.style.opacity = '0';
                el.style.transform = 'translateX(20px) scale(0.95)';
                setTimeout(function() { if (el.parentNode) el.remove(); }, 450);
            }, 3600);
        }

        function formatSize(bytes) {
            if (bytes < 1024) return bytes + ' B';
            if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
            return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
        }

        function escHtml(str) {
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }

        function arrayBufferToBinaryString(buffer) {
            var bytes = new Uint8Array(buffer);
            var bin = '';
            for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
            return bin;
        }

        function binaryStringToUint8Array(str) {
            var arr = new Uint8Array(str.length);
            for (var i = 0; i < str.length; i++) arr[i] = str.charCodeAt(i);
            return arr;
        }

        function waitForPDFLib() {
            return new Promise(function(resolve) {
                if (window.PDFLib) resolve();
                else {
                    var check = setInterval(function() {
                        if (window.PDFLib) { clearInterval(check);
                            resolve(); }
                    }, 100);
                }
            });
        }

        window.addEventListener('load', function() {
            waitForPDFLib().then(function() {
                console.log('Raia Scrub ready – all libs loaded.');
            });
        });