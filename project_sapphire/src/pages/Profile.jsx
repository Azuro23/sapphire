import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Supports weights 100-900
import '@fontsource-variable/inter';

import {
	Box,
	Container,
	Flex,
	HStack,
	Heading,
	Image,
	Link,
	Text,
} from '@chakra-ui/react';

import ProfileNav from '../Components/ProfileNav';
import DevProjects from '../Components/DevProjects';
import AboutDev from '../Components/AboutDev';
import DevExperience from '../Components/DevExperience';

export default function Profile() {
	const { id } = useParams();

	const [developers, setDevelopers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	const getDataForDevelopers = async () => {
		try {
			const res = await fetch(
				`https://azuro-agency-default-rtdb.firebaseio.com/developers.json`
			);

			if (!res.ok) throw new Error('Something went wrong');

			const developers = await res.json();
			console.log('List of developers: ', developers);

			setDevelopers(developers);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setError(error.msg);
		}
	};

	useEffect(() => {
		getDataForDevelopers();
	}, []);

	if (isLoading) {
		return <Box>Loading...</Box>;
	}

	if (error) {
		return <Box color={'red'}>{error.msg}</Box>;
	}

	const devs = developers.map((dev, index) =>
		index == id ? (
			<Box key={index}>
				<Heading
					color={'white'}
					fontFamily={'inter'}
				>
					{dev.firstName} {dev.lastName}
				</Heading>
				<Text color={'white'}>{dev.currentTitle}</Text>
				<Text color={'white'}>{dev.introTagLine}</Text>
				<HStack
					justify={'space-between'}
					cursor={'pointer'}
				>
					<Link
						href={dev.iconPic.gitLink}
						isExternal
					>
						<Image
							src={dev.iconPic.github}
							alt="github"
						/>
					</Link>
					<Link
						href={dev.iconPic.linkedLink}
						isExternal
					>
						<Image
							src={dev.iconPic.linkedin}
							alt="linkedIn"
						/>
					</Link>
					<Link
						href={dev.iconPic.twittLink}
						isExternal
					>
						<Image
							src={dev.iconPic.twitter}
							alt="twitter"
						/>
					</Link>
				</HStack>
			</Box>
		) : null
	);

	return (
		<Flex
			width={'100vw'}
			height={'100vh'}
			placeContent={'center'}
			placeItems={'center'}
			backgroundColor={'#062143'}
			flexDirection={'column'}
		>
			<header>
				{devs}
				<nav>
					<ProfileNav />
				</nav>
			</header>
			<main>
				<section id="devAbout">
					<AboutDev developers={developers} />
				</section>
				<section id="devExperience">
					<DevExperience developers={developers} />
				</section>
				<section id="devProjects">
					<DevProjects developers={developers} />
				</section>
			</main>
			<footer>Contact Us Section</footer>
		</Flex>
	);
}
