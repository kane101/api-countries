import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Country = ({ country }) => {
	return (
		<Link to={{ pathname: `/country/${country.name.toLowerCase()}`, state: country }}>
			<article className='country'>
				<div className='country__flag'>
					<img src={country.flag} alt='' />
				</div>
				<div className='country__body'>
					<h4 className='country__name'>{country.name}</h4>
					<p className='country__detail'>
						Population: <span>{country.population}</span>
					</p>
					<p className='country__detail'>
						Region: <span>{country.region}</span>
					</p>
					<p className='country__detail'>
						Population: <span>{country.capital}</span>
					</p>
				</div>
			</article>
		</Link>
	);
};

export default Country;
