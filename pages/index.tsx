import { AppShell, Center, Grid } from '@mantine/core';
import { HeaderMenu } from '../components/HeaderMenu'
import HeroTitle from '../components/HeroTitle';
import CardWithStats from '../components/CardWithStats';
import programming from '../conf/programming.json';
import LanguageItemGroup from '../components/programming/LanguageItemGroup';

export default function IndexPage() {
  return (
    <AppShell
      padding="md"
      header={
        <HeaderMenu
          links={[
            {
              "link": "#projects",
              "label": "My Projects"
            },
            {
              "link": "#skills",
              "label": "My Skills"
            },
            {
              "link": "#about-me",
              "label": "About Me"
            },
            ]}
          />
      }
    >

      <div className="bg__gradient"></div>
      <HeroTitle 
        title="My Projects"
        description="From Web Development to ARMV8"
        id="projects"
      />
      <Center>
      <Grid
        gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}
      >
        <Grid.Col span={6}>
          <CardWithStats
            image="https://flyboat.biishop.org/flyboat.svg"
            title="Flyboat"
            completed='10% completed'
            description="A Modern Gradebook, for students, by students"
            stats={[
              {
                "title": "Technologies",
                "value": "Vite, Go API, Logto",
              },
              {
                "title": "Active Team Members",
                "value": "8 Members"
              },
              {
                "title": "Type",
                "value": "Fullstack"
              }
            ]}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <CardWithStats
            image="/next-js.svg"
            title="Campaign Website"
            completed='Completed (unused)'
            description="A campaign website written for some friends"
            stats={[
              {
                "title": "Technologies",
                "value": "Next.js, sanity.io"
              },
              {
                "title": "Type",
                "value": "Front End"
              }
            ]}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <CardWithStats
            image="https://flyboat.biishop.org/flyboat.svg"
            title="Spiderman In SMO"
            completed='Completed'
            description="A Mod for SMO that adds Spiderman"
            stats={[
              {
                "title": "How?",
                "value": "Decompilating an executable, and asm hooks"
              },
              {
                "title": "Type",
                "value": "Switch Modding"
              }
            ]}
          />
        </Grid.Col>

      </Grid>
      </Center>

      <HeroTitle
        title="My Skills"
        description="What languages am I most proficient in?"
        id="skills"
      />
      <LanguageItemGroup
        title="Languages"
        languages={programming.languages}
      />
      <LanguageItemGroup
        title="Frameworks"
        languages={programming.frameworks}
      />
      <LanguageItemGroup
        title="Tools"
        languages={programming.tools}
      />
      
      <HeroTitle
        title="About Me"
        description="Who am I?"
        id="about-me"
      />



    
      

    </AppShell>
  );
}
