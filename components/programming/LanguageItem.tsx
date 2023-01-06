// Displays a programming language, with a name and icon.

import React from 'react';
import styles from './language-item.module.css';
import { Text, Paper, Center } from '@mantine/core';
import { Badge, Avatar } from '@nextui-org/react';

function skillLevelToColor (skillLevel) {
	switch (skillLevel) {
		case "Novice":
			return "primary";
		case "Intermediate":
			return "success";
		case "Proficient":
			return "warning";
		case "Expert":
			return "error";
		default:
			return "primary";
	}
}

// export default function LanguageItem({ name, icon, skillLevel }) {
// 	return (
// 		<div className={styles.languageItem}>
// 			<Badge
// 				color={skillLevelToColor(skillLevel)}
// 				className={styles.languageItemBadge}
// 				content={skillLevel}
// 				size={"md"}
// 			>
// 				{
// 					<Avatar
// 						src={icon}
// 						size={"lg"}
// 						className={styles.languageItemAvatar}
// 						color={skillLevelToColor(skillLevel)}
// 						bordered
// 					/>
// 				}
// 			</Badge>
// 			<Text
// 				h3
// 				className={styles.languageItemName}
// 			>
// 				{name}
// 			</Text>
// 		</div>
// 	)
// };

interface UserInfoActionProps {
  icon: string;
  name: string;
  skillLevel: string;
}

export default function LanguageItem({ icon, name, skillLevel }: UserInfoActionProps) {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Center>
      <Badge
				color={skillLevelToColor(skillLevel)}
				className={styles.languageItemBadge}
				content={skillLevel}
				size={"md"}
        enableShadow="true"
        variant='flat'
        placement="top-left"
        
			>
        {
        <Avatar
						src={icon}
						size={"lg"}
						className={styles.languageItemAvatar}
						color={skillLevelToColor(skillLevel)}
						bordered
					/>
        }
			</Badge>
      </Center>

      <Text align="center" size="lg" weight={500} mt="md">
        {name}
      </Text>

    </Paper>
  );
}
