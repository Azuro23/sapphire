import React, { useState, useEffect } from 'react';

import {
	Box,
	Container,
	Flex,
	HStack,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';

// import { useParams } from 'react-router-dom';

export default function Profile() {
	// const profileParams = useParams();

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
			console.log(developers);

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
		return <Box>{error.msg}</Box>;
	}

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
				<Box>
					<Heading color={'white'}>Shadreka McAllister</Heading>
					<Text color={'white'}>Software Engineer at The Azuro Agency</Text>
					<Text color={'white'}>
						I build inclusive, accessible products and digital experiences for
						apps and the web.
					</Text>
					<HStack justify={'space-between'}>
						<Box>
							<Image
								src="../../images/icon-github.svg"
								alt="github"
							/>
						</Box>
						<Box>
							<Image
								src="../../images/icon-linkedin.svg"
								alt="linkedIn"
							/>
						</Box>
						<Box>
							<Image
								src="../../images/icon-twitter.svg"
								alt="twitter"
							/>
						</Box>
					</HStack>
				</Box>
			</header>
			<Container color={'white'}>Nav Section</Container>
			<Container color={'white'}>About Me</Container>
			<Container color={'white'}> Experience</Container>
			<Container color={'white'}>Projects</Container>
		</Flex>
	);
}
