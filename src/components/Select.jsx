import React from 'react';
import { ReactComponent as Chevron } from 'images/chevron-down-outline.svg';
import { useGlobalContext } from 'Context';

const Select = () => {
	const { isOpen, setIsOpen, options, filter, changeFilter } = useGlobalContext();
	return (
		<div className={`${isOpen ? 'select active' : 'select'}`}>
			<div className='select__toggle' onClick={() => setIsOpen(!isOpen)}>
				{filter !== 'All' ? filter : 'Filter by Region'} <Chevron />
			</div>
			{
				<div className='select__options'>
					{options.map((option, key) => {
						return (
							<div
								className={`${
									option === filter ? 'select__option active' : ' select__option'
								}`}
								value={option}
								key={key}
								onClick={(e) => changeFilter(option, e)}>
								{option}
							</div>
						);
					})}
				</div>
			}
		</div>
	);
};

export default Select;
