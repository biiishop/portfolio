import { createStyles, Card, Image, Text, Group, RingProgress, Center } from '@mantine/core';

const useStyles = createStyles((theme, _params) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },

  section: {
    padding: "15px"
  }
}));

interface CardWithStatsProps {
  image: string;
  title: string;
  description: string;
  completed: string;
  stats: {
    title: string;
    value: string;
  }[];
}

export default function CardWithStats({ image, title, description, stats, completed }: CardWithStatsProps) {
  const { classes } = useStyles();

  const items = stats.map((stat) => (
    <div key={stat.title}>
      <Text size="xs" color="dimmed">
        {stat.title}
      </Text>
      <Text weight={500} size="sm">
        {stat.value}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="lg" className={ classes.card } radius="lg">
      <Card.Section className={classes.section}>
        <Center>
          <Image src={image} alt={title} height={100} width={100} />
        </Center>
      </Card.Section>

      <Group position="apart" mt="xl">
        <Text size="sm" weight={700} className={classes.title}>
          {title}
        </Text>
        <Group spacing={5}>
          <Text size="xs" color="dimmed">
            {completed}
          </Text>
          <RingProgress size={18} sections={[{ value: 80, color: 'blue' }]} />
        </Group>
      </Group>
      <Text mt="sm" mb="md" color="dimmed" size="xs">
        {description}
      </Text>
      <Card.Section className={classes.footer}>{items}</Card.Section>
    </Card>
  );
}
