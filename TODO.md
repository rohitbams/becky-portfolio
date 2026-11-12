# Portfolio TODO List

## High Priority

### 1. YouTube Player API Implementation
**Status:** Not Started
**Goal:** Remove YouTube branding, hide title overlay, custom controls

**Steps:**
1. Load YouTube IFrame Player API
2. Replace iframe with div + initialize with JS
3. Configure player options (hide branding)
4. Test autoplay/mute/mobile

**Resources:** [YouTube API Docs](https://developers.google.com/youtube/iframe_api_reference)

---

### 2. Film Projects Grid Restructure
**Status:** Not Started
**Goal:** 3-column grid with click-to-expand modals

**Layout:**
- Grid: 3 cols (desktop), 2 cols (tablet), 1 col (mobile)
- Grid item: thumbnail + title + year
- Click opens modal: full description, slideshow, awards, links

**Steps:**
1. CSS grid layout
2. Modal component with transitions
3. Click handlers + keyboard nav (ESC, arrows)
4. Mobile testing
5. Accessibility (focus trap, aria-labels)

---

## Medium Priority

### 3. Accessibility Improvements
**Status:** ✅ COMPLETED
- ✅ Slideshow controls have aria-labels
- ✅ Skip navigation links added
- ✅ Focus indicators on all interactive elements
- ✅ Navigation wrapped in nav with aria-label
- ✅ Form has proper labels and aria-required
- ✅ Video iframe has descriptive title

---

### 4. Contact Form Backend Integration
**Status:** Not Started
**Goal:** Connect form to email service

**Recommended:** Formspree (50 submissions/month free)

**Steps:**
1. Sign up at formspree.io
2. Create form, get ID
3. Update form action to `https://formspree.io/f/YOUR_FORM_ID`
4. Add honeypot for spam
5. Test submissions

**Alternative:** EmailJS (200/month, more control, requires JS)

---

## Low Priority

### 5. Performance Optimizations
**Status:** Not Started
**Goal:** Faster load times, better UX

- Compress images (WebP + JPEG fallback)
- Add lazy loading: `loading="lazy"` to images
- Minify CSS/JS
- Preload critical assets

**Tools:** TinyPNG, Squoosh, PurgeCSS

---

### 6. SEO Improvements
**Status:** Not Started
**Goal:** Better search visibility and social sharing

- Meta descriptions for each page
- Open Graph + Twitter Card tags
- Structured data (JSON-LD)
- robots.txt + sitemap.xml

---

### 7. Analytics Integration
**Status:** Not Started
**Options:** Plausible (€9/mo), Google Analytics (free), Fathom ($14/mo)

**Track:** Page views, navigation clicks, form submissions, video plays

---

### 8. DJ Work Page Content
**Status:** Waiting on Content

**Ideas:**
- Mixcloud/SoundCloud embeds
- Event calendar
- DJ bio
- Booking info
- Event photos

---

## Future Enhancements

- Scroll animations
- Blog/news section
- Multi-language support
- Dark mode toggle

---

## Deployment Checklist

- [ ] Purchase domain
- [ ] Set up hosting (Vercel/Netlify/GitHub Pages)
- [ ] Connect domain + SSL
- [ ] Test browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test mobile (iOS, Android)
- [ ] Accessibility audit
- [ ] Performance audit (Lighthouse)
- [ ] Set up analytics
- [ ] Connect contact form
- [ ] Add favicon
- [ ] Social preview images
