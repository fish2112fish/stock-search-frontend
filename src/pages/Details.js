import React from 'react';
import { useParams } from 'react-router-dom';
import ContentContainer from '../components/ContentContainer';

const Details = () => {
    let { id } = useParams();
	return <ContentContainer>{id?id:"Please choose a stock first"}</ContentContainer>;
};

export default Details;
