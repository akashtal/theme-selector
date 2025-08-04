import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';


const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 999;
  transition: ${({ theme }) => theme.layout.transition};
  overflow-y: auto;

  @media (max-width: 768px) {
    transform: translateX(-100%);
    width: 280px;
  }
`;

const SidebarContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SidebarTitle = styled.h2`
  color: ${({ theme }) => theme.colors.surface};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin: 0;
`;

const SidebarSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  margin: ${({ theme }) => theme.spacing.sm} 0 0 0;
`;

const SidebarNav = styled.nav`
  flex: 1;
`;

const SidebarNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarNavItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SidebarNavLink = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme, $active }) => $active ? theme.colors.accent : theme.colors.textSecondary};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  background: ${({ theme, $active }) => $active ? theme.colors.secondary : 'transparent'};
  transition: ${({ theme }) => theme.layout.transition};
  font-weight: ${({ theme, $active }) => $active ? theme.typography.fontWeight.bold : theme.typography.fontWeight.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateX(5px);
  }

  &::before {
    content: '';
    width: 3px;
    height: 20px;
    background: ${({ theme, $active }) => $active ? theme.colors.accent : 'transparent'};
    margin-right: ${({ theme }) => theme.spacing.md};
    border-radius: 2px;
    transition: ${({ theme }) => theme.layout.transition};
  }
`;

const SidebarFooter = styled.div`
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: auto;
`;

const SidebarFooterText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  text-align: center;
  margin: 0;
`;

const Sidebar: React.FC = () => {

  const location = useLocation();

  const navItems = [
    { to: '/', label: '🏠 Dashboard', icon: '🏠' },
    { to: '/about', label: 'ℹ️ About', icon: 'ℹ️' },
    { to: '/contact', label: '📧 Contact', icon: '📧' },
  ];

  return (
    <SidebarContainer>
      <SidebarContent>
        <SidebarHeader>
          <SidebarTitle>MultiTheme</SidebarTitle>
          <SidebarSubtitle>Dark Sidebar Layout</SidebarSubtitle>
        </SidebarHeader>

        <SidebarNav>
          <SidebarNavList>
            {navItems.map((item) => (
              <SidebarNavItem key={item.to}>
                <SidebarNavLink
                  to={item.to}
                  $active={location.pathname === item.to}
                >
                  {item.label}
                </SidebarNavLink>
              </SidebarNavItem>
            ))}
          </SidebarNavList>
        </SidebarNav>

        <SidebarFooter>
          <SidebarFooterText>
            Built with React & Styled Components
          </SidebarFooterText>
        </SidebarFooter>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;