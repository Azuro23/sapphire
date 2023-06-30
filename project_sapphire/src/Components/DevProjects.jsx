import { Box, Flex, Image } from '@chakra-ui/react';
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
				width={'auto'}
			>
				{dev.projectDetails.map((projectDetail, ind) => (
					<Box
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
						<Box className="projectDesc">
							<Box className="projectTitle"> {`${projectDetail.title}`} </Box>
							<Box className="projectTechs">
								<Box className="tech">
									{projectDetail.techs.a == null || undefined
										? null
										: `${projectDetail.techs.a}`}
								</Box>
								<Box className="tech">
									{projectDetail.techs.b == null || undefined
										? null
										: `${projectDetail.techs.b}`}
								</Box>
								<Box className="tech">
									{projectDetail.techs.c == null || undefined
										? null
										: `${projectDetail.techs.c}`}
								</Box>
							</Box>
						</Box>
					</Box>
				))}
			</Flex>
		) : null
	);

	return <Flex>{devProjects}</Flex>;
};

export default DevProjects;
