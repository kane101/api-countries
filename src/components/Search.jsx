import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as SearchIcon } from 'images/search-outline.svg';
import Select from './Select';
import { useGlobalContext } from 'Context';

const Search = () => {
	const { search, setSearch } = useGlobalContext();

	const searchValue = useRef('');

	useEffect(() => {
		searchValue.current.focus();
	}, []);

	return (
		<form className='search' onSubmit={(e) => e.preventDefault()}>
			<div className='search__form'>
				<SearchIcon />
				<input
					className='search__input'
					ref={searchValue}
					type='text'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Search for a country…'
				/>
			</div>
			<Select />
		</form>
	);
};

export default Search;
