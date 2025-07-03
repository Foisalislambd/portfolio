# Modern Portfolio

A stunning, modern portfolio website built with React, TypeScript, and Tailwind CSS. Features beautiful animations, dark mode, responsive design, and a contact form.

## ✨ Features

- **Modern Design**: Clean, professional layout with beautiful animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations powered by Framer Motion
- **Interactive**: Engaging user interactions and hover effects
- **Contact Form**: Working contact form with validation
- **Project Filtering**: Filter projects by category
- **Skills Visualization**: Animated progress bars for skills
- **SEO Ready**: Optimized meta tags and structure
- **Fast Loading**: Optimized performance with Vite

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd modern-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 🛠️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Hero.tsx** - Name, title, and description
2. **src/components/About.tsx** - About text and statistics
3. **src/components/Contact.tsx** - Contact information
4. **src/components/Footer.tsx** - Footer details
5. **index.html** - Meta tags and page title

### Projects

Add your projects in `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    image: 'path/to/image.jpg',
    category: 'Web Apps',
    technologies: ['React', 'TypeScript', 'etc.'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://your-project.com',
    featured: true,
  },
  // Add more projects...
]
```

### Skills

Update your skills in `src/components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      // Add more skills...
    ]
  },
  // Add more categories...
]
```

### Colors and Styling

The portfolio uses a custom color palette defined in `tailwind.config.js`. You can customize:

- **Primary colors**: Update the `primary` color scheme
- **Secondary colors**: Update the `secondary` color scheme
- **Fonts**: Change font families in the config
- **Animations**: Modify or add new animations

### Social Links

Update social media links throughout the components:

- GitHub: Replace with your GitHub profile
- LinkedIn: Replace with your LinkedIn profile
- Email: Replace with your email address
- Twitter: Replace with your Twitter handle

## 🌙 Dark Mode

The portfolio includes automatic dark mode support that:
- Respects user's system preference
- Allows manual toggle
- Persists preference in localStorage
- Smooth transitions between modes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large screens: 1280px+

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects if needed

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run build && npm run deploy`

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Loading states
- Success/error messages
- Responsive design

To connect it to a backend service:
1. Replace the simulation in `handleSubmit`
2. Add your API endpoint
3. Configure CORS if needed

Popular services:
- Formspree
- Netlify Forms
- EmailJS
- Custom backend

## 🎯 Performance

The portfolio is optimized for performance:
- Lazy loading for images
- Code splitting
- Optimized animations
- Minimal bundle size
- Fast loading times

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- Email: your.email@example.com
- Twitter: @yourusername
- LinkedIn: /in/yourusername

---

**Made with ❤️ and lots of ☕**
