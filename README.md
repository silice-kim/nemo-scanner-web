# Nemo Scanner Web

Marketing website for **Barcode & QR Scanner: Nemo**.

Google Play:

https://play.google.com/store/apps/details?id=kr.co.bizadmin.scanner

## Step 1

This step includes:

- Home page
- Responsive layout
- Google Play CTA
- Feature overview
- Basic JavaScript event hook

## Local preview

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```


## Step 2

Added:

- `/continuous-barcode-scanner/`
- Continuous Scan SEO landing page
- Homepage card linked to the landing page
- Page-specific Google Play CTA tracking attribute

Preview:

```text
http://localhost:8000/continuous-barcode-scanner/
```


## Step 3

Added:

- `/barcode-scanner-csv-export/`
- CSV Export SEO landing page
- Homepage CSV Export card linked to the new page
- Continuous Scan → CSV Export internal link
- CSV Export → Continuous Scan internal link
- `data-page="csv_export"` on Google Play CTAs

Preview:

```text
http://localhost:8000/barcode-scanner-csv-export/
```


## Step 4

Added:

- `/scan-qr-from-image/`
- Scan from Image SEO landing page
- Homepage Image Scan card linked to the new page
- Internal links between existing feature pages
- `data-page="image_scan"` on Google Play CTAs

Preview:

```text
http://localhost:8000/scan-qr-from-image/
```


## Step 5

Added:

- `/barcode-scanner-history/`
- Scan History SEO landing page
- Homepage Scan History card linked to the new page
- Internal links from Continuous Scan, CSV Export and Image Scan
- History page links back to related feature pages
- `data-page="history"` on Google Play CTAs

Preview:

```text
http://localhost:8000/barcode-scanner-history/
```
