# Basel's Electronics Portfolio - React Version

A modern, interactive 3D portfolio website built with React, showcasing Arduino projects, electronics solutions, and IoT innovations.

## 🚀 Features

- **React Framework**: Built with React 18 and modern hooks
- **React Router**: Individual project pages with routing
- **3D Animations**: Framer Motion for smooth animations
- **Theme Support**: Light and dark mode with context
- **Multilingual**: English/Arabic translation support
- **Responsive Design**: Works on all devices
- **Interactive Project Pages**: Detailed project descriptions with code
- **Modern UI/UX**: Styled-components for styling

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects grid
│   ├── Skills.jsx      # Skills section
│   ├── Contact.jsx     # Contact section
│   └── CursorFollower.jsx # Cursor animation
├── contexts/           # React contexts
│   ├── ThemeContext.jsx    # Theme management
│   └── LanguageContext.jsx # Language management
├── data/               # Project data
│   └── projects.js     # Project information
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   └── ProjectPage.jsx # Individual project pages
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **React Router DOM**: Client-side routing
- **Styled Components**: CSS-in-JS styling
- **Framer Motion**: Animation library
- **React Helmet Async**: SEO and meta tags
- **Vite**: Fast build tool and dev server

## 🎯 Projects Featured

1. **Bluetooth LCD Advertisement Display**
2. **Ultrasonic Distance Alert System**
3. **Mobile App Controlled LED**
4. **Autonomous Obstacle Avoiding Robot**
5. **Bluetooth Controlled Robot Car**
6. **Traffic Light Control System**
7. **Advanced Obstacle Avoider Robot**

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd basel-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎨 Features in Detail

### Theme System
- Light and dark mode toggle
- Persistent theme preference
- Smooth transitions between themes
- CSS custom properties for easy customization

### Language System
- English and Arabic support
- RTL (Right-to-Left) layout for Arabic
- Persistent language preference
- Context-based translation system

### Project Pages
- Individual pages for each project
- Detailed descriptions and features
- Complete Arduino code examples
- Syntax highlighting with Prism.js
- Responsive design

### Animations
- Framer Motion for smooth animations
- Scroll-triggered animations
- Hover effects and transitions
- 3D visual elements

## 🔧 Customization

### Adding New Projects

1. **Add project data** in `src/data/projects.js`:
   ```javascript
   'new-project': {
     id: 'new-project',
     title: {
       en: 'Project Title',
       ar: 'عنوان المشروع'
     },
     description: {
       en: 'Project description...',
       ar: 'وصف المشروع...'
     },
     // ... other properties
   }
   ```

2. **The project will automatically appear** in the projects grid and be accessible via routing.

### Customizing Styles

- Modify CSS custom properties in `src/index.css`
- Update styled-components in individual components
- Add new animations with Framer Motion

### Adding New Languages

1. **Extend the language context** in `src/contexts/LanguageContext.jsx`
2. **Add translations** to all components
3. **Update the language toggle** logic

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 768px, 480px
- Touch-friendly interactions
- Optimized for all screen sizes

## 🎯 Performance Features

- **Code Splitting**: Automatic with React Router
- **Lazy Loading**: Images and components
- **Optimized Bundle**: Vite's built-in optimizations
- **Efficient Re-renders**: React.memo and useMemo
- **Smooth Animations**: Hardware-accelerated CSS

## 🔍 SEO Features

- React Helmet for meta tags
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will automatically detect it's a Vite project
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for React Router

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support:
- Email: basel@electronics.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

**Built with ❤️ by Basel - Electronics Engineer & IoT Developer**

*React + Vite + Styled Components + Framer Motion*