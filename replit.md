# Anshuman Pandey - Portfolio Website

## Overview
A stunning, interactive portfolio website for Anshuman Pandey featuring galaxy-themed design, 3D particle animations, and smooth scroll effects. Built with React, Three.js, GSAP, and Framer Motion.

## Project Architecture

### Frontend Stack
- **React 18** with TypeScript for component architecture
- **Three.js** for WebGL-based particle system (LiquidEther background)
- **GSAP** with ScrollTrigger for smooth scroll animations
- **Framer Motion** for component animations and transitions
- **TailwindCSS** for styling with custom purple/pink/lavender color scheme
- **shadcn/ui** components for consistent UI elements

### Key Features
1. **5-Second Genre Loader** - Animated preloader cycling through tech genres (AI/ML, Full Stack, NLP, Deep Learning, Web3)
2. **Hero Section** - Floating glassmorphic ID card with LiquidEther particle background
3. **Education Section** - Bennett University details with slide-in animations
4. **Experience Timeline** - Interactive timeline for Weber Innovations and Mawai Infotech roles
5. **Projects Showcase** - Dual grid layout for main projects and freelance work
6. **Afflatus RAG Spotlight** - Dedicated section highlighting flagship AI project with neural network background
7. **Skills Constellation** - Animated display of technical skills across categories
8. **Achievements Section** - Flip cards showcasing LeetCode ranking, PPO, and certifications
9. **Contact Section** - Social links and glassmorphic contact cards

## Design System

### Colors
- Purple Primary: `#5227FF`
- Pink Accent: `#FF9FFC`
- Lavender: `#B19EEF`
- Background: Black (`#000000`)
- Foreground: White (`#FFFFFF`)

### Typography
- Primary Font: Poppins (headings, UI)
- Secondary Font: Inter (body text)

### Components
- `/client/src/components/LiquidEther.tsx` - Three.js particle system
- `/client/src/components/ScrollReveal.tsx` - GSAP scroll-based text reveal
- `/client/src/components/GenreLoader.tsx` - Animated preloader
- `/client/src/components/HeroSection.tsx` - Main hero with floating card
- `/client/src/components/EducationSection.tsx` - Education timeline
- `/client/src/components/ExperienceSection.tsx` - Professional experience
- `/client/src/components/ProjectsSection.tsx` - Project showcase
- `/client/src/components/AflatusRAGSection.tsx` - Flagship project spotlight
- `/client/src/components/SkillsSection.tsx` - Skills display
- `/client/src/components/AchievementsSection.tsx` - Achievement cards
- `/client/src/components/ContactSection.tsx` - Contact information

## User Data (from Resume)

### Personal Information
- Name: Anshuman Pandey
- Email: pandeyanshuman212@gmail.com
- Phone: +91 9354861749
- LinkedIn: linkedin.com/in/anshuman0
- GitHub: github.com/Anshuman0737
- LeetCode: leetcode.com/u/anshuman737

### Education
- Bennett University, Noida - B.Tech in Computer Science (AI) - Aug 2022-Present - CGPA: 7.0

### Professional Experience
1. **Weber Innovations** (Oct 2025 - Present)
   - Associate, Digital Infrastructure Department
   - Remote/India

2. **Mawai Infotech Ltd.** (Jun 2025 - Oct 2025)
   - Full Stack Developer Intern
   - Noida, India
   - Earned PPO

### Technical Skills
- **Languages**: Python, JavaScript, C++, Java, TypeScript, SQL, PHP, HTML5, CSS3
- **Frameworks**: React.js, Node.js, Express, Flask, TensorFlow, Keras, PyTorch, Scikit-learn
- **AI/ML**: Deep Learning, NLP, Computer Vision, LangChain, BERT
- **Tools**: Git, Docker, Linux, Firebase, GCP, Apache, MySQL, PostgreSQL

### Projects
1. **TheatreNow** - Movie ticket booking with JWT security (PHP, MySQL, Apache)
2. **MindWave** - EEG emotion detection with CNN-LSTM (TensorFlow, Streamlit)
3. **B2Me** - Online bookstore (Java, MySQL)
4. **Afflatus RAG** - Enterprise AI system for Afflatus Gravures

### Achievements
- Top 18.73% on LeetCode with 200+ problems solved
- CODE Club President - Led 200+ students
- Certifications in Deep Learning, NLP, and C++ OOP

## Development Notes

### Current State
- All frontend components implemented with exceptional visual quality
- Dark mode forced for portfolio aesthetic
- Glassmorphic design with purple gradient accents throughout
- Smooth scroll animations using GSAP ScrollTrigger
- Interactive particle background using Three.js
- Fully responsive across all breakpoints

### Next Steps
- Backend API for resume PDF serving (already in public folder)
- Final integration testing and polish
- Performance optimization if needed

## Running the Application
The workflow "Start application" runs `npm run dev` which starts both Express backend and Vite frontend on the same port.

## Resume
The resume PDF is located at `/client/public/resume.pdf` and is accessible via the "View Resume" button in the hero section.
