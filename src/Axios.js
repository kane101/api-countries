import axios from 'axios';

const Instance = axios.create({
	baseURL: 'https://restcountries.eu/rest/v2/',
	validateStatus: false,
});

export default Instance;
