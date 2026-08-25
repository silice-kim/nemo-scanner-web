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
