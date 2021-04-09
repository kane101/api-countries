import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import Instance from './Axios.js';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [countries, setCountries] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [darkTheme, setDarkTheme] = useState(false);
	const [loading, setLoading] = useState(false);
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState('All');
	const [options, setOptions] = useState([
		'All',
		'Africa',
		'Americas',
		'Asia',
		'Europe',
		'Oceania',
	]);

	const getCountries = useCallback(async () => {
		setLoading(true);
		try {
			if (search === '') {
				const response = await Instance.get(`all`);
				setCountries(response.data);
			} else {
				const response = await Instance.get(`name/${search}`);
				response.data.status ? setCountries([]) : setCountries(response.data);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}, [search]);

	useEffect(() => {
		setDarkTheme(localStorage.getItem('darkTheme'));
	}, []);

	useEffect(() => {
		getCountries();
	}, [search]);

	useEffect(() => {
		setFilteredCountries(countries);
	}, [countries, getCountries]);

	const changeFilter = (option, e) => {
		if (option === 'All') {
			setFilteredCountries(countries);
		} else {
			setFilteredCountries(countries.filter((country) => country.region === option));
		}
		setFilter(option);
		setIsOpen(!isOpen);
	};

	return (
		<AppContext.Provider
			value={{
				options,
				isOpen,
				setIsOpen,
				darkTheme,
				setDarkTheme,
				loading,
				setLoading,
				search,
				setSearch,
				filteredCountries,
				setFilteredCountries,
				filter,
				changeFilter,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
