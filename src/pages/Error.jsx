import React from 'react';
import Default from 'layouts/Default';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from 'images/iconmonstr-arrow-left-thin.svg';

const Error = () => {
	return (
		<>
			<Default>
				<div className='error-page'>
					<Link to='/'>
						<button className='back-arrow 404-error-btn'>
							<ArrowLeft className='back-arrow__icon' />
							Back
						</button>
					</Link>
					<h1>404 ERROR</h1>
				</div>
			</Default>
		</>
	);
};

export default Error;
