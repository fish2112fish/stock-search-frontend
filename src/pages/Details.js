import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    let { id } = useParams();
	return <div>{id?id:"Please choose a stock first"}</div>;
};

export default Details;
