# Nemo Scanner Web

Marketing website for **Barcode & QR Scanner: Nemo**.

Live site:

https://silice-kim.github.io/nemo-scanner-web/

Google Play:

https://play.google.com/store/apps/details?id=kr.co.bizadmin.scanner

## Day 24 final / Step 7

Implemented:

- Responsive home page
- Continuous Scan SEO landing page
- CSV Export SEO landing page
- Scan from Image SEO landing page
- Scan History SEO landing page
- ZXing Intent developer landing page
- Unified desktop/mobile navigation
- Unified footer and internal links
- Google Play CTA tracking attributes
- Page-specific titles and meta descriptions
- Canonical URLs using the live GitHub Pages domain
- Open Graph title, description, URL and site name
- `robots.txt`
- `sitemap.xml`
- `404.html`
- Removal of temporary “coming next” copy

## Pages

- `/`
- `/continuous-barcode-scanner/`
- `/barcode-scanner-csv-export/`
- `/scan-qr-from-image/`
- `/barcode-scanner-history/`
- `/zxing-intent-scanner/`

## Local preview

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000/
```

## Deployment check

After pushing to GitHub, verify:

- `https://silice-kim.github.io/nemo-scanner-web/`
- `https://silice-kim.github.io/nemo-scanner-web/robots.txt`
- `https://silice-kim.github.io/nemo-scanner-web/sitemap.xml`
- all five landing pages
- Google Play CTA links
- mobile navigation
- 404 handling

## Important developer note

The ZXing Intent page contains placeholder Intent action/result keys.
Replace those placeholders only with the exact contract supported by the current Nemo app.
