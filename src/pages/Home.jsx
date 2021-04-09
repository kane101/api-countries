import CountriesList from 'components/CountriesList';
import Search from 'components/Search';
import Default from 'layouts/Default';
import React from 'react';

const Home = () => {
	return (
		<>
			<Default>
				<Search />
				<CountriesList />
			</Default>
		</>
	);
};

export default Home;
