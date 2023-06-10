import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from '@mantine/core';

const mockdata = [
  {
    title: 'Obsidian to astro',
    image: '/obsidiantoastro.png',
    description: 'Note taking archives and blog posts',
    link: 'https://obsidian-to-astro.vercel.app/',
  },
  {
    title: 'Gooyogle Images',
    image: '/goyoogleimages.png',
    description: 'Fun little AI with vectorial database project',
    link: 'https://github.com/GoyoStach/goyoogle-image',
  },
  {
    title: 'Personnal Portfolio',
    image: '/portfolio.png',
    description: 'Infos about me',
    link: 'https://portfolio-vanilla-gilt.vercel.app/',
  },
  {
    title: 'Education',
    image: '/education.png',
    description: 'My School curriculum',
    link: 'https://education-nu-eosin.vercel.app/',
  },
  {
    title: 'Goyo-Shop',
    image: '/goyoshop.png',
    description: 'Demo of a webshop',
    link: 'https://goyo-shop.vercel.app/',
  },
];

const useStyles = createStyles(theme => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = mockdata.map(article => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href={article.link}
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text
        color="dimmed"
        size="xs"
        transform="uppercase"
        weight={700}
        mt="md"
      >
        {article.description}
      </Text>
      <Text
        className={classes.title}
        mt={5}
      >
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid
        cols={2}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
      >
        {cards}
      </SimpleGrid>
    </Container>
  );
}
