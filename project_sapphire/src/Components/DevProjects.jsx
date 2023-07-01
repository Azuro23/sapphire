import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';

const DevProjects = ({ developers }) => {
	const { id } = useParams();

	const devProjects = developers.map((dev, index) =>
		index == id ? (
			<Flex
				className="projectsContainer"
				key={`${dev.iD}`}
				color={'white'}
			>
				{dev.projectDetails.map((projectDetail, ind) => (
					<Flex
						key={ind}
						className="project"
					>
						<Image
							src={`${projectDetail.img.small}`}
							alt={`${projectDetail.title}`}
							className="projectImg"
							width={'auto'}
							height={'25rem'}
						/>
						<Flex className="projectDesc">
							<Text className="projectTitle"> {`${projectDetail.title}`} </Text>
							<Box className="projectTechs">
								<Text className="tech">
									{projectDetail.techs.a == null || undefined
										? null
										: `${projectDetail.techs.a}`}
								</Text>
								<Text className="tech">
									{projectDetail.techs.b == null || undefined
										? null
										: `${projectDetail.techs.b}`}
								</Text>
								<Text className="tech">
									{projectDetail.techs.c == null || undefined
										? null
										: `${projectDetail.techs.c}`}
								</Text>
							</Box>
						</Flex>
					</Flex>
				))}
			</Flex>
		) : null
	);

	return <Flex>{devProjects}</Flex>;
};

export default DevProjects;
