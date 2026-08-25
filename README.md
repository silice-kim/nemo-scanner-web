# Nemo Scanner Web

Marketing website for **Barcode & QR Scanner: Nemo**.

Live site:

https://nemo-scanner.bizadmin.co.kr/

Google Play:

https://play.google.com/store/apps/details?id=kr.co.bizadmin.scanner

## Custom domain version

This build is configured for:

```text
nemo-scanner.bizadmin.co.kr
```

Included:

- `CNAME`
- Canonical URLs on the custom domain
- Open Graph URLs on the custom domain
- `robots.txt` pointing to the custom-domain sitemap
- `sitemap.xml` using the custom domain
- `404.html` absolute links updated to the custom domain

## Pages

- `https://nemo-scanner.bizadmin.co.kr/`
- `https://nemo-scanner.bizadmin.co.kr/continuous-barcode-scanner/`
- `https://nemo-scanner.bizadmin.co.kr/barcode-scanner-csv-export/`
- `https://nemo-scanner.bizadmin.co.kr/scan-qr-from-image/`
- `https://nemo-scanner.bizadmin.co.kr/barcode-scanner-history/`
- `https://nemo-scanner.bizadmin.co.kr/zxing-intent-scanner/`

## GitHub Pages custom domain checklist

1. Push this build to the repository.
2. Confirm repository root contains `CNAME`.
3. In GitHub Pages settings, set Custom domain to:

```text
nemo-scanner.bizadmin.co.kr
```

4. Enable HTTPS when available.
5. Verify DNS points to the GitHub Pages hostname.
6. Confirm:
   - `/robots.txt`
   - `/sitemap.xml`
   - all landing pages
   - Google Play CTA links
