import { MantineProvider } from '@mantine/core';
import { HeroText } from './components/Hero';
import { ArticlesCardsGrid } from './components/ArticleGrid';
import { FooterSocial } from './components/Footer';

const App = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: 'dark' }}
    >
      <HeroText />
      <ArticlesCardsGrid />
      <FooterSocial />
    </MantineProvider>
  );
};

export default App;
