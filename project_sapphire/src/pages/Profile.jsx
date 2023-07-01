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
					width={'29.0625rem'}
					height={'3rem'}
					color={'white'}
					fontFamily={'inter'}
					fontWeight={'700'}
					fontSize={'3rem'}
					lineHeight={'1rem'}
					textTransform={'capitalize'}
				>
					{`${dev.firstName}`} {`${dev.lastName}`}
				</Heading>
				<Text
					width={'29.0625rem'}
					height={'1.75rem'}
					color={'white'}
					fontFamily={'inter'}
					fontWeight={'500'}
					fontSize={'1.25rem'}
					lineHeight={'1.75rem'}
					letterSpacing={'-0.025rem'}
					textTransform={'capitalize'}
				>{`${dev.currentTitle}`}</Text>
				<Text
					maxWidth={'21.875rem'}
					height={'3rem'}
					color={'white'}
					fontFamily={'inter'}
					fontWeight={'300'}
					fontSize={'1rem'}
					opacity={'0.5'}
					lineHeight={'1.5rem'}
					marginTop={'1rem'}
				>{`${dev.introTagLine}`}</Text>
				<HStack
					width={'28.8125rem'}
					justify={'center'}
					cursor={'pointer'}
				>
					<Link
						href={`${dev.iconPic.gitLink}`}
						isExternal
					>
						<Image
							src={dev.iconPic.github}
							alt="github"
						/>
					</Link>
					<Link
						href={`${dev.iconPic.linkedLink}`}
						isExternal
					>
						<Image
							src={dev.iconPic.linkedin}
							alt="linkedIn"
						/>
					</Link>
					<Link
						href={`${dev.iconPic.twittLink}`}
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
		>
			<header
				width={'50%'}
				height={'44.6875rem'}
			>
				<Flex
					direction={'column'}
					width={'29.0625rem'}
					height={'44.6875rem'}
					position={'sticky'} //need to adjust to make container sticky
				>
					<Flex
						width={'29.0625rem'}
						height={'auto'}
						justify={'space-between'}
					>
						{devs}
					</Flex>
					<nav>
						<ProfileNav />
					</nav>
				</Flex>
			</header>
			<main
				width={'50%'}
				height={'100vh'}
			>
				<Flex
					flexDirection={'column'}
					wrap={'wrap'}
					paddingTop={'25rem'}
					marginLeft={'2.5rem'}
				>
					<Box
						id="devAbout"
						width={'29.0625rem'}
						height={'23.125rem'}
					>
						<AboutDev developers={developers} />
					</Box>
					<Box
						id="devExperience"
						width={'29.0625rem'}
						height={'23.125rem'}
					>
						<DevExperience developers={developers} />
					</Box>
					<Flex
						id="devProjects"
						width={'29.0625rem'}
						height={'auto'}
						direction={'column'}
					>
						<DevProjects developers={developers} />
					</Flex>
				</Flex>
			</main>
			{/* <footer>
				<Flex >Contact Us Section</Flex>
			</footer> */}
		</Flex>
	);
}
