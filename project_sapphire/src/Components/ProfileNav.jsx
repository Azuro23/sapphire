import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react';
import React from 'react';

const ProfileNav = () => {
	return (
		<Tabs
			position="relative"
			variant="unstyled"
			color={'white'}
			orientation="vertical"
		>
			<TabList>
				<Tab>About Me</Tab>
				<Tab>Experience</Tab>
				<Tab>Projects</Tab>
			</TabList>
			<TabIndicator
				width="1.5px"
				height="2px"
				bg="purple.500"
				borderRadius="1px"
			/>
		</Tabs>
	);
};

export default ProfileNav;
