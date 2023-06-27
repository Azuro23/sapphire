import {
	Container,
	Text,
	Stack,
	Flex,
	Box,
	Tabs,
	TabList,
	Tab,
	TabIndicator,
	TabPanels,
	TabPanel,
	// List,
	// ListItem,
} from '@chakra-ui/react';
import React from 'react';

const ProfileNav = () => {
	return (
		<Tabs
			position="relative"
			variant="unstyled"
		>
			<TabList>
				<Tab>About Me</Tab>
				<Tab>Experience</Tab>
				<Tab>Projects</Tab>
			</TabList>
			<TabIndicator
				mt="-1.5px"
				height="2px"
				bg="blue.500"
				borderRadius="1px"
			/>
		</Tabs>

		// <List
		// 	justify={'space-evenly'}
		// 	cursor={'pointer'}
		// >
		// 	<ListItem
		// 		color={'white'}
		// 		id="aboutMe"
		// 	>
		// 		<Flex>
		// 			<Container
		// 				justifyItems={'center'}
		// 				alignItems={'center'}
		// 			>
		// 				<hr color="black" />
		// 			</Container>
		// 			<Container>
		// 				<Text align={'center'}>About Me</Text>
		// 			</Container>
		// 		</Flex>
		// 	</ListItem>
		// 	<ListItem
		// 		color={'white'}
		// 		id="experience"
		// 	>
		// 		<Text>Experience</Text>
		// 	</ListItem>
		// 	<ListItem
		// 		color={'white'}
		// 		id="projects"
		// 	>
		// 		<Text>Projects</Text>
		// 	</ListItem>
		// </List>
	);
};

export default ProfileNav;
