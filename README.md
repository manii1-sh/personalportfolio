# 🚀 Manish Pardhi - Personal Portfolio

A modern, interactive 3D portfolio website showcasing my expertise as a Machine Learning and Flutter Developer. Built with React, Three.js, and cutting-edge web technologies.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.176.0-orange)
![Vite](https://img.shields.io/badge/Vite-5.2.8-purple)

## 🌟 Features

- **Interactive 3D Elements** - Stunning 3D computer model with smooth animations
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI/UX** - Clean, professional design with smooth transitions
- **Contact Integration** - Functional contact form with EmailJS
- **Project Showcase** - Interactive project cards with live demos
- **Performance Optimized** - Fast loading with optimized assets

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

### 3D Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### Additional Libraries
- **EmailJS** - Contact form functionality
- **React Router** - Client-side routing
- **React Parallax Tilt** - Interactive tilt effects

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/manii1-sh/personalportfolio.git
   cd personalportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── canvas/         # 3D components (Three.js)
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form
│   ├── Experience.jsx  # Work experience
│   ├── Hero.jsx        # Landing section
│   ├── Navbar.jsx      # Navigation
│   ├── Tech.jsx        # Technologies
│   └── Works.jsx       # Projects showcase
├── constants/          # Data and configuration
├── hoc/               # Higher-order components
├── utils/             # Utility functions
├── assets/            # Static assets
└── styles/            # Global styles
```

## 🎯 Sections

### 🏠 Hero Section
- Interactive 3D computer model
- Professional introduction
- Smooth scroll navigation

### 👨‍💻 About
- Personal background
- Skills and expertise
- Service offerings

### 💼 Experience
- Current internship at Aarkay Techno Consultants
- Machine Learning and AI projects
- Professional timeline

### 🛠️ Technologies
- Python, PostgreSQL, Excel
- Flutter, Git
- Interactive skill showcase

### 🚀 Projects
- **Real-time Safety Helmet Detection** - Computer vision with YOLO
- **Voice Picking Warehouse System** - Flutter mobile app
- **Steel Metal Bar Detection** - ML-based detection system

### 📞 Contact
- Functional contact form
- EmailJS integration
- Professional contact information

## 🌐 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Vercel
1. Import project from GitHub
2. Vercel will auto-detect the configuration
3. Deploy with one click

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## 📧 Contact Configuration

The contact form uses EmailJS for email functionality. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Update the credentials in `src/components/Contact.jsx`:
   - Service ID
   - Template ID
   - Public Key

## 🎨 Customization

### Personal Information
Update your details in `src/constants/index.js`:
- Personal information
- Projects
- Experience
- Technologies

### Styling
- Modify `src/index.css` for global styles
- Update Tailwind classes in components
- Customize colors in `tailwind.config.js`

### 3D Models
- Replace models in `public/` directory
- Update model paths in canvas components

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## ⚡ Performance

- **Lazy Loading** - Components load on demand
- **Optimized Assets** - Compressed images and models
- **Code Splitting** - Efficient bundle splitting
- **Fast Loading** - Optimized for Core Web Vitals

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

I'm **Manish Pardhi**, a passionate Machine Learning and Flutter Developer with expertise in:

- 🤖 **Machine Learning** - Computer Vision, AI Solutions
- 📱 **Flutter Development** - Cross-platform mobile apps
- 🐍 **Python** - Data analysis, ML algorithms
- 🗄️ **PostgreSQL** - Database management
- 📊 **Data Analysis** - Excel, statistical analysis

Currently interning at **Aarkay Techno Consultants Pvt. Ltd.**, working on vision-based ML projects.

## 🔗 Connect With Me

- **GitHub**: [@manii1-sh](https://github.com/manii1-sh)
- **Email**: manishpardhi1807@gmail.com
- **Portfolio**: [Live Demo](https://your-portfolio-url.com)

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ by [Manish Pardhi](https://github.com/manii1-sh)