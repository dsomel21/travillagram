import axios from 'axios';

const API_KEY_ACCU_WEATHER = 'LJlwDNdAblyyODF7mGyDvZGEhaGQOOJZ';
const AUTO_URL = `http://apidev.accuweather.com/locations/v1/cities/autocomplete.json?&apikey=${API_KEY_ACCU_WEATHER}&language=en`;

export const GET_WEATHER = 'GET_WEATHER';

export function getWeather(city) {
	const url = `${AUTO_URL}&q=${city}`
	const request = axios.get(url);
	
	return {
		type: GET_WEATHER,
		payload: request
	};
}