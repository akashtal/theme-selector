import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import type { ThemeType } from '../types/theme';

const HeaderContainer = styled.header<{ $isSidebar: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  transition: ${({ theme }) => theme.layout.transition};
  
  ${({ $isSidebar }) => $isSidebar && `
    left: 250px;
    right: 0;
  `}

  @media (max-width: 768px) {
    ${({ $isSidebar }) => $isSidebar && `
      left: 0;
    `}
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: ${({ theme }) => theme.layout.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.05);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${({ theme, $active }) => $active ? theme.colors.accent : theme.colors.text};
  text-decoration: none;
  font-weight: ${({ theme, $active }) => $active ? theme.typography.fontWeight.bold : theme.typography.fontWeight.normal};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  transition: ${({ theme }) => theme.layout.transition};
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.background};
  }

  ${({ $active, theme }) => $active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -${theme.spacing.xs};
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: ${theme.colors.accent};
      border-radius: 1px;
    }
  `}
`;

const ThemeSelector = styled.div`
  position: relative;
`;

const ThemeButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: ${({ theme }) => theme.layout.transition};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }

  &::after {
    content: '▼';
    font-size: 0.8em;
    transition: transform 0.3s ease;
  }

  &[aria-expanded="true"]::after {
    transform: rotate(180deg);
  }
`;

const ThemeDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  min-width: 150px;
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  transform: translateY(${({ $isOpen }) => $isOpen ? '0' : '-10px'});
  transition: all 0.3s ease;
  z-index: 1001;
`;

const ThemeOption = styled.button<{ $active: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme, $active }) => $active ? theme.colors.accent : 'transparent'};
  color: ${({ theme, $active }) => $active ? theme.colors.surface : theme.colors.text};
  border: none;
  text-align: left;
  cursor: pointer;
  transition: ${({ theme }) => theme.layout.transition};
  font-size: ${({ theme }) => theme.typography.fontSize.small};

  &:hover {
    background: ${({ theme, $active }) => $active ? theme.colors.accent : theme.colors.background};
  }

  &:first-child {
    border-radius: ${({ theme }) => theme.layout.borderRadius} ${({ theme }) => theme.layout.borderRadius} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${({ theme }) => theme.layout.borderRadius} ${({ theme }) => theme.layout.borderRadius};
  }
`;



const Header: React.FC = () => {
  const { currentTheme, theme, setTheme } = useTheme();
  const location = useLocation();
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);


  const isSidebar = currentTheme === 'theme2';

  const themeOptions: { value: ThemeType; label: string }[] = [
    { value: 'theme1', label: 'Minimalist' },
    { value: 'theme2', label: 'Dark Sidebar' },
    { value: 'theme3', label: 'Colorful Cards' },
  ];

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const handleThemeChange = (newTheme: ThemeType) => {
    setTheme(newTheme);
    setIsThemeDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.closest('[data-theme-selector]')) {
      setIsThemeDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <HeaderContainer $isSidebar={isSidebar}>
      <HeaderContent>
        <Logo to="/">🎨 MultiTheme</Logo>
        
        <Nav>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              $active={location.pathname === link.to}
            >
              {link.label}
            </NavLink>
          ))}
          
          <ThemeSelector data-theme-selector>
            <ThemeButton
              onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
              aria-expanded={isThemeDropdownOpen}
            >
              {theme.name}
            </ThemeButton>
            
            <ThemeDropdown $isOpen={isThemeDropdownOpen}>
              {themeOptions.map((option) => (
                <ThemeOption
                  key={option.value}
                  $active={currentTheme === option.value}
                  onClick={() => handleThemeChange(option.value)}
                >
                  {option.label}
                </ThemeOption>
              ))}
            </ThemeDropdown>
          </ThemeSelector>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;