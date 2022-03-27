import React from 'react';
import ContentContainer from '../components/ContentContainer';
import logo from '../assets/img/sm-logo.png';

const Home = () => {
	return <ContentContainer>
    <img src={logo} style={{margin:'0px auto', display:'block', width:'85%',maxWidth:'700px'}} />
  </ContentContainer>;
};

export default Home;
