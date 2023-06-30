import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';

const AboutDev = ({ developers }) => {
	const { id } = useParams();

	const aboutDev = developers.map((dev, index) =>
		index == id ? (
			<Flex
				key={`${dev.iD}`}
				color={'white'}
				width={'auto'}
			>
				<Text>
					{dev.aboutMe.intro == null || undefined
						? null
						: `${dev.aboutMe.intro}`}
				</Text>
				<Text>
					{dev.aboutMe.para2 == null || undefined
						? null
						: `${dev.aboutMe.para2}`}
				</Text>
				<Text>
					{dev.aboutMe.para3 == null || undefined
						? null
						: `${dev.aboutMe.para3}`}
				</Text>
			</Flex>
		) : null
	);

	return <Flex>{aboutDev}</Flex>;
};

export default AboutDev;
