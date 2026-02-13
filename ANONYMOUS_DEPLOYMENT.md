# Anonymous Deployment Guide

## Important Privacy Considerations

This guide will help you deploy the CCHC website while maintaining complete anonymity.

### Before You Deploy

1. **Use a Privacy-Focused Email**
   - Create a new ProtonMail or Tutanota email
   - Don't use any email associated with your real identity
   - Use this for all service registrations

2. **Use a VPN**
   - Always use a VPN when accessing deployment services
   - Consider Mullvad or ProtonVPN for maximum privacy

3. **Payment Privacy**
   - Use crypto (Bitcoin, Monero) if possible
   - Use privacy.com virtual cards
   - Never use your personal credit card

4. **Domain Registration**
   - Use Njalla, Namecheap + WhoisGuard, or similar privacy-focused registrar
   - Enable domain privacy/WHOIS protection
   - Use anonymous payment method
   - Use anonymous email for registration

### Recommended Deployment Options

#### Option 1: Vercel (Easiest, Anonymous Possible)
1. Create a new GitHub account with anonymous email
2. Push code to private GitHub repo
3. Sign up for Vercel with anonymous email
4. Connect GitHub and deploy
5. Add custom domain with privacy protection
6. **Important:** Delete all analytics integrations in Vercel settings

```bash
# Remove any identifying git info
git config user.name "Anonymous"
git config user.email "anonymous@protonmail.com"

# Push to GitHub
git push origin feature/build-cchc-site
```

#### Option 2: Netlify (Good Privacy)
1. Create anonymous email
2. Sign up for Netlify
3. Deploy via drag-and-drop or GitHub
4. Configure custom domain
5. Disable analytics

#### Option 3: Self-Hosted (Maximum Privacy)
1. Rent VPS with crypto (Njalla, BuyVM, etc.)
2. Use Cloudflare for DDoS protection (anonymous account)
3. Deploy with Docker/nginx
4. No logging, no analytics

```bash
# Build static site
npm run build

# Upload to server via SSH
scp -r .next/standalone user@yourserver:/var/www/cchc
```

### Remove Tracking & Analytics

The site is built WITHOUT any analytics by default. Keep it that way:

- ❌ No Google Analytics
- ❌ No Facebook Pixel
- ❌ No Vercel Analytics
- ❌ No error tracking (Sentry, etc.)
- ❌ No social login buttons that track

### Metadata Stripping

Before pushing to production:

```bash
# Check for any identifying metadata
grep -r "serene" src/
grep -r "author" src/
grep -r "email" src/

# Clean git history if needed
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch SENSITIVE_FILE' \
  --prune-empty --tag-name-filter cat -- --all
```

### Environment Variables

Create `.env.local` (already gitignored):

```bash
# NO identifying information
NEXT_PUBLIC_SITE_URL=https://cchc-coalition.ca
# Never commit API keys or secrets
```

### DNS Privacy

When setting up DNS:
1. Use Cloudflare's proxy (orange cloud) to hide server IP
2. Enable DNSSEC
3. Use privacy-protected domain registration
4. Consider Tor hidden service (.onion) as backup

### Communication Channels

If you add contact forms:
1. Use SimpleLogin or AnonAddy for email forwarding
2. Never expose real email addresses
3. Use end-to-end encrypted forms (FormSubmit with encryption)

### Social Media

When sharing on social:
1. Create anonymous Twitter/X account (new phone number via Twilio/Burner)
2. Don't link to any personal accounts
3. Use VPN for all posts
4. Schedule posts with Buffer/Hootsuite anonymous account

### Security Checklist

- [ ] Remove all personal information from code
- [ ] Use anonymous email for all services
- [ ] Enable domain privacy protection
- [ ] Deploy through VPN
- [ ] No personal payment methods
- [ ] No analytics or tracking
- [ ] Clean git history
- [ ] Anonymous GitHub account
- [ ] Cloudflare proxy enabled
- [ ] HTTPS enforced
- [ ] No server-side logging of user data

### What NOT to Do

❌ Use your real name anywhere
❌ Use personal email addresses
❌ Use personal credit cards
❌ Deploy from home IP without VPN
❌ Link to personal social media
❌ Add Google Analytics or similar
❌ Use domain registered to your real name
❌ Commit .env files with secrets
❌ Leave identifying comments in code

### Emergency Takedown

If you need to take the site down quickly:
1. Vercel/Netlify: Delete project from dashboard
2. DNS: Point domain to 127.0.0.1
3. GitHub: Delete repository
4. Domain: Let expire or transfer to privacy service

### Legal Considerations

This is political speech and advocacy, which is protected. However:
- All information should be factual and verifiable
- Avoid defamation or false statements
- Political speech has broad protections in Canada
- Consult a lawyer if concerned

### Post-Deployment

After launch:
- Monitor from VPN only
- Never access admin panels from personal IP
- Use separate browser profile or Tor Browser
- Don't share with anyone who knows your identity

## Quick Start (Anonymous)

```bash
# 1. Clean any identifying info
git config user.name "Anonymous Contributor"
git config user.email "anonymous@protonmail.com"

# 2. Build and test locally
npm run build
npm start

# 3. Deploy (choose your method)
# Via Vercel CLI with anonymous account
npx vercel --prod

# Or push to anonymous GitHub for auto-deploy
git push origin main
```

## Support

For anonymous support:
- Use Tor Browser to access forums
- Create throwaway accounts
- Never reveal deployment details

