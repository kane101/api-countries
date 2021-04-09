import React from 'react';
import CountryCard from './CountryCard';
import { ReactComponent as Spinner } from 'images/iconmonstr-loading-10.svg';
import { useGlobalContext } from 'Context';

const CountriesList = () => {
	const { filteredCountries, loading, setLoading } = useGlobalContext();

	if (loading)
		return (
			<div className='empty-result'>
				<Spinner className='loading-spinner' />
			</div>
		);

	if (filteredCountries.length < 1) {
		return (
			<div className='empty-result'>
				<h1>No countries matched your search criteria</h1>
			</div>
		);
	}
	return (
		<div className='countries'>
			{filteredCountries.map((country, key) => {
				return <CountryCard country={country} key={key} />;
				<Spinner />;
			})}
		</div>
	);
};

export default CountriesList;
