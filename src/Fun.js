import React from 'react';
import './index.css';

const Fun = (props) => {
	return (
		<div class='funClass'>
			<h1>Fun</h1>
			<p>{props.propsValue}</p>
		</div>
	);
};

export default Fun;
