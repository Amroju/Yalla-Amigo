# Yalla Amigo Restaurant Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from tul8te.com's smooth scroll-based animations and modern web presence, combined with restaurant industry leaders like Noma, Eleven Madison Park, and modern food delivery platforms.

## Brand Identity & Color System

**Primary Colors** (extracted from logo):
- Red: #D62027 (primary brand color, use for CTAs, accents)
- Green: #5BA240 (secondary brand, use for success states, highlights)
- White: Base/neutral backgrounds

**Color Application**:
- Soft gradients combining red-to-orange or green-to-teal for modern feel
- Use brand colors as overlays on images (15-20% opacity)
- White space as dominant background for content sections
- Avoid harsh color blocks; prefer subtle gradients and transparency

## Typography Hierarchy

**Font Selection**: Google Fonts via CDN
- Display/Headings: Playfair Display or Cormorant (elegant, restaurant-appropriate)
- Body: Inter or Manrope (clean, bilingual-friendly)

**Hierarchy**:
- H1: 4xl-6xl (hero headlines)
- H2: 3xl-4xl (section titles)
- H3: xl-2xl (subsection titles, dish names)
- Body: base-lg (descriptions, content)
- Small: sm (metadata, footnotes)

## Layout System

**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Component spacing: gap-8 to gap-12
- Content margins: mx-4 md:mx-8 lg:mx-auto with max-w-7xl

**Grid Structure**:
- Menu items: 2 columns mobile, 3 columns tablet, 4 columns desktop
- Reviews: Single column mobile, 2-3 columns desktop
- Hero: Full-width with centered content overlay

## Component Library

### Navigation
- Fixed header with language toggle (IT/EN flags or text)
- Logo center or left-aligned
- Smooth scroll navigation links
- Semi-transparent background with blur on scroll

### Hero Section
- Full viewport height (90vh)
- **Large hero image**: High-quality food photography with restaurant ambiance
- Dark gradient overlay (bottom to top, 60% to 0% opacity)
- Centered headline + tagline
- Primary CTA button with blurred background (rgba white/10% with backdrop-blur)
- Subtle parallax scroll effect on background image

### Menu Section
- Premium food photography for EVERY dish
- Card-based layout with soft shadows (not harsh borders)
- Image aspect ratio: 4:3 or 1:1
- Dish name in bold above description
- Hover effect: subtle lift (transform translateY -4px)

### About/Info Section
- Split layout: Embedded Google Maps (50%) + Info (50%) on desktop
- Stack vertically on mobile
- Opening hours in structured list format
- Phone number as clickable link
- Address with map pin icon

### Reviews Section
- Card-based testimonials with customer name/photo placeholders
- Google star rating visual (5-star display)
- Quote marks for review text
- Light background cards with subtle borders

### Order CTA
- Prominent Glovo button in brand red
- Icon integration (Glovo logo or delivery icon)
- Supporting text: "Order now through Glovo"
- Place in hero AND as floating/sticky element on menu page

### Footer
- Multi-column: Quick Links | Contact | Hours | Social
- Language switcher repeated
- Brand colors used sparingly for dividers/icons
- Copyright and legal links

## Animation Strategy

**Scroll-Based Animations** (inspired by tul8te.com):
- Fade-in + slide-up for section entries (stagger children by 100ms)
- Parallax on hero image (0.5x scroll speed)
- Menu cards: fade + scale on scroll into view
- Smooth transitions (300-400ms ease-out)

**Micro-interactions**:
- Button hover: subtle scale (1.02x) + shadow increase
- Navigation links: underline animation on hover
- Menu cards: lift on hover
- NO aggressive animations—keep professional and appetizing

## Images

**Hero**: 
- Full-width background image showing signature dish or restaurant interior/exterior
- High resolution, professionally shot
- Warm lighting, inviting atmosphere

**Menu Items**: 
- Individual dish photography
- Consistent lighting and styling across all images
- White or neutral backgrounds preferred
- Minimum 800x600px resolution

**About Section**:
- Restaurant storefront or interior ambiance shot
- Team photo (optional but recommended)

## Accessibility & Localization

- Language toggle visible at all times (top-right header)
- All text content duplicated in IT/EN
- Form labels and buttons translated
- RTL-ready layout structure (though not required for IT/EN)
- Maintain consistent spacing/layout across both languages

## Mobile-First Considerations

- Stack all multi-column layouts on mobile
- Hero height: 70vh on mobile vs 90vh desktop
- Touch-friendly buttons (min 44x44px)
- Simplified navigation (hamburger menu on mobile)
- Optimized image loading for mobile bandwidth

## Performance & Polish

- Lazy load images below fold
- Optimize food photography (WebP format preferred)
- Smooth scroll polyfill for Safari compatibility
- Preload hero image for instant display
- Animation only on devices that support reduced-motion preferences

**Critical Success Factors**: Premium food presentation, effortless bilingual switching, clear path to Glovo ordering, trustworthy reviews display, and smooth, delightful animations that enhance rather than distract from the culinary experience.