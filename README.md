# Portfolio Website - Lugmaan Noor

Modern, responsive portfolio website showcasing multimedia work across 15 sections with smooth scrolling navigation.

**Live:** https://mzihni.online

## Quick Start

### Local Development

```bash
python -m http.server 8000
```

Visit: `http://localhost:8000`

### Production Deployment

Uses **Caddy** for zero-config automatic SSL with Let's Encrypt.

```bash
# On your VPS
git clone https://github.com/mzi070/portfolio-lugu.git
cd portfolio-lugu

# Start Caddy (auto-generates SSL)
docker compose up -d
```

**That's it!** No email configuration needed. Caddy handles everything.

**See [DEPLOYMENT.md](DEPLOYMENT.md) for full setup guide.**

## Project Structure

- `index.html`: All 15 sections mapped to PDF pages
- `styles.css`: Visual system, layouts, responsive behavior
- `script.js`: Navigation, animations, interactions
- `assets/img/`: Image assets
- `docker-compose.yml`: Caddy web server setup
- `Caddyfile`: Caddy configuration (auto SSL, compression)
- `DEPLOYMENT.md`: Full deployment guide for Hostinger VPS

## Features

✅ **Responsive Design** - Mobile, tablet, laptop, desktop, TV optimized  
✅ **Smooth Navigation** - Dot nav with keyboard support (Arrow/Page keys)  
✅ **Scroll Animations** - IntersectionObserver reveal effects  
✅ **Live File Mounting** - Edit files and refresh browser (no rebuild)  
✅ **Zero-Config SSL** - Caddy automatically handles Let's Encrypt  
✅ **HTTP → HTTPS** - Automatic redirect  
✅ **HTTP/3 Support** - Modern QUIC protocol enabled  
✅ **Optimized Assets** - Zstd/Gzip compression, cache headers

## Improvement Options

1. Add dark/light style switcher while preserving brand palette.
2. Add project detail modals for each category image cluster.
3. Add lazy-loading strategy with explicit responsive `srcset` images.
4. Add a downloadable PDF shortcut and CV panel.
5. Add multilingual support (English + Dhivehi) via JSON content files.
6. Add contact form with spam protection and success/error states.
7. Add analytics events for navigation and CTA tracking.
8. Add exact pixel calibration pass per section with visual-diff snapshots.
