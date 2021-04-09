import React from 'react';
import { ReactComponent as MoonOutlined } from 'images/moon-outline.svg';
import { ReactComponent as Moon } from 'images/moon.svg';
import { useGlobalContext } from 'Context';

const Header = () => {
	const { setDarkTheme, darkTheme } = useGlobalContext();

	const handleTheme = () => {
		setDarkTheme(!darkTheme);
		if (!darkTheme) {
			localStorage.setItem('darkTheme', true);
		} else {
			localStorage.setItem('darkTheme', false);
		}
	};

	return (
		<header className={'header'}>
			<div className='container'>
				<h1 className='header__logo'>Where in the world?</h1>
				<div className='header__toggle' onClick={handleTheme}>
					{darkTheme ? <Moon style={{ fill: '#fff' }} /> : <MoonOutlined />}
					{darkTheme ? 'Light Mode' : 'Dark Mode'}
				</div>
			</div>
		</header>
	);
};

export default Header;
