import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const AboutContainer = styled.main<{ $isSidebar: boolean }>`
  padding-top: 80px;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  transition: ${({ theme }) => theme.layout.transition};

  ${({ $isSidebar }) => $isSidebar && `
    margin-left: 250px;
    
    @media (max-width: 768px) {
      margin-left: 0;
    }
  `}
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xlarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const PageSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 0.8s ease-out 0.2s both;
`;

const ContentSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  animation: fadeInUp 0.8s ease-out 0.4s both;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${({ theme }) => theme.spacing.sm};
    left: 0;
    width: 50px;
    height: 3px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 2px;
  }
`;

const SectionContent = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  transition: ${({ theme }) => theme.layout.transition};
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.colors.shadow};
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  line-height: 1.6;
`;

const TeamSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  animation: fadeInUp 0.8s ease-out 0.6s both;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const TeamMember = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  transition: ${({ theme }) => theme.layout.transition};
  text-align: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.colors.shadow};
  }
`;

const MemberAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.surface};
`;

const MemberName = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const MemberRole = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const MemberBio = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  line-height: 1.5;
`;

const CTAButton = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: ${({ theme }) => theme.layout.transition};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: ${({ theme }) => theme.spacing.lg};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.colors.shadow};
  }

  &:active {
    transform: translateY(0);
  }
`;

const About: React.FC = () => {
  const { currentTheme } = useTheme();
  const isSidebar = currentTheme === 'theme2';

  return (
    <AboutContainer $isSidebar={isSidebar}>
      <ContentWrapper>
        <HeroSection>
          <PageTitle>About MultiTheme</PageTitle>
          <PageSubtitle>
            A revolutionary React application that demonstrates the power of dynamic theming 
            and responsive design across multiple layouts.
          </PageSubtitle>
        </HeroSection>

        <ContentSection>
          <SectionTitle>Our Mission</SectionTitle>
          <SectionContent>
            <p>
              MultiTheme is designed to showcase the versatility and flexibility of modern web development 
              with React and TypeScript. Our application demonstrates how a single codebase can adapt 
              to completely different visual styles and layouts while maintaining functionality and user experience.
            </p>
            <p>
              We believe that great design should be accessible to everyone, and our multi-theme approach 
              allows users to choose the interface that best suits their preferences and needs.
            </p>
          </SectionContent>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Key Features</SectionTitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>🎨</FeatureIcon>
              <FeatureTitle>Dynamic Theming</FeatureTitle>
              <FeatureDescription>
                Switch between three completely different themes with unique layouts, colors, and typography.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>📱</FeatureIcon>
              <FeatureTitle>Responsive Design</FeatureTitle>
              <FeatureDescription>
                Fully responsive layout that works perfectly on desktop, tablet, and mobile devices.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>⚡</FeatureIcon>
              <FeatureTitle>Performance Optimized</FeatureTitle>
              <FeatureDescription>
                Built with Vite for fast development and optimized production builds.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🔒</FeatureIcon>
              <FeatureTitle>Secure & Reliable</FeatureTitle>
              <FeatureDescription>
                TypeScript ensures type safety and prevents runtime errors.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🎯</FeatureIcon>
              <FeatureTitle>User Experience</FeatureTitle>
              <FeatureDescription>
                Smooth animations and transitions enhance the overall user experience.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🌐</FeatureIcon>
              <FeatureTitle>Modern Stack</FeatureTitle>
              <FeatureDescription>
                Built with React Router, Styled Components, and Context API for state management.
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </ContentSection>

        <TeamSection>
          <SectionTitle>Our Team</SectionTitle>
          <TeamGrid>
            <TeamMember>
              <MemberAvatar>👨‍💻</MemberAvatar>
              <MemberName>John Developer</MemberName>
              <MemberRole>Lead Developer</MemberRole>
              <MemberBio>
                Passionate about creating beautiful and functional user interfaces with modern web technologies.
              </MemberBio>
            </TeamMember>
            <TeamMember>
              <MemberAvatar>👩‍🎨</MemberAvatar>
              <MemberName>Sarah Designer</MemberName>
              <MemberRole>UI/UX Designer</MemberRole>
              <MemberBio>
                Creative designer focused on creating intuitive and visually appealing user experiences.
              </MemberBio>
            </TeamMember>
            <TeamMember>
              <MemberAvatar>👨‍🔬</MemberAvatar>
              <MemberName>Mike Architect</MemberName>
              <MemberRole>Software Architect</MemberRole>
              <MemberBio>
                Expert in building scalable and maintainable software architectures.
              </MemberBio>
            </TeamMember>
            <TeamMember>
              <MemberAvatar>👩‍💼</MemberAvatar>
              <MemberName>Lisa Manager</MemberName>
              <MemberRole>Project Manager</MemberRole>
              <MemberBio>
                Dedicated to delivering high-quality products on time and within budget.
              </MemberBio>
            </TeamMember>
          </TeamGrid>
        </TeamSection>

        <ContentSection style={{ textAlign: 'center' }}>
          <CTAButton>Get Started Today</CTAButton>
        </ContentSection>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;