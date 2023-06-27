import React, { useState, useEffect } from 'react';

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

import { useParams } from 'react-router-dom';
import ProfileNav from '../Components/ProfileNav';

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
				<Heading color={'white'}>
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
					<Link href={dev.iconPic.linkedLink}>
						<Image
							src={dev.iconPic.linkedin}
							alt="linkedIn"
						/>
					</Link>
					<Link href={dev.iconPic.twittLink}>
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
			<header>{devs}</header>
			<nav>
				<ProfileNav />
			</nav>
			<main></main>
			<footer></footer>
		</Flex>
	);
}
