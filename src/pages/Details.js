import React from 'react';
import { useParams } from 'react-router-dom';
import ContentCointaner from '../components/ContentCointaner';

const Details = () => {
    let { id } = useParams();
	return <ContentCointaner>{id?id:"Please choose a stock first"}</ContentCointaner>;
};

export default Details;
