# GuestWiFiQR

GuestWiFiQR is a Next.js MVP for generating printable WiFi QR code signs for Airbnb, Vrbo, and vacation rental hosts. Guests scan the sign with iPhone or Android to connect to the guest WiFi network without typing a password.

## Features

- Browser-only WiFi QR code generation using the standard `WIFI:T:...` format
- Escaping for SSID and password characters such as `;`, `,`, `:`, `"`, and `\`
- WPA/WPA2, WEP, and no-password network support
- Live printable sign preview
- 10 templates with 3 free and 7 Pro-preview styles
- Optional property name, welcome text, host contact, password display, and hidden network flag
- Paper sizes: 4x6 inch, 5x7 inch, A4, and US Letter
- Watermarked PNG download
- Printable PDF download
- SEO landing pages, FAQ JSON-LD, canonical tags, Open Graph tags, sitemap, and robots
- Pricing, privacy, and terms pages

## Tech Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- `qrcode` for WiFi QR generation
- `html-to-image` for PNG export
- `jsPDF` for PDF export
- Vitest for unit tests

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Testing

Run unit tests:

```bash
npm run test
```

The tests cover `escapeWifiValue` and `generateWifiQrString`, including WPA, WEP, no-password networks, special characters, and hidden networks.

## Build

Create a production build:

```bash
npm run build
```

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repository into Vercel.
3. Use the default Next.js build settings.
4. Deploy.

No database, login, or backend WiFi storage is required.

## Deploy to Cloudflare Pages

This MVP is configured as a static Next.js export, so Cloudflare Pages can serve it without a Worker adapter.

Recommended Cloudflare Pages settings:

- Framework preset: None
- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: `22`

Do not use a Wrangler deploy command for this static MVP. The build produces the `out` folder and Cloudflare Pages publishes that folder directly.

## Privacy

Your WiFi name and password are processed locally in the browser. GuestWiFiQR does not upload or store WiFi SSIDs, passwords, or generated signs in the MVP.

For vacation rentals, create a separate guest WiFi network before printing and displaying a QR code sign.

## Roadmap

- Add real payment
- Add House Rules Sign Generator
- Add Check-in Instruction Sign
- Add Parking Sign
- Add multilingual templates
- Add more SEO template pages
