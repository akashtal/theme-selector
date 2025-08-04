import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const HomeContainer = styled.main<{ $isSidebar: boolean }>`
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
  max-width: 1200px;
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

const HeroTitle = styled.h1`
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

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 0.8s ease-out 0.2s both;
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
  animation: fadeInUp 0.8s ease-out 0.4s both;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.colors.shadow};
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const ProductsSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xlarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const RetryButton = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: ${({ theme }) => theme.layout.transition};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  text-align: center;
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  transition: ${({ theme }) => theme.layout.transition};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.colors.shadow};
  }
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xlarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isSidebar = currentTheme === 'theme2';

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.slice(0, 8)); // Limit to 8 products for demo
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    console.log('Product clicked:', product.title);
    // Add your product click logic here
  };

  if (loading) {
    return (
      <HomeContainer $isSidebar={isSidebar}>
        <ContentWrapper>
          <LoadingContainer>Loading products...</LoadingContainer>
        </ContentWrapper>
      </HomeContainer>
    );
  }

  if (error) {
    return (
      <HomeContainer $isSidebar={isSidebar}>
        <ContentWrapper>
          <ErrorContainer>
            <ErrorMessage>{error}</ErrorMessage>
            <RetryButton onClick={fetchProducts}>Try Again</RetryButton>
          </ErrorContainer>
        </ContentWrapper>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer $isSidebar={isSidebar}>
      <ContentWrapper>
        <HeroSection>
          <HeroTitle>Welcome to MultiTheme Store</HeroTitle>
          <HeroSubtitle>
            Discover amazing products with our beautiful multi-theme interface. 
            Switch between themes to experience different layouts and styles.
          </HeroSubtitle>
          <CTAButton>Explore Products</CTAButton>
        </HeroSection>

        <StatsSection>
          <StatCard>
            <StatNumber>{products.length}</StatNumber>
            <StatLabel>Products</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>4.8</StatNumber>
            <StatLabel>Average Rating</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Support</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>100%</StatNumber>
            <StatLabel>Satisfaction</StatLabel>
          </StatCard>
        </StatsSection>

        <ProductsSection>
          <SectionTitle>Featured Products</SectionTitle>
          <ProductsGrid>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </ProductsGrid>
        </ProductsSection>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;