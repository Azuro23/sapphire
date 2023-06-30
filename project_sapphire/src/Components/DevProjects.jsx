import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';

const DevProjects = ({ developers }) => {
	const { id } = useParams();

	const devProjects = developers.map((dev, index) =>
		index == id ? (
			<Flex
				className="projectsContainer"
				key={`${dev.iD}`}
			>
				{dev.projectDetails.map((projectDetail, ind) => (
					<Box
						key={ind}
						className="project"
					>
						<img
							src={`${projectDetail.img.small}`}
							alt={`${projectDetail.title}`}
							className="projectImg"
							width={'auto'}
							height={'25rem'}
						/>
						<Box className="projectDesc">
							<Box className="projectTitle"> {`${projectDetail.title}`} </Box>
							<Box className="projectTechs">
								<div className="tech">
									{' '}
									{projectDetail.techs.a == null || undefined
										? null
										: `${projectDetail.techs.a}`}{' '}
								</div>
								<div className="tech">
									{' '}
									{projectDetail.techs.b == null || undefined
										? null
										: `${projectDetail.techs.b}`}{' '}
								</div>
								<div className="tech">
									{' '}
									{projectDetail.techs.c == null || undefined
										? null
										: `${projectDetail.techs.c}`}{' '}
								</div>
							</Box>
						</Box>
					</Box>
				))}
			</Flex>
		) : null
	);

	return <div>{devProjects}</div>;
};

export default DevProjects;
