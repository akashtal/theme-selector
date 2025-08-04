# MultiTheme React Application

A modern, responsive React application built with Vite, TypeScript, and Styled Components that demonstrates dynamic theming capabilities with three distinct themes.

## 🎨 Features

### Theme System
- **Theme 1 (Minimalist)**: Clean, light design with sans-serif typography
- **Theme 2 (Dark Sidebar)**: Dark mode with sidebar navigation and serif fonts
- **Theme 3 (Colorful Cards)**: Vibrant design with card-based layout and playful typography

### Core Features
- ✅ **Dynamic Theme Switching** - Seamlessly switch between three completely different themes
- ✅ **Theme Persistence** - Themes are saved to localStorage and persist across page reloads
- ✅ **Responsive Design** - Fully responsive layout for desktop, tablet, and mobile devices
- ✅ **React Router** - Multi-page navigation with Home, About, and Contact pages
- ✅ **Context API** - Theme management using React Context API
- ✅ **TypeScript** - Full TypeScript support for type safety
- ✅ **Styled Components** - CSS-in-JS styling with theme integration
- ✅ **API Integration** - Fetches product data from FakeStore API
- ✅ **Smooth Animations** - Subtle animations and transitions for theme switching
- ✅ **Accessibility** - Focus management and keyboard navigation support

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd multi-theme-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Main navigation header
│   ├── Sidebar.tsx             # Sidebar for dark theme
│   ├── ProductCard.tsx         # Product display component
│   └── styled/
│       └── GlobalStyles.tsx    # Global styled components
├── context/
│   └── ThemeContext.tsx        # Theme context and provider
├── pages/
│   ├── Home.tsx                # Home page with products
│   ├── About.tsx               # About page
│   └── Contact.tsx             # Contact page with form
├── themes/
│   └── themeDefinitions.ts     # Theme definitions
├── types/
│   └── theme.ts                # TypeScript type definitions
├── App.tsx                     # Main app component
└── main.tsx                    # App entry point
```

## 🎯 Theme Details

### Theme 1: Minimalist
- **Colors**: Light background with blue accents
- **Typography**: Inter font family
- **Layout**: Clean, centered content
- **Spacing**: Compact and organized

### Theme 2: Dark Sidebar
- **Colors**: Dark background with purple accents
- **Typography**: Playfair Display serif font
- **Layout**: Sidebar navigation with main content area
- **Spacing**: Generous spacing for readability

### Theme 3: Colorful Cards
- **Colors**: Warm, vibrant color palette
- **Typography**: Pacifico cursive font
- **Layout**: Card-based grid layout
- **Spacing**: Playful, generous spacing

## 🔧 Technical Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **Context API** - State management for themes

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔒 Security Features

- TypeScript for type safety
- Input validation on forms
- Secure API calls with error handling
- XSS protection through React's built-in sanitization

## 🎨 Customization

### Adding New Themes

1. Define theme in `src/themes/themeDefinitions.ts`:
```typescript
theme4: {
  name: 'New Theme',
  colors: { /* color palette */ },
  typography: { /* font settings */ },
  spacing: { /* spacing values */ },
  layout: { /* layout properties */ }
}
```

2. Update the `ThemeType` in `src/types/theme.ts`
3. Add theme option to the dropdown in `src/components/Header.tsx`

### Modifying Existing Themes

Edit the theme definitions in `src/themes/themeDefinitions.ts` to customize colors, fonts, spacing, and layout properties.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com/) for product data
- [Google Fonts](https://fonts.google.com/) for typography
- [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) communities

## 📞 Support

For support and questions, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ using React, TypeScript, and Styled Components**
