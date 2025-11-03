# Portfolio Website Design Guidelines for Anshuman Pandey

## Design Approach
**Reference-Based Approach** inspired by igloo.inc's award-winning 3D portfolio aesthetics combined with galaxy-themed visual identity. Dark mode with minimal 2-color palette enhanced by purple/violet accents, scroll-driven narrative, and interactive 3D elements.

## Core Design Principles
- **Immersive Scrollytelling**: Each scroll reveals purposeful, animated content sections
- **3D Interactive Elements**: Floating, physics-based components that respond to user interaction
- **Glassmorphic Depth**: Layered transparency with soft shadows and glowing edges
- **Performance-First**: Smooth 60fps animations with optimized asset loading

---

## Color System
This design uses the provided LiquidEther color palette:
- Primary Purple: `#5227FF`
- Accent Pink: `#FF9FFC`
- Secondary Lavender: `#B19EEF`
- Base: Deep black `#000000`
- Text: Pure white `#FFFFFF` with opacity variations

---

## Typography Hierarchy

### Font Families
- **Primary**: "Poppins" (Google Fonts) - Headings and UI
- **Secondary**: "Inter" (Google Fonts) - Body text and descriptions

### Scale & Weights
- **Hero Title**: 4rem (64px) / Bold 700
- **Section Headers**: 2.5rem (40px) / SemiBold 600
- **Card Titles**: 1.5rem (24px) / Medium 500
- **Body**: 1rem (16px) / Regular 400
- **Caption**: 0.875rem (14px) / Regular 400

---

## Layout System

### Spacing Primitives
Use Tailwind units: **2, 4, 8, 12, 16, 20, 24** (e.g., `p-8`, `gap-12`, `mt-20`)
- Micro spacing: `space-2`, `gap-4`
- Component padding: `p-8`, `p-12`
- Section spacing: `py-20`, `py-24`
- Large gaps: `mt-32`

### Container Strategy
- **Full viewport sections**: `w-full min-h-screen`
- **Content max-width**: `max-w-7xl mx-auto px-8`
- **Text content**: `max-w-4xl`

---

## Component Library

### 1. Pre-Loader (5 Seconds)
**Visual Treatment**: Full-screen black backdrop with centered animated text displaying tech genres sequentially
- Genres cycle: "AI/ML" → "Full Stack" → "NLP" → "Deep Learning" → "Web3" → Fade to main site
- Typography: 3rem bold, glowing purple outline effect
- Transition: Each genre fades in (0.3s), holds (0.7s), fades out (0.3s)
- Exit: Entire loader dissolves with upward particle burst at 5 seconds

### 2. Hero Section - Floating Lanyard Card
**Layout**: Full viewport height with centered floating card
- **Background**: Full-screen LiquidEther component with purple gradient fluid simulation responding to cursor
- **Lanyard Card**: Glassmorphic ID card (400px × 550px) with subtle floating animation (2s ease-in-out loop)
  - Initials "AP" at top in 4rem purple glow
  - Name "Anshuman Pandey" in 2rem white
  - Tagline "AI/ML Enthusiast • Full Stack Developer" in 1rem lavender
  - Location pin icon + "Bennett University • Noida, India"
  - Two action buttons with backdrop blur: "View Resume" (primary purple) and "Email Me" (outline)
- **Lanyard String**: Physics-enabled rope rendering above card using provided Lanyard component
- **Scroll Indicator**: Animated down arrow (↓) pulsing at bottom center

### 3. Education Section
**Layout**: Single card with slide-in from left animation
- **Bennett University Logo**: Left aligned (if available, else icon placeholder)
- **Content Structure**:
  - University name in 1.75rem semibold
  - Degree details: "B.Tech – Computer Science (AI & Machine Learning)"
  - Duration and CGPA with subtle divider
  - Key achievements in bullet list with gradient bullets
- **Card Style**: Glassmorphic with 1px purple border-glow
- **Animation**: ScrollReveal with rotation and blur effect

### 4. Experience Timeline
**Layout**: Vertical timeline with alternating left/right cards
- **Timeline Spine**: Vertical purple gradient line (4px) with glowing nodes at each role
- **Experience Cards** (2 total: Weber Innovations, Mawai Infotech):
  - Company logo/icon in 64px circle
  - Role title in 1.5rem semibold
  - Date range with calendar icon
  - 3-4 key responsibilities with checkmark bullets
  - Glassmorphic cards with hover glow intensification
- **Spacing**: 24px between cards

### 5. Projects Showcase - Dual Grid
**Main Projects Section**:
- Grid layout: 2 columns on desktop, 1 on mobile
- **Featured Cards** (TheatreNow, MindWave, B2Me):
  - Project thumbnail image (16:9 ratio, 600px × 338px)
  - Title overlay with gradient fade
  - Tech stack badges (pill-shaped, 8px radius)
  - Hover state: Card lifts with purple shadow glow, image scales 1.05x
  - "View Details" button appears on hover with blur backdrop

**Freelance Projects Section**:
- Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile
- Compact cards with icon instead of full image
- Client name + project type
- Completion date badge
- Subtle purple border on hover

### 6. Afflatus RAG Spotlight
**Layout**: Full-width hero-style section with neural network background animation
- **Background**: Animated connected nodes/particles forming network patterns
- **Title**: "Afflatus RAG" in 3.5rem with subtitle "The Intelligent Core of Afflatus Gravures"
- **Description**: Centered prose (max-w-3xl) with ScrollReveal animation
- **Subsystem Grid**: 5 interactive cards in responsive grid
  - Cards: AI Core, Backend, Knowledge Base, Analytics Dashboard, System Integration
  - Each card: Icon (64px), title, brief description
  - Card interaction: On hover, purple glow border expands and content slides up revealing "Learn More" link
- **CTA Button**: "Explore Full Case Study" centered below grid

### 7. Skills Constellation
**Layout**: Circular/orbital animation displaying tech icons
- **Center**: Rotating "Tech Stack" label
- **Orbits**: 3 concentric circles with icons (total 15-20 skills)
  - Inner orbit: Core languages (Python, JavaScript, C++)
  - Middle orbit: Frameworks (React, Node.js, TensorFlow)
  - Outer orbit: Tools (Docker, Git, Firebase)
- **Icons**: 48px with white fill, purple glow on hover
- **Animation**: Continuous slow rotation (30s per revolution), icons pulse subtly
- **Mobile Adaptation**: Switch to static 4-column grid

### 8. Achievements & Certifications
**Layout**: Masonry grid with flip cards
- **Card Style**: 300px × 200px flip cards with 3D rotation on hover
- **Front Face**: Achievement icon + title
- **Back Face**: Full details + date + issuing organization
- **Grid**: 3 columns desktop, 2 tablet, 1 mobile
- **Items**: LeetCode ranking, PPO achievement, CODE Club leadership, Coursera certifications

### 9. Contact Section
**Layout**: Two-column split (60/40) on desktop, stacked on mobile
- **Left Column**: Contact form with glassmorphic styling
  - Fields: Name, Email, Message (all with floating labels)
  - Submit button with purple gradient, sends confirmation particle burst
- **Right Column**: 
  - Social links as large icon buttons (LinkedIn, GitHub, LeetCode, Discord)
  - Email with copy-to-clipboard interaction
  - Location map placeholder or office hours info

---

## Animations Strategy

### Scroll-Triggered Animations (GSAP)
- **Section Entry**: Fade up with 40px translation, stagger children by 0.1s
- **Parallax**: Background elements move at 0.6x scroll speed
- **Progress Indicator**: Fixed purple line on left edge grows with scroll progress

### Physics Interactions
- Lanyard card responds to cursor with spring physics
- LiquidEther fluid simulation follows mouse movement with 100px cursor influence
- Cards tilt subtly on hover using transform perspective

### Micro-Interactions
- Button hover: Scale 1.02x with purple glow expansion
- Links: Underline grows from left on hover (0.2s)
- Form inputs: Purple bottom border thickness increases on focus

---

## Images

### Hero Section
**Large Background**: LiquidEther animated component (no static image needed)
**Lanyard Card**: Profile photo placeholder in top section of ID card (200px × 200px circular crop)

### Project Cards
- **TheatreNow**: Movie seat selection interface screenshot (600×338px)
- **MindWave**: EEG waveform dashboard visualization (600×338px)
- **B2Me**: Bookstore homepage screenshot (600×338px)

### Experience Section
- Company logos: Weber Innovations (100×100px), Mawai Infotech (100×100px) with transparent backgrounds

### Afflatus RAG Section
**Background**: Animated neural network nodes (generated via canvas/SVG, not static image)

---

## Responsive Breakpoints
- **Desktop**: 1280px+ (full experience)
- **Tablet**: 768px-1279px (2-column grids, reduced animations)
- **Mobile**: <768px (single column, simplified animations, hamburger menu)

---

## Accessibility
- All interactive elements have 44px minimum touch targets
- Form inputs have visible focus states with 2px purple outline
- Alt text for all images
- Semantic HTML5 structure (header, main, section, article)
- ARIA labels for icon-only buttons
- Color contrast ratio 4.5:1 minimum for body text