// Language Item group
// This is the item group that contains the language items

import React from 'react';
// import styles from './language-item-group.module.css';
import LanguageItem from './LanguageItem';
import { Center, SimpleGrid, Title } from '@mantine/core';
import { Container } from '@nextui-org/react';

export default function LanguageItemGroup({ title, languages }) {
	return (
    <>
      <Container
        size="xl"
        px="xl"
      >
        <Center>
          <Title
            order={1}
            color="teal"
          >
            {title}
          </Title>
        </Center>
      </Container>
      <SimpleGrid
        cols="5"
        spacing="xl"
        breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
      >
				{languages.map((language) => (
					<LanguageItem
						name={language.name}
						icon={language.icon}
						skillLevel={language.skillLevel}
						key={language.name}
					/>
				))}
      </SimpleGrid>
    </>
	)
};
