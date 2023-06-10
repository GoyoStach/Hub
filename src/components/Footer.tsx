import { createStyles, Container, Group, ActionIcon, rem } from '@mantine/core';
import {
  IconBrandYoutube,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: rem(30),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'full',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group
          spacing={0}
          className={classes.links}
          position="center"
          noWrap
        >
          <ActionIcon
            size="lg"
            component="a"
            href="https://github.com/GoyoStach"
          >
            <IconBrandGithub
              href="https://github.com/GoyoStach"
              size="1.05rem"
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="https://www.linkedin.com/in/guillaumeexcoffier/?locale=en_US"
          >
            <IconBrandLinkedin
              size="1.05rem"
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
