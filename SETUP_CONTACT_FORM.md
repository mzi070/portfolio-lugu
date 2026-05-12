# Contact Form Setup Instructions

Your portfolio is configured with **Web3Forms** - a free, open-source friendly email service.

## Quick Setup (2 minutes)

### Step 1: Get Your Free API Key

1. Visit: **https://web3forms.com**
2. Enter your email address (lugmaannoor@gmail.com)
3. Click "Create Access Key"
4. Check your email for the access key (instant delivery)

### Step 2: Add Your Access Key

Open `index.html` and find this line (around line 222):

```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

Replace `YOUR_ACCESS_KEY_HERE` with your actual access key from the email.

### Step 3: Test It!

1. Open your portfolio in a browser
2. Scroll to the contact form (last page)
3. Fill in the form and click "Send Message"
4. Check your email inbox for the message!

## Features

✅ **100% Free** - No limits, no paid plans
✅ **No Backend Required** - Works with static HTML
✅ **Instant Setup** - Just add your access key
✅ **Spam Protection** - Built-in honeypot and reCAPTCHA support
✅ **Custom Emails** - Receive messages at lugmaannoor@gmail.com
✅ **Works Anywhere** - Local testing, GitHub Pages, Netlify, Vercel, etc.

## What Happens When Someone Submits?

1. Form data is sent to Web3Forms API
2. Web3Forms sends an email to: **lugmaannoor@gmail.com**
3. Email contains: sender's name, email, and message
4. You can reply directly to their email

## Optional: Add More Features

### Add reCAPTCHA (spam protection)
Add this before the submit button in index.html:
```html
<input type="hidden" name="recaptcha_site_key" value="YOUR_RECAPTCHA_KEY">
<div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_KEY"></div>
```

### Customize Email Subject
Already set to: "New Portfolio Contact from Website"
Change the value in this line if you want:
```html
<input type="hidden" name="subject" value="New Portfolio Contact from Website">
```

### Add Auto-Reply
Add this hidden field:
```html
<input type="hidden" name="autoresponse" value="Thank you for contacting me! I'll get back to you soon.">
```

## Troubleshooting

**"YOUR_ACCESS_KEY_HERE" error?**
- You need to replace this with your actual key from Web3Forms

**Not receiving emails?**
- Check spam/junk folder
- Verify the access key is correct
- Make sure you used the email you registered with Web3Forms

**Testing locally?**
- Works even on local files (file://)
- Works on localhost
- Works on any hosted domain

## Alternative Email Address

If you want messages sent to a different email, just register with that email on web3forms.com and use that access key instead.

## Documentation

Full docs: https://docs.web3forms.com
