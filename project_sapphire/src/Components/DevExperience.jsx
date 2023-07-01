import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';

const DevExperience = ({ developers }) => {
	const { id } = useParams();

	const devExp = developers.map((dev, index) =>
		index == id ? (
			<Flex
				key={`${dev.iD}`}
				color={'white'}
				width={'auto'}
				flexDirection={'column'}
			>
				<Box>
					{dev.techstack.html == '' || undefined ? null : (
						<Flex>
							<Text>HTML:</Text>
							<Text>{`${dev.techstack.html}`}</Text>
						</Flex>
					)}
				</Box>
				<Box>
					{dev.techstack.css == '' || undefined ? null : (
						<Flex>
							<Text>CSS:</Text>
							<Text>{`${dev.techstack.css}`}</Text>
						</Flex>
					)}
				</Box>
				<Box>
					{dev.techstack.javascript == '' || undefined ? null : (
						<Flex>
							<Text>Javascript:</Text>
							<Text>{`${dev.techstack.javascript}`}</Text>
						</Flex>
					)}
				</Box>
				<Box>
					{dev.techstack.reacct == '' || undefined ? null : (
						<Flex>
							<Text>React:</Text>
							<Text>{`${dev.techstack.reacct}`}</Text>
						</Flex>
					)}
				</Box>
				<Box>
					{dev.techstack.sass == '' || undefined ? null : (
						<Flex>
							<Text>Sass:</Text>
							<Text>{`${dev.techstack.sass}`}</Text>
						</Flex>
					)}
				</Box>
				<Box>
					{dev.techstack.node == '' || undefined ? null : (
						<Flex>
							<Text>Node:</Text>
							<Text>{`${dev.techstack.node}`}</Text>
						</Flex>
					)}
				</Box>
				<Box>
					{dev.techstack.php == '' || undefined ? null : (
						<Flex>
							<Text>PHP:</Text>
							<Text>{`${dev.techstack.php}`}</Text>
						</Flex>
					)}
				</Box>
				<Box>
					{dev.techstack.vsCode == '' || undefined ? null : (
						<Flex>
							<Text>Visual Studio Code:</Text>
							<Text>{`${dev.techstack.vsCode}`}</Text>
						</Flex>
					)}
				</Box>
				<Box>
					{dev.techstack.figma == '' || undefined ? null : (
						<Flex>
							<Text>Figma:</Text>
							<Text>{`${dev.techstack.figma}`}</Text>
						</Flex>
					)}
				</Box>
				<Box>
					{dev.techstack.adobe == '' || undefined ? null : (
						<Flex>
							<Text>Adobe XD:</Text>
							<Text>{`${dev.techstack.adobe}`}</Text>
						</Flex>
					)}
				</Box>
				<Box>
					{dev.techstack.sketch == '' || undefined ? null : (
						<Flex>
							<Text>Sketch:</Text>
							<Text>{`${dev.techstack.sketch}`}</Text>
						</Flex>
					)}
				</Box>
				<Box>
					{dev.techstack.jest == '' || undefined ? null : (
						<Flex>
							<Text>Jest:</Text>
							<Text>{`${dev.techstack.jest}`}</Text>
						</Flex>
					)}
				</Box>
			</Flex>
		) : null
	);

	return <Box color={'white'}>{devExp}</Box>;
};

export default DevExperience;
