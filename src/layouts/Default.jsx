import Header from 'components/Header';
import { useGlobalContext } from 'Context';
import React from 'react';

const Default = ({ children }) => {
	const { darkTheme } = useGlobalContext();
	return (
		<div className={`${darkTheme ? 'wrapper dark' : 'wrapper'}`}>
			<Header />
			<main className='container'>{children}</main>
		</div>
	);
};

export default Default;
