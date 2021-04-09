import Default from 'layouts/Default';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from 'images/iconmonstr-arrow-left-thin.svg';
import React from 'react';

const Country = () => {
	let {
		state,
		state: {
			flag,
			name,
			nativeName,
			population,
			region,
			subregion,
			capital,
			topLevelDomain,
			currencies,
			languages,
			borders,
		},
	} = useLocation();
	let history = useHistory();

	function backButton() {
		history.push('/');
	}
	return (
		<Default>
			<div className='country-single'>
				<button className='back-arrow' onClick={backButton}>
					<ArrowLeft className='back-arrow__icon' />
					Back
				</button>
				<div className='single'>
					<div className='single__image'>
						<img src={flag} alt='' />
					</div>
					<div className='single__content country-detail'>
						<h1 className='country-detail__title'>{name}</h1>
						<div className='country-detail__Wrapper'>
							<div className='country-detail__left'>
								<p className='country-detail__stat'>
									Native Name: <span>{nativeName}</span>
								</p>
								<p className='country-detail__stat'>
									Population: <span>{population}</span>
								</p>
								<p className='country-detail__stat'>
									Region: <span>{region}</span>
								</p>
								<p className='country-detail__stat'>
									Sub Region: <span>{subregion}</span>
								</p>
								<p className='country-detail__stat'>
									Capital: <span>{capital}</span>
								</p>
							</div>
							<div className='country-detail__right'>
								<p className='country-detail__stat'>
									Top Level Domain: <span>{topLevelDomain}</span>
								</p>
								<p className='country-detail__stat'>
									Currencies:{' '}
									<span>{currencies.map((currency) => currency.name)}</span>
								</p>
								<p className='country-detail__stat'>
									Languages:{' '}
									<span>{languages.map((language) => language.name)}</span>
								</p>
							</div>
						</div>
						{borders.length > 0 && (
							<div className='borders'>
								<span>Border Countries:</span>
								<div className='border-buttons'>
									{borders.map((border) => (
										<button className='border-button'>{border}</button>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</Default>
	);
};

export default Country;
