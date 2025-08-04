import type { Theme, ThemeType } from '../types/theme';

export const themes: Record<ThemeType, Theme> = {
  theme1: {
    name: 'Minimalist',
    colors: {
      primary: '#2c3e50',
      secondary: '#34495e',
      background: '#f8f9fa',
      surface: '#ffffff',
      text: '#2c3e50',
      textSecondary: '#7f8c8d',
      accent: '#3498db',
      border: '#e9ecef',
      shadow: 'rgba(0, 0, 0, 0.1)',
    },
    typography: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: {
        small: '0.875rem',
        medium: '1rem',
        large: '1.25rem',
        xlarge: '1.5rem',
      },
      fontWeight: {
        normal: '400',
        bold: '600',
      },
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '3rem',
    },
    layout: {
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
  },
  theme2: {
    name: 'Dark Sidebar',
    colors: {
      primary: '#1a1a1a',
      secondary: '#2d2d2d',
      background: '#121212',
      surface: '#1e1e1e',
      text: '#ffffff',
      textSecondary: '#b0b0b0',
      accent: '#bb86fc',
      border: '#333333',
      shadow: 'rgba(0, 0, 0, 0.3)',
    },
    typography: {
      fontFamily: '"Playfair Display", "Times New Roman", serif',
      fontSize: {
        small: '0.9rem',
        medium: '1.1rem',
        large: '1.4rem',
        xlarge: '1.8rem',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
      xxl: '3.5rem',
    },
    layout: {
      borderRadius: '12px',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    },
  },
  theme3: {
    name: 'Colorful Cards',
    colors: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      background: '#f7f1e3',
      surface: '#ffffff',
      text: '#2d3436',
      textSecondary: '#636e72',
      accent: '#fd79a8',
      border: '#ffeaa7',
      shadow: 'rgba(255, 107, 107, 0.2)',
    },
    typography: {
      fontFamily: '"Pacifico", cursive',
      fontSize: {
        small: '1rem',
        medium: '1.2rem',
        large: '1.5rem',
        xlarge: '2rem',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
    spacing: {
      xs: '0.75rem',
      sm: '1.25rem',
      md: '2rem',
      lg: '2.5rem',
      xl: '3rem',
      xxl: '4rem',
    },
    layout: {
      borderRadius: '20px',
      transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      boxShadow: '0 8px 25px rgba(255, 107, 107, 0.2)',
    },
  },
};