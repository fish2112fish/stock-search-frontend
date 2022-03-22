import React from 'react';
import ContentCointaner from '../components/ContentCointaner';
import logo from '../assets/img/sm-logo.png';

const Home = () => {
	return <ContentCointaner>
    <img src={logo} style={{margin:'0px auto', display:'block', width:'85%',maxWidth:'700px'}} />
  </ContentCointaner>;
};

export default Home;
