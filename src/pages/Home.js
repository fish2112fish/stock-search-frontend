import React from 'react';
import ContentContainer from '../components/ContentContainer';
import logo from '../assets/img/sm-logo.png';
import HomeSearch from '../components/search/HomeSearch';


const Home = () => {
	return (
		<ContentContainer>
			<img
				alt="Homepage Logo"
				src={logo}
				style={{
					margin: '0px auto',
					display: 'block',
					width: '85%',
					maxWidth: '700px',
				}}
			/>

        <HomeSearch />

		</ContentContainer>
	);

};

export default Home;
