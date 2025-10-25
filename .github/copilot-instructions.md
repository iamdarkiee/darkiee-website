# Darkiee Website - AI Agent Instructions

## Project Overview

This is a multi-page static website for Darkiee, a technology company. The site is built with vanilla HTML, CSS, and JavaScript using Bootstrap 5 framework, deployed via GitHub Pages.

## Architecture & Structure

### Key Pages (All follow the same template structure)

- `index.html` - Homepage with carousel, services, team sections
- `about.html`, `service.html`, `contact.html` - Standard pages
- Commented-out pages: `blog.html`, `detail.html`, `price.html`, `quote.html`, `team.html`, `testimonial.html`, `feature.html`

### Critical Template Patterns

**Every HTML page must include this exact structure:**

1. **Standard Head Setup**:

   ```html
   <meta name="title" content="Darkiee - Where Tech Takes Shape" />
   <meta
     name="description"
     content="At Darkiee, we're on a relentless quest..."
   />
   <meta name="keywords" content="Tech,Python,AWS,Darkiee,Deepak Patidar,..." />
   <meta name="author" content="Deepak Patidar" />
   ```

2. **Topbar** (contact info bar at top):

   - Address: "Sector-B, Suryadev Nagar, Indore, MP"
   - Phone: "+91-9399811283"
   - Email: "info@darkiee.com"
   - Social links (Instagram is active: `https://www.instagram.com/team__darkiee?igsh=MWpybHk3OW1pZ3R0ag==`)

3. **Navbar Logo Component** - ALWAYS use this exact structure:

   ```html
   <div class="Navbar-logo-div">
     <img
       src="./img/logo-removebg-preview.png"
       alt=""
       class="Navbar-logo-div-img"
       id="chg-clr"
     />
     <h1 class="m-0 Navbar-logo-div-h1">Darkiee</h1>
   </div>
   ```

   - The `#chg-clr` ID is critical for JavaScript logo color inversion on scroll
   - This structure appears in both navbar AND footer

4. **Footer** - Two-section layout with dark background, includes identical logo structure

### JavaScript Behavior (`js/main.js`)

**Sticky Navbar with Logo Color Inversion**:

```javascript
$(window).scroll(function () {
  if ($(this).scrollTop() > 45) {
    $(".navbar").addClass("sticky-top shadow-sm");
    document.getElementById("chg-clr").style.filter = "invert(1)"; // Inverts logo color
  } else {
    $(".navbar").removeClass("sticky-top shadow-sm");
    document.getElementById("chg-clr").style.filter = "none";
  }
});
```

The logo inverts color when navbar becomes sticky - critical UX pattern.

**jQuery Carousels**:

- `testimonial-carousel` - center mode, 1-3 items depending on breakpoint
- `vendor-carousel` - 2-8 items, no dots, auto-play
- Uses Owl Carousel library

### CSS Architecture (`css/style.css`)

**Color Variables** (always use these):

```css
--primary: #06a3da; /* Blue */
--secondary: #34ad54; /* Green */
--light: #eef9ff;
--dark: #091e3e;
```

**Custom Logo Styles**:

```css
.Navbar-logo-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Navbar-logo-div-img {
  width: 67px;
}
.Navbar-logo-div-h1 {
  position: relative;
  top: 5px;
}
```

**Responsive Navbar Behavior**:

- Desktop (>992px): Absolute positioning, transparent background
- Mobile (≤991px): Relative positioning, white background
- Sticky state changes text color from white to dark

### External Dependencies (Loaded via CDN)

- Bootstrap 5.0.0
- jQuery 3.4.1
- Font Awesome 5.10.0
- Bootstrap Icons 1.4.1
- WOW.js (scroll animations)
- Owl Carousel (carousels)
- CounterUp (number animations)
- Waypoints (scroll triggers)

## Development Workflow

**Deployment**: Automatic via GitHub Actions (`.github/workflows/static.yml`)

- Pushes to `master` branch auto-deploy to GitHub Pages
- Entire repository is uploaded (static site, no build step)

**Testing Locally**: Open HTML files directly in browser or use simple HTTP server:

```bash
python -m http.server 8000
# Or
npx serve .
```

## Common Tasks

**Adding a New Page**:

1. Copy structure from `index.html`
2. Update `<title>` and page-specific meta tags
3. Ensure topbar, navbar with `#chg-clr` logo, and footer are included
4. Add navigation link in navbar across ALL pages
5. Use WOW.js classes for animations: `wow fadeInUp`, `wow zoomIn`, etc.

**Modifying Contact Information**:
Update in THREE places: topbar, footer "Get In Touch" section, and contact page body

**Adding Services/Team Members**:
Follow the card structure in `index.html`:

- Services: `.service-item` with icon, heading, description
- Team: `.team-item` with image, name, title, social links

**Working with Images**:
All images in `img/` directory. Team photos: `deepak2.png`, `owner.jpeg`, `kapil.jpg`

## Known Issues & Patterns

- Some pages have inconsistent email addresses (`info@darkiee.com` vs `info@darkie.com`) - use `info@darkiee.com`
- Invalid HTML tag: `<butaton>` instead of `<button>` in search modal trigger (present across files)
- Many sections are commented out (pricing, testimonials, blog) - don't remove comments without confirmation
- The search modal is non-functional (no backend implementation)

## SEO & Meta

Every page should have identical SEO meta tags (see index.html) with page-specific title. Keywords emphasize: Tech, Python, AWS, Darkiee, Deepak Patidar, Software Engineer.
