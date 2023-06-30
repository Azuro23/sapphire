import React from 'react';
import { useParams } from 'react-router-dom';

const AboutDev = () => {
	const { id } = useParams();

	return <div>AboutDev</div>;
};

export default AboutDev;
